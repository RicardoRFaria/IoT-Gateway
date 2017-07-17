angular
  .module('app')
  .component('triggersList', {
    templateUrl: 'app/triggers/triggersList.html',
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
