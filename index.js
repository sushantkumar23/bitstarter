var express = require('express')
var app = express();
var buf = new Buffer ();
buf = fs.readFileSync(index.html);
var print = new String()
print = buf.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send($print)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
