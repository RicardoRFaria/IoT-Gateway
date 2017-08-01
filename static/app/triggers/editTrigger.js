angular
  .module('app')
  .component('editTrigger', {
    templateUrl: 'app/triggers/editTrigger.html',
    controller: TriggersList
  });

TriggersList.$inject = ['TriggerService', '$stateParams', '$state', 'ModalUtil'];

function TriggersList(TriggerService, $stateParams, $state, ModalUtil) {
  const vm = this;
  preencherSelects();
  carregarOuCriarTrigger();
  
  vm.enviar = function () {
    TriggerService.salvar(vm.trigger).then(function (objetoSalvo) {
      ModalUtil.msgSuccess('Trigger salva com sucesso!');
      $state.go('app.editTriggers', { id: objetoSalvo._id })
    }, ModalUtil.mostrarErroPadraoPromise);
  }

  vm.adicionarEvento = function () {
    vm.trigger.eventosRelacionados.push(new EventoObject());
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
      {id: 1, descricao: 'Range'},
      {id: 2, descricao: 'Igualdade'}
    ]
  }

}
