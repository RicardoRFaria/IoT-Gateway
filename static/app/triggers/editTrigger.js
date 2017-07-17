angular
  .module('app')
  .component('editTrigger', {
    templateUrl: 'app/triggers/editTrigger.html',
    controller: EditTrigger
  });

EditTrigger.$inject = ['$http'];

function EditTrigger($http) {
  var vm = this;

  $http
    .get('triggersTeste.json')
    .then(function (response) {
      vm.triggers = response.data;
    });
}
