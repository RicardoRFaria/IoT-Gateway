angular
  .module('app')
  .component('triggersList', {
    templateUrl: 'app/triggers/triggersList.html',
    controller: TriggersListController
  });

TriggersListController.$inject = ['$http'];

function TriggersListController($http) {
  var vm = this;

  $http
    .get('triggersTeste.json')
    .then(function (response) {
      vm.triggers = response.data;
    });
}
