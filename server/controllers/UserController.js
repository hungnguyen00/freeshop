import User from './../models/User';
import Controller from './Controller';
class UserController extends Controller{
	constructor(app){
		super(app);
		this.app=app;
		app.route('/admin')
		.post(function(req,res,next){
		  	res.send('post haha');
		})
		.get(function(req,res,next){
			res.send('gethaha');
		})
	}
	login(){

	}
}
export default UserController;