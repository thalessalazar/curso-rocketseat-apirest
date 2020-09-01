const mongoose = require('mongoose');

const db = 'crudrest'

mongoose.connect('mongodb://localhost/' + db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;