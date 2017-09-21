import Database from "./../models/Database";
class Controller{
	constructor(app,db){
		this.app=app;
		this.db=new Database();
	}	
}
export default Controller;