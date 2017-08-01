angular
  .module('app')
  .component('editDispositivo', {
    templateUrl: 'app/dispositivos/editDispositivo.html',
    controller: EditDispositivo
  });

EditDispositivo.$inject = ['DispositivosService', 'TriggerService', '$stateParams', '$state', 'ModalUtil'];

function EditDispositivo(DispositivosService, TriggerService, $stateParams, $state, ModalUtil) {
  const vm = this;

  preencherSelects();
  carregarOuCriarDispositivo();
  
  vm.enviar = function () {
    DispositivosService.salvar(vm.dispositivo).then(function (objetoSalvo) {
      ModalUtil.msgSuccess('Dispositivo salvo com sucesso!');
      $state.go('app.editDispositivo', { id: objetoSalvo._id })
    }, ModalUtil.mostrarErroPadraoPromise);
  }

  function carregarOuCriarDispositivo() {
    if ($stateParams.id) {
      DispositivosService.get($stateParams.id).then(function (dispositivoExistente) {
        vm.dispositivo = dispositivoExistente;
      }, ModalUtil.mostrarErroPadraoPromise);
    } else {
      vm.dispositivo = new DispositivoObject();
    }
  }

  function preencherSelects() {
    vm.triggers = [];
    TriggerService.listar().then(function (resultado) {
      let objectTriggers = {};
      resultado.forEach(function (trigger) {
        vm.triggers.push(trigger);
      })
    }, ModalUtil.mostrarErroPadraoPromise);
  }
}
