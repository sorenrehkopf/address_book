/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// index: function(req,res){
	// 	Person.find().populateAll().exec(function(){
	// 	res.send(people)
	// });
	// };
	showCategory: function(req,res){
		console.log(req.params)
		Person.findOne({id:req.params.id}).populateAll().exec(function(err,person){
		console.log(person.category);
		res.send(person.category);
	});
	},
	showContact: function(req,res){
		console.log(req.params)
		Person.findOne({id:req.params.id}).populateAll().exec(function(err,person){
		console.log(person.contact);
		res.send(person.contact);
	});
	},
	addCategory: function(req,res){
		console.log(req.params)
		Person.findOne({id:req.params.id}).populateAll().exec(function(err,person){
		Category.findOrCreate({name:req.body.name}).exec(function(err,category){
			person.category.add(category);
			person.save(function(err,savedPerson){
				res.send(savedPerson.category)
			});
		});
	});
	},
	addContact: function(req,res){
		console.log(req.params)
		Person.findOne({id:req.params.id}).populateAll().exec(function(err,person){
		Contact.create({
			name:req.body.name,
			eMail:req.body.eMail,
			streetAddress:req.body.streetAddress,
			city:req.body.city,
			state:req.body.state,
			zip:req.body.zip,
			phone:req.body.phone
			}).exec(function(err,contact){
			person.contact.add(contact);
			person.save(function(err,savedPerson){
				res.send(savedPerson.contact)
			});
		});
	});
	}
};

