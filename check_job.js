const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./data/youtube_automation.db');

db.all("SELECT id, topic, status, stage, progress, created_at, error FROM generation_jobs ORDER BY created_at DESC LIMIT 5", [], (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Recent Jobs:");
        rows.forEach(r => console.log(JSON.stringify(r, null, 2)));
    }
    db.close();
});