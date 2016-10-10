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
    $scope.complete = [];
    $scope.not_complete = [];

    $scope.modes = {
        seeInputField: false,
        seeSaveTask: false,
        seeNewTask: true,
        seeChecked: false,
        seeNotChecked: false
    }

    $scope.events = {
        newClicked: function() {
            $scope.modes.seeInputField = true;
            $scope.modes.seeNewTask = false;
        }
    }

    // Initial single list.
    $scope.list = [
        { content:'Item 1', datestamp:'DATE', checked:false }

    ];
    
    // Save a list item to the current list.
    $scope.save_task = function() {
        if ($scope.user_input.length > 0) {
            var content = $scope.user_input;
            var datestamp = Date().split('2016')[0];

            $scope.list.push({ content:content,
                 datestamp:datestamp, checked: false});

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
        $scope.user_input = '';
    }

    // Sort todo list alphabetically.
    $scope.alphaSort = function() {
        $scope.sort_alpha = true;
        $scope.sort_date = false;
        $scope.sort_def = false;
        $scope.modes.seeChecked = false;
        $scope.modes.seeNotChecked = false;
    }

    // Sort todo list by datestamp
    $scope.dateSort = function() {
        $scope.sort_alpha = false;
        $scope.sort_def = false;
        $scope.sort_date = true
        $scope.modes.seeChecked = false;
        $scope.modes.seeNotChecked = false;
    }

    $scope.getCompleteItems = function() {
        var newlist = [];
        for (var i = 0; i < $scope.list.length; i++) {
            if ($scope.list[i].checked == true) {
                newlist.push($scope.list[i]);
                newlist[i].checked = true;
            }
        }
        
        $scope.complete = newlist;
        $scope.modes.sort_def = false;
        $scope.sort_alpha = false;
        $scope.sort_date = false;
        $scope.modes.seeNotChecked = false;
        $scope.modes.seeChecked = true;

    }

    $scope.getIncompleteItems = function() {
        var newlist = [];
        for (var i = 0; i < $scope.list.length; i++) {
            if ($scope.list[i].checked == false) 
                newlist.push($scope.list[i]);
        }
        $scope.not_complete = newlist;
        $scope.modes.sort_def = false;
        $scope.sort_alpha = false;
        $scope.sort_date = false;
        $scope.modes.seeChecked = false;
        $scope.modes.seeNotChecked = true;
    }

};
