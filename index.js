#! /usr/bin/env node
console.log("💣 Killing Packager on port 8081.");

var util = require("util");
var exec = require("child_process").exec;
exec("lsof -n -i4TCP:8081 | sed '1 d' | awk '{print $2}' | xargs kill -9");
