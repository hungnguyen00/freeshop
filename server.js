var express = require('express');
var app = express();
app.set('view engine', 'ejs') // template engine is ejs
app.use(express.static('public')); // css, js, image,....

app.get('/admin', function (req, res) {
   res.render('admin/template/index');
})
app.get('/admin_template', function (req, res) {
   res.render('admin/template/index_template');
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Running")
})
