import angular from 'angular';

function AppController($http) {
    const ctrl = this;
    ctrl.seed = null;
    ctrl.users = [];

    $http.get('http://api.randomuser.me/', { 
        params: {
            results: 25,
            seed: ctrl.seed,
        }
    }).then(function (response) {
        ctrl.users = response.data.results;
    })

    ctrl.update = function () {
        ctrl.seed = ctrl.newSeed;
    }
}

const AppModule = angular.module('app', [
]);

AppModule.controller('AppController', AppController);

export default AppModule;
