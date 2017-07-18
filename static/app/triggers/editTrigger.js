angular
  .module('app')
  .component('editTrigger', {
    templateUrl: 'app/triggers/editTrigger.html',
    controller: TriggersList
  });

TriggersList.$inject = ['TriggerService', '$stateParams', 'ModalUtil'];

function TriggersList(TriggerService, $stateParams, ModalUtil) {
  const vm = this;
  preencherSelects();
  carregarOuCriarTrigger();
  
  vm.enviar = function () {
    TriggerService.salvar(vm.trigger).then(function (objetoSalvo) {
      ModalUtil.msgSuccess('Trigger salva com sucesso!');
      vm.trigger = objetoSalvo;
    }, ModalUtil.mostrarErroPadraoPromise);
  }

  function carregarOuCriarTrigger() {
    if ($stateParams.id) {
      TriggerService.get($stateParams.id).then(function (triggerExistente) {
        vm.trigger = triggerExistente;
      }, ModalUtil.mostrarErroPadraoPromise);
    } else {
      vm.trigger = new TriggerObject();
    }
  }

  function preencherSelects() {
    vm.opcoesOperacao = [
      {valor: '1', descricao: 'Range'},
      {valor: '2', descricao: 'Igualdade'}
    ]
  }

}
