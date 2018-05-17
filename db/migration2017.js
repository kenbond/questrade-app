const adapter = require("./dataAdapter");
const context = require("../context");

context.initConfig("local");

adapter.runQuery('show tables');