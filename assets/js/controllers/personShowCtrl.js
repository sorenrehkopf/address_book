addBook.controller('personShowCtrl', ['$scope','Person','$routeParams', function($scope,Person,$routeParams){
	$scope.person={};

	Person.get({id:$routeParams.id}).then(function(person){
		console.log(person)
		$scope.person = person;
	})

	$scope.addCategory = function(newCategory){
		$modal.open({
			templateUrl:'/views/category/addModal.html',
			controller:'addCategoryCtrl',
			resolve:{
				addCategory:function(){
					return newCategory;
				}
			}
		});
	}
}])