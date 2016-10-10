// DoneDeal - Todo List App by Brett Fraley - 2016
// todo.js

angular.module('todo', [])
    .controller('DDCtrl', DDController);

function DDController($scope) {

    // UI Input Fields
    $scope.user_input = '';
    $scope.new_listname = '';
    $scope.current_list = '';
    $scope.sort_alpha = false;
    $scope.sort_date = false;
    $scope.sort_def = true;

    $scope.modes = {
        seeInputField: false,
        seeSaveTask: false,
        seeNewTask:true,
    }

    $scope.events = {
        newClicked: function() {
            $scope.modes.seeInputField = true;
            $scope.modes.seeNewTask = false;
        }
    }

    // Initial single list.
    $scope.list = [
        { content:'Item 1', datestamp:'DATE', checked:false },
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
            $scope.modes.seeInputField = false;
            $scope.modes.seeSaveTask = false;
            $scope.modes.seeNewTask = true;
        } 
    }
    // Remove the task at the given index of list.
    $scope.deleteTask = function(id) {
        $scope.list.splice(id, 1);
    }

    // Clear the user_input value.
    $scope.reset_user_input = function() {
        $scope.user_input = ''
    }

    // Sort todo list alphabetically.
    $scope.alphaSort = function() {
        $scope.sort_alpha = true;
        $scope.sort_date = false;
        $scope.sort_def = false;
    }

    // Sort todo list by datestamp
    $scope.dateSort = function() {
        $scope.sort_alpha = false;
        $scope.sort_def = false;
        $scope.sort_date = true;
    }

};
