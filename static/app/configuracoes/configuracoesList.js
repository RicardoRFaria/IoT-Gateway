angular
  .module('app')
  .component('configuracoesList', {
    templateUrl: 'app/configuracoes/configuracoesList.html',
    controller: ConfiguracoesListController
  });

ConfiguracoesListController.$inject = ['$state', 'ModalUtil'];

function ConfiguracoesListController($state, ModalUtil) {
  var vm = this;

  vm.editarSMS = function () {
    $state.go('app.editConfiguracaoSMS')
  }
}
