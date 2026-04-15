CREATE TABLE IF NOT EXISTS events (
  id UUID,
  user_id UUID,
  event_type String,
  created_at DateTime
)
ENGINE = MergeTree()
ORDER BY (created_at);
