angular
  .module('app')
  .component('dispositivosList', {
    templateUrl: 'app/dispositivos/dispositivosList.html',
    controller: DispositivosListController
  });

DispositivosListController.$inject = ['$http'];

function DispositivosListController($http) {
  var vm = this;

  $http
    .get('dispositivosTeste.json')
    .then(function (response) {
      vm.dispositivos = response.data;
    });
}
