(function() {
    'use strict';

    angular
        .module('app')
        .controller('ConfirmationController', ConfirmationController);

    ConfirmationController.$inject = ['$uibModalInstance', 'ModalUtil', 'titulo', 'texto', 'acaoConfirmacao', 'isAcaoPerigosa'];

    function ConfirmationController($uibModalInstance, ModalUtil, titulo, texto, acaoConfirmacao, isAcaoPerigosa) {
        var vm = this;

        vm.titulo = titulo;
        vm.texto = texto;
        vm.cancelar = cancelar;
        vm.acaoConfirmacao = fnAcaoConfirmacao;

        vm.corDoBotao = 'btn-primary';
        if (isAcaoPerigosa) {
            vm.corDoBotao = 'btn-danger';
        }

        function fnAcaoConfirmacao() {
            // invoca a acao de confirmacao recebida
            acaoConfirmacao();
            cancelar();
        }

        function cancelar() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
