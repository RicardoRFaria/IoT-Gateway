angular
  .module('app')
  .component('dispositivosList', {
    templateUrl: 'app/dispositivos/dispositivosList.html',
    controller: DispositivosListController
  });

DispositivosListController.$inject = ['DispositivosService', '$state', 'ModalUtil'];

function DispositivosListController(DispositivosService, $state, ModalUtil) {
  var vm = this;

  DispositivosService.listar().then(function (response) {
    vm.dispositivos = response;
  }, ModalUtil.mostrarErroPadraoPromise);

  vm.editar = function (id) {
    $state.go('app.editDispositivo', { id: id })
  }

  vm.excluir = function (dispositivo) {
    DispositivosService.excluir(dispositivo._id).then(function (resultado) {
      ModalUtil.msgSuccess('Dispositivo excluído com sucesso.');
      var index = vm.dispositivos.indexOf(dispositivo);
      if (index > -1) {
          vm.dispositivos.splice(index, 1);
      }
    }, ModalUtil.mostrarErroPadraoPromise);
  }
}
