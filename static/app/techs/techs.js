angular
  .module('app')
  .component('fountainTechs', {
    templateUrl: 'app/techs/techs.html',
    controller: TechsController
  });

TechsController.$inject = ['$http'];

function TechsController($http) {
  var vm = this;

  $http
    .get('app/techs/techs.json')
    .then(function (response) {
      vm.techs = response.data;
    });
}
