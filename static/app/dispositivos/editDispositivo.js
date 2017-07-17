angular
  .module('app')
  .component('editDispositivo', {
    templateUrl: 'app/dispositivos/editDispositivo.html',
    controller: EditDispositivo
  });

EditDispositivo.$inject = ['$http'];

function EditDispositivo($http) {
  var vm = this;

  $http
    .get('triggersTeste.json')
    .then(function (response) {
      vm.triggers = response.data;
    });
}
