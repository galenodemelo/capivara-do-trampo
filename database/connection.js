const sqlite = require("sqlite-sync")
sqlite.connect("./database/database.db")

module.exports = sqlite