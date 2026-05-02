-- Symbiostudio membership subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id                    uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_user_id         text        NOT NULL UNIQUE,
  stripe_customer_id    text        UNIQUE,
  stripe_subscription_id text       UNIQUE,
  plan                  text        NOT NULL DEFAULT 'free',     -- 'free' | 'premium' | 'elite'
  billing_period        text        DEFAULT 'monthly',           -- 'monthly' | 'yearly'
  status                text        NOT NULL DEFAULT 'active',   -- Stripe subscription status
  current_period_end    timestamptz,
  created_at            timestamptz DEFAULT now(),
  updated_at            timestamptz DEFAULT now()
);

-- Index for fast lookups by Stripe IDs
CREATE INDEX IF NOT EXISTS subscriptions_stripe_customer_id_idx
  ON subscriptions (stripe_customer_id);

CREATE INDEX IF NOT EXISTS subscriptions_stripe_subscription_id_idx
  ON subscriptions (stripe_subscription_id);

-- Row Level Security (webhook upserts use service role key which bypasses RLS)
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow users to read only their own subscription row
CREATE POLICY "Users can read own subscription"
  ON subscriptions FOR SELECT
  USING (auth.uid()::text = clerk_user_id);

-- Service role has unrestricted access (used by webhook + API routes)
-- No explicit policy needed; service role bypasses RLS automatically
