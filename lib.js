// lib.js


// A TaskGroup represents collections of related todo lists.
var TaskGroup = {
    group_id: 0,
    group_name: '',
    group_tags:['#0-tags'],

    tasklist_collection: {
        ids:[],
        names:[]
    },

    newest_list: 0,
    oldest_list: 0,
    highest_priority:''
};

// A TaskList represents a single to do list.

var TaskList = {
    taskgroup_id: 0,
    taskgroup_name: '',
    list_id: 0,
    list_name: '',
    list_priority: '',
    item_count: 0,

    cal: {
        start_date:'',
        due_date:'',
        completed_date:'',
    },

    assigned: ['none'],
    list_notes: ['0 Notes'],
    list_items: ['0 Items']
};

var TaskItem = {
    contents:'',
    description:''
};


// Check for valid number id.
var validID = function(test_val) {
    if (isNaN(test_val))
        return false;
    else
        return true;
};

// Assign a new task item to a task list.
// Accepts task list ID, and a list item object.
var addTaskToList = function(listID, itemObj) {
    if (validID(listID))
        var tasklist = getSingleList(listID);
    else
        return false;

    if (itemObj.contents.length > 1)
        (tasklist.push(itemObj));
    else
        return false;
};

// Assign a task list to a task group.
// Accepts task group ID, and a task list object.
var addListToGroup = function(groupID, tasklistObj) {
    if (validID(groupID))
        var group = getSingleGroup(groupID);
    else
        return false;
    
    group.tasklists.push(tasklistObj);
};


getSingleGroup = function(id) {
    return allGroups[id];
}

getSingleList = function() {
    return allLists[id];
}

allLists = [];
allGroups = [];


            <h2>Groups</h2>

            <button ng-click="newgroup()">New Group</button>
            <input ng-model="new_groupname"></input>

            <div ng-repeat="group in groups track by $index">
                <p>Group Name: {{group.name}}</p>
                <p>Lists: {{group.all_lists}}</p>
            </div>



    
            <h2>Lists</h2>
            <button ng-click="newlist()">New List</button>
            <input ng-model="new_listname">

            <div>
                <ul ng-repeat="list in all_lists track by $index">
                    <li>{{list}}</li>
                </ul>
            </div>
  

        $scope.all_lists = [];

        // Array of groups.
    $scope.groups = [{
        name:'group1',
        all_lists:[]
    }];

        $scope.new_groupname = '';
        
    $scope.current_group = 'group1';    

        // Create new group in groups.
    $scope.newgroup = function() {
        if (!$scope.new_groupname)
            return false;
        
        $scope.groups.push({
            name: $scope.new_groupname,
            all_lists: []
        });

        $scope.new_groupname = '';
        console.log('new group');
    }
    




