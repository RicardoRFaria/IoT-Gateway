angular
  .module('app')
  .component('triggersList', {
    templateUrl: 'app/triggers/triggersList.html',
    controller: TriggersList
  });

TriggersList.$inject = ['TriggerService', '$state', 'ModalUtil'];

function TriggersList(TriggerService, $state, ModalUtil) {
  var vm = this;

  TriggerService.listar().then(function (resultado) {
    vm.triggers = resultado;
  }, ModalUtil.mostrarErroPadraoPromise);

  vm.editar = function (id) {
    $state.go('app.editTriggers', { id: id })
  }

  vm.excluir = function (trigger) {
    TriggerService.excluir(trigger._id).then(function (resultado) {
      ModalUtil.msgSuccess('Trigger excluída com sucesso.');
      var index = vm.triggers.indexOf(trigger);
      if (index > -1) {
          vm.triggers.splice(index, 1);
      }
    }, ModalUtil.mostrarErroPadraoPromise);
  }
}
