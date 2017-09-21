class Product {
    constructor(title,price,content,image,tags) {
        this._title = title;
        this._price = price;
        this._content = content;
        this._image = image;
        this._tags=tags;
        this._collname='products';
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
    set content(content) {
        this._content = content;
    }
    get content() {
        return this._content;
    }
    set image(image) {
        this._image = image;
    }
    get image() {
        return this._image;
    }
    set tags(tags) {
        this._tags = tags;
    }
    get tags() {
        return this._tags;
    }
    set collname(collname) {
        this._collname = collname;
    }
    get collname() { 
        return this._collname;
    }
    get schema() {
        return {
            _title: {
                type:String,
                required:true,
                maxlength:500
            },
            _price:{
                type:String,
                required:true,
                maxlength:12     
            },
            _content:{
                type:String,
                required:true
            },
            _image:{
                type:String,
                required:true
            },
            _tags:{
                type:String,
                required:true
            }
        };
    }
}
export default Product;