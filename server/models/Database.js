import mongoose from 'mongoose';
import Promise from 'bluebird';
class Database {
    constructor(host='localhost', port='27017', data='hoantruyenseafood') {
        this.host = host;
        this.port = port;
        this.data = data;
    }
    connect() {
        try {
            mongoose.connect(`mongodb://${this.host}:${this.port}/${this.data}`, {
                useMongoClient: true
            });
        } catch (e) {
            console.log(e);
        }

    }
    disconnect() {
        try {
            mongoose.disconnect();
        } catch (e) {
            // statements
            console.log(e);
        }

    }

    set mongoosemodel(model) {
        this.value = model;
        this.model = mongoose.model(model.collname, model.schema);
    }
    get mongoosemodel() {
        return this.model;
    }
    insert() {
        try {
            this.connect();
            let promise = new Promise((resolve, reject) => {
                this.model.create(this.value, (error, results) => {
                    let errors;// contain fields error
                    if (error) {
                        let fields = Object.keys(error.errors);
                        fields.forEach(function(element) {
                           errors = error.errors[element].properties;
                        });
                        resolve(errors);
                    } else {
                        resolve(true);
                    }
                });
            });
            return promise;
        } catch (e) {
            console.log(e);
            return false;
        } finally {
            this.disconnect();
        }
    }
    find(...items) {
        try {
            this.connect();
            let promise = new Promise((resolve, reject) => {
                this.query = this.model.find(items[0], items[1], items[2], (error, results) => {
                    if (error) {
                        resolve(false);
                    } else {
                        resolve(results);
                    }
                });
            });
            return promise;
        } catch (e) {
            console.log(e);
        } finally {
            this.disconnect();
        }
    }
    update(...items) {
        try {
            this.connect();
            let promise = new Promise((resolve, reject) => {
                this.model.update(items[0], items[1], items[2], (error, results) => {
                    let errors;// contain fields error
                    if (error) {
                        let fields = Object.keys(error.errors);
                        fields.forEach(function(element) {
                           errors = error.errors[element].properties;
                        });
                        resolve(errors);
                    } else {
                        resolve(true);
                    }
                });
            });
            return promise;
        } catch (e) {
            console.log(e);
            return false;
        } finally {
            this.disconnect();
        }
    }
    delete(...items) {
        try {

            this.connect();
            let promise = new Promise((resolve, reject) => {
               this.model.remove(items[0],(error, results) => {
                    if (error) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                });
            });
            return promise;
        } catch (e) {
            console.log(e);
            return false;
        } finally {
            this.disconnect();
        }
    }
}
export default Database;