(function() {
    'use strict';

    angular
        .module('app')
        .controller('NotificationModalController', NotificationModalController);

    NotificationModalController.$inject = ['$uibModalInstance', 'message', 'title', 'tooltip', 'type'];

    function NotificationModalController($uibModalInstance, message, title, tooltip, type) {
        var vm = this;

        vm.message = message;
        vm.title = title;
        vm.tooltip = tooltip || null;
        vm.type = type;

        definirClasses();

        vm.close = function () {
            $uibModalInstance.close();
        };

        vm.ok = function () {
            $uibModalInstance.dismiss('ok');
        };

        /**
         * Define as classes CSS para serem usadas no modal, de acordo com o tipo (vm.type)
         */
        function definirClasses() {
            if (vm.type === 'success') {
                vm.iconClass = 'fa-check';
                vm.btnClass = 'btn-success';
            } else if (vm.type === 'error') {
                vm.iconClass = 'fa-times';
                vm.btnClass = 'btn-danger';
            } else if (vm.type === 'warning') {
                vm.iconClass = 'fa-exclamation ';
                vm.btnClass = 'btn-warning';
            } else {
                // default é info
                vm.iconClass = 'fa-info';
                vm.btnClass = 'btn-primary';
            }
        }
    }
})();
