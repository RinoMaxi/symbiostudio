-- Add media columns to posts table
ALTER TABLE posts
  ADD COLUMN IF NOT EXISTS media_urls text[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS video_url   text;

-- Create post-media bucket (public so URLs are readable without auth)
INSERT INTO storage.buckets (id, name, public)
VALUES ('post-media', 'post-media', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public reads on post-media objects
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Public read post-media'
  ) THEN
    CREATE POLICY "Public read post-media"
      ON storage.objects FOR SELECT
      USING (bucket_id = 'post-media');
  END IF;
END;
$$;
