/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){
		Category.findOrCreate({name:req.params.name}).exec(function(category){
			res.send(category);
		});
	}
};

