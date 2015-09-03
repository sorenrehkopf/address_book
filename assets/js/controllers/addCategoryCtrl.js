addBook.controller('addCategoryCtrl', ['$scope','$modalInstance','Person', function($scope,$modalInstance,Person){
	$scope.newCategory={
		firstName:'',
		lastName:'',
		notes:''
	}
	$scope.createPerson = function(){
		var newPerson = new Person($scope.newPerson);
		newPerson.$save().then(function(personResult){
			console.log('person',personResult);
			$modal.instance.close();			
		}).catch(function(err){
			console.log('err',err);
		});

	};
	$scope.cancel = function(){
		$modalInstance.dismiss();
	}

	console.log('what how?',Person)	
}])