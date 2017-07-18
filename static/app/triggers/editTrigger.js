angular
  .module('app')
  .component('editTrigger', {
    templateUrl: 'app/triggers/editTrigger.html',
    controller: EditTrigger
  });

EditTrigger.$inject = ['$http'];

function EditTrigger($http) {
  const vm = this;
  preencherSelects();

  vm.trigger = new TriggerObject();

  vm.enviar = function () {
    console.log(vm.trigger);
    $http.post('/api/trigger', JSON.stringify(vm.trigger));
  }

  function preencherSelects() {
    vm.opcoesOperacao = [
      {valor: '1', descricao: 'Range'},
      {valor: '2', descricao: 'Igualdade'}
    ]
  }

}
