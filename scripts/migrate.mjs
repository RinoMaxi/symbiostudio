#!/usr/bin/env node
/**
 * Run the Supabase subscriptions table migration.
 *
 * Usage:
 *   SUPABASE_ACCESS_TOKEN=sbp_xxx node scripts/migrate.mjs
 *
 * Get your access token at: https://supabase.com/dashboard/account/tokens
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseEnvFile(filePath) {
  try {
    const lines = readFileSync(filePath, "utf8").split("\n");
    const vars = {};
    for (const line of lines) {
      const match = line.match(/^([^#=\s][^=]*)=(.*)$/);
      if (match) {
        vars[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, "");
      }
    }
    return vars;
  } catch {
    return {};
  }
}

const env = parseEnvFile(resolve(__dirname, "../.env.local"));
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const accessToken = process.env.SUPABASE_ACCESS_TOKEN;

if (!supabaseUrl) {
  console.error("ERROR: NEXT_PUBLIC_SUPABASE_URL not found in .env.local");
  process.exit(1);
}

if (!accessToken) {
  console.error("ERROR: SUPABASE_ACCESS_TOKEN is required.\n");
  console.error("  1. Go to https://supabase.com/dashboard/account/tokens");
  console.error("  2. Generate a new token");
  console.error("  3. Run: SUPABASE_ACCESS_TOKEN=sbp_xxx node scripts/migrate.mjs\n");
  process.exit(1);
}

const projectRef = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
if (!projectRef) {
  console.error("ERROR: Could not parse project ref from:", supabaseUrl);
  process.exit(1);
}

const sql = readFileSync(
  resolve(__dirname, "../supabase/migrations/001_subscriptions.sql"),
  "utf8"
);

console.log(`Connecting to Supabase project: ${projectRef}`);
console.log("Running migration 001_subscriptions.sql …\n");

const res = await fetch(
  `https://api.supabase.com/v1/projects/${projectRef}/database/query`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: sql }),
  }
);

const body = await res.json();

if (!res.ok) {
  console.error("Migration FAILED (HTTP", res.status + "):");
  console.error(JSON.stringify(body, null, 2));
  process.exit(1);
}

console.log("Migration succeeded.");
if (Array.isArray(body) && body.length > 0) {
  console.log(JSON.stringify(body, null, 2));
}
