/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	firstName: {
  		type:'string',
  		required:true,
  		notEmpty:true
  	},
  	lastName:{
  		type:'string',
  		required:true
  	},
  	notes:{
  		type:'text',
  		required:false
  	},
  	contact:{
  		collection:'Contact',
  		via:'person'
  	},
  	category:{
  		collection:"Category",
  		via:"person"
  	}
  }
};

