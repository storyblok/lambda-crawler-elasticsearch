var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
  host: '{{protocol}}://{{user}}:{{password}}@{{domain}}:{{port}}/',
  log: 'trace'
})

module.exports = client;