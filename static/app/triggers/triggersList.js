angular
  .module('app')
  .component('triggersList', {
    templateUrl: 'app/triggers/triggersList.html',
    controller: TriggersList
  });

TriggersList.$inject = ['TriggerService', '$state'];

function TriggersList(TriggerService, $state) {
  var vm = this;

  TriggerService.listar().then(function (resultado) {
    vm.triggers = resultado;
  }, function (falha) {
    window.alerta(falha);
  });

  vm.editar = function (id) {
    $state.go('app.editTriggers', { id: id })
  }
}
