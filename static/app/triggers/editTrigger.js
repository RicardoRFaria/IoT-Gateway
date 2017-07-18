angular
  .module('app')
  .component('editTrigger', {
    templateUrl: 'app/triggers/editTrigger.html',
    controller: TriggersList
  });

TriggersList.$inject = ['TriggerService', '$stateParams'];

function TriggersList(TriggerService, $stateParams) {
  const vm = this;
  preencherSelects();
  carregarOuCriarTrigger();
  
  vm.enviar = function () {
    TriggerService.salvar(vm.trigger).then(function (objetoSalvo) {
      vm.trigger = objetoSalvo;
    }, function (falha) {
      window.alert(falha);
    });
  }

  function carregarOuCriarTrigger() {
    if ($stateParams.id) {
      TriggerService.get($stateParams.id).then(function (triggerExistente) {
        vm.trigger = triggerExistente;
      }, function (falha) {
        window.alert(falha);
      });
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
