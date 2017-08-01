angular
  .module('app')
  .component('editConfiguracaoSMS', {
    templateUrl: 'app/configuracoes/editConfiguracaoSMS.html',
    controller: EditConfiguracaoSMS
  });

EditConfiguracaoSMS.$inject = ['ConfiguracaoService', '$stateParams', '$state', 'ModalUtil'];

function EditConfiguracaoSMS(ConfiguracaoService, $stateParams, $state, ModalUtil) {
  const vm = this;

  carregarOuCriar();
  
  vm.enviar = function () {
    ConfiguracaoService.salvarSMS(vm.configuracao).then(function (objetoSalvo) {
      ModalUtil.msgSuccess('Configuração de SMS salva com sucesso!');
    }, ModalUtil.mostrarErroPadraoPromise);
  }

  function carregarOuCriar() {
      ConfiguracaoService.get('sms').then(function (configuracaoExistente) {
        vm.configuracao = configuracaoExistente;
      }, ModalUtil.mostrarErroPadraoPromise);
  }
}
