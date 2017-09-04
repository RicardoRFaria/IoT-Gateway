angular
  .module('app')
  .component('editConfiguracaoSMS', {
    templateUrl: 'app/configuracoes/editConfiguracaoSMS.html',
    controller: EditConfiguracaoSMS
  });

const CODIGO_STATUS_NAO_EXISTE = 404;

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
      }, function (resultado) {
        if (resultado.status === CODIGO_STATUS_NAO_EXISTE) {
          vm.configuracao = {tipo: 'sms'};
        } else {
          ModalUtil.mostrarErroPadraoPromise(resultado);
        }
      });
  }
}
