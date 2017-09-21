class User {
    constructor(username, password) {
        this._username = username;
        this._password = password;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set username(username) {
        this._username = username;
    }
    get username() {
        return this._username;
    }
    set password(password) {
        this._password = password;
    }
    get password() {
        return this._password;
    }
    set auth(auth) {
        this._auth = auth;
    }
    get auth() {
        return this._auth;
    }
    set collname(collname='users') {
        this._collname = collname;
    }
    get collname() {
        return this._collname;
    }
    get schema() {
        return {
            _username: {
                type:String,
                required:true
            },
            _password: {
                type:String,
                required:true
            }
        };
    }
}
export default User