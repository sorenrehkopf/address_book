addBook.controller('editPersonCtrl', ['$scope','$modalInstance','editPerson', function($scope,$modalInstance,editPerson){
	$scope.newPerson={
		firstName:editPerson.firstName,
		lastName:editPerson.lastName,
		notes:editPerson.notes
	}
	$scope.editPerson = function(){
		editPerson.firstName = $scope.newPerson.firstName;
		editPerson.lastName =  $scope.newPerson.lastName;
		editPerson.notes =  $scope.newPerson.notes;
		editPerson.$save().then(function(){
			$modalInstance.close();
		})

	};
	$scope.cancel = function(){
		$modalInstance.dismiss();
	}

	console.log('what how?',$scope.newPerson)	
}])