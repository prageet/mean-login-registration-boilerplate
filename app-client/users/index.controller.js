(function () {
    'use strict';

    angular
        .module('app')
        .controller('Users.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.users = null;
        vm.getAllUsers = getAllUsers;

        initController();

        function initController() {
            getAllUsers();
        }

        function getAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.users = users;
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();