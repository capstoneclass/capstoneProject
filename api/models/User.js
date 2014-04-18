/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	schema: true,

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/

  	firstName: {
  		type:'string',
  		required: true

  	},
    
    lastName: {
    	type: 'string',
    	required: true
    },

    email: {
    	type: 'string',
    	email: true,
    	required: true,
    	unique: true
    },

    netID: {

    	type: 'string',
    	required: true,
    	unique: true

    },

    encryptedPassword: {

    	type: 'string'
    },

    tel: {
    	type: 'string'
    },

    city: {
    	type: 'string'
    },

    state: {
    	type: 'string'
    },

    schoolName: {
    	type: 'string'
    },

    status: {
    	type: 'string'
    },

    major: {
    	type: 'string'
    },

    department: {
    	type: 'string'
    },

    gradYear: {
    	type: 'string'
    },

    term: {
    	type: 'string'
    },

    campus: {
    	type: 'string'
    },



   toJSON: function () {

    	var obj = this.toObject();
    	delete obj.password;
    	delete obj.confirmation;
    	delete obj.encryptedPassword;
    	delete obj.passConfirmation;
    	delete obj._csrf;
    	return obj;
   }
   

},

beforeCreate: function (values, next) {

    //passwords should match in both field when entered
    // if (!value.password || values.password != values.confirmation) {
    //     return next({err: ["Password doesn't match confirmation. "]});   
    // }

    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
        if (err) return next(err);
        values.encryptedPassword = encryptedPassword;
        //values.online= true;
        next();
    });

}

};
