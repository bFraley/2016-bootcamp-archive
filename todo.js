// DoneDeal - Todo List App by Brett Fraley - 2016
// todo.js

angular.module('todo', [])
    .controller('DDCtrl', DDController);

function DDController($scope) {

    // UI Input Fields
    $scope.user_input = '';
    $scope.new_listname = '';
    $scope.current_list = '';

    // Initial single list.
    $scope.list = [
        { content:'Item 1', datestamp:'DATE' },
        { content:'Item 2', datestamp:'DATE' },
        { content:'Item 3', datestamp:'DATE' }
    ];
    
    // Save a list item to the current list.
    $scope.save_task = function() {
        if ($scope.user_input.length > 0) {
            content = $scope.user_input;
            datestamp = Date().split('2016')[0];

            $scope.list.push({ content:content, datestamp:datestamp});
            $scope.reset_user_input($scope.user_input);
            console.log("Task Saved!");
        } 
    }

    // Clear the user_input value.
    $scope.reset_user_input = function() {
        $scope.user_input = ''
    }

// Create a new list in the current group.
    $scope.newlist = function() {
        if (!$scope.new_listname)
            return false;

        $scope.all_lists.push($scope.new_listname);
        $scope.new_listname = '';
    }
};




