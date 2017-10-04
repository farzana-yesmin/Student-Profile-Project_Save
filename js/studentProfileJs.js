	var app=angular.module('MyApp',[]);
	app.controller('StudentProfileController',function($scope){
		
		$scope.studentProfileArray = [];

		$scope.saveStudentProfile = function () {			
			
			$scope.studentProfileArray.push({
				student_name : $scope.student_name,
				father_name : $scope.father_name,
				mother_name : $scope.mother_name,
				roll_no : $scope.roll_no
			});
			$scope.student_name="";
			$scope.father_name="";
			$scope.mother_name="";
			$scope.roll_no="";
			
		};
	});