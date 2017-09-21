import Product from './../../models/web/Product';
import Controller from './../Controller';
class ProductController extends Controller{
	constructor(app,db){
		super(app,db);
		this.product=new Product();
		this.db.mongoosemodel=this.product;
		app.route('/product')
		.post(function(req,res,next){
			
		})
		.get(function(req,res,next){
			this.db.find({}).then(value=>{
				res.send(JSON.stringify(this.productjson(value)));
			});
		}.bind(this))
	}
	productjson(product)
	{
		let products=new Set();
		product.forEach( function(element, index) {
           products.add({id:element._id,title:element._title,price:element._price,content:element._content,image:element._image,tags:element._tags});
		});
		
		return products;
	}

}
export default ProductController;