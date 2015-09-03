addBook.controller('PersonCtrl', ['$scope','Person','$modal', function($scope,Person,$modal){
	console.log('the butthole');
	$scope.people=[]
	Person.query().then(function(people){
		$scope.people = people;
		console.log(people)
	});

	$scope.createPerson = function(newPerson){
		$modal.open({
			templateUrl:'/views/person/newModal.html',
			controller:'newPersonCtrl',
			resolve:{
				createPerson:function(){
					return newPerson;
				}
			}
		});
	}
	$scope.editPerson = function(editPerson){
		$modal.open({
			templateUrl:'/views/person/editModal.html',
			controller:'editPersonCtrl',
			resolve:{
				editPerson:function(){
					return editPerson;
				}
			}
		});
	}
	$scope.deletePerson = function(person){
		person.$delete();
	}

}])