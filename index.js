var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});
var server=app.listen(process.env.PORT || 3000, function(){
console.log('listening on', http.address().port);
});