CREATE TABLE IF NOT EXISTS events (
  id UUID,
  users_id UUID,
  event_type String,
  created_at DateTime
)
ENGINE = MergeTree()
ORDER BY (created_at);
