/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
  		type:'string'
  	},
  	eMail:{
  		type:'string'
  	},
  	streetAddress:{
  		type:'string'
  	},
  	city:{
  		type:'string',
  		notEmpty:true
  	},
  	state:{
  		type:'string',
  		notEmpty:true
  	},
  	zip:{
  		type:'float',
  		notEmpty:true
  	},
  	phone:{
  		type:'float',
  		float:true
  	},
  	person:{
  		model:'Person',
  		defaultsTo:null
  	}
  }
};

