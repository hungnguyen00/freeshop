import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import {MongoClient} from 'mongodb';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
import Database from './models/Database';
import User from './models/User';
import {LocalStorage} from 'node-localstorage';
import ProductController from './controllers/web/ProductController';
/*var db=new Database();
var user= new User();
user.username='haha';
user.password='adsfaf';
console.log(user);
user.collname='users';
db.mongoosemodel=user;
console.log(db.insert().then((value)=>console.log(value)));*/
//console.log(db.update({password:'baladkflj'},{username:'adsfdasfasf'},{runValidators:true}).then(value=>console.log(value)));
//console.log(db.find({}).then((value)=>console.log(value)));
//console.log(db.delete().then((value)=>console.log(value)));
//console.log(db.query);
//var Cat = mongoose.model('users',user.getschema());
//var kitty = new Cat(user);
//kitty.save();
 var app = express();
/*var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8')
  return dec;
}
 
var hw = encrypt("64457fbfdgy7657gdfdf")
// outputs hello world
console.log((hw));*/
 new ProductController(app);
/*new UserController(app);
var path = require('path');
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.route('/')
.get(function(req,res,next){
res.sendFile(path.resolve(__dirname,'views','index.html'));
});*/
// app.route('/api/public')
// .post(function(req,res,next){
//   	res.send('haha');
// })
// .get(function(req,res,next){
// 	res.send('gethaha');
// })

app.listen(80);
