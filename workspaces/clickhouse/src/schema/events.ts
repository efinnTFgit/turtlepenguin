export const eventsTable = {
  name: "events",
  columns: {
    id: "UUID",
    user_id: "UUID",
    event_type: "String",
    created_at: "DateTime",
    testCol: "String"
  }
};

export function createEventsDDL() {
  return `
    CREATE TABLE IF NOT EXISTS events (
      id UUID,
      user_id UUID,
      event_type String,
      created_at DateTime,
      testCol: String
    )
    ENGINE = MergeTree()
    ORDER BY (created_at);
  `;
}
