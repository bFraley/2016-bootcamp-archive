import angular from 'angular';

function AppController($http) {
    const ctrl = this;
    ctrl.seed = null;
    ctrl.users = [];
    ctrl.currentUser = null;

    function updateUsers () {
        $http.get('https://randomuser.me/api/', { 
            params: {
                results: 25,
                seed: ctrl.seed,
            }
        }).then(function (response) {
            ctrl.users = response.data.results;
            ctrl.currentUser = null;
        });
    }

    updateUsers();

    ctrl.update = function () {
        ctrl.seed = ctrl.newSeed;
        updateUsers();
    }

    ctrl.setUserDetail = function (index) {
        ctrl.currentUser = ctrl.users[index];
    }
}

const AppModule = angular.module('app', [
]);

AppModule.controller('AppController', AppController);

export default AppModule;
