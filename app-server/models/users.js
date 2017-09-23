// grab the mongoose module
var mongoose = require('mongoose');

// define our users model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Users', {
	firstName : {type : String, required: true},
	lastName : {type : String, required: true},
	userName : {type : String, required: true, index:{unique:true}},
	hash : {type : String, required: true}
});
