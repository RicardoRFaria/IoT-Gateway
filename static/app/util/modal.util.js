(function() {
    'use strict';

    angular
        .module('app')
        .service('ModalUtil', ModalUtil);

    ModalUtil.$inject = ['$uibModal', '$log'];

    function ModalUtil($uibModal, $log) {
        return {
            msg: msg,
            msgInfo: msgInfo,
            msgSuccess: msgSuccess,
            msgWarning: msgWarning,
            msgError: msgError,
            modalConfirmacao: modalConfirmacao,
            mostrarErroPadraoPromise: mostrarErroPadraoPromise
        };

        function msg(message) {
            msgInfo(message);
        }

        function msgInfo(message, title, tooltip) {
            title = title || 'Mensagem importante!';
            $log.info(message, title);
            openModal(message, title, tooltip, 'info');
        }

        function msgSuccess(message, title, tooltip) {
            title = title || 'Tudo certo!';
            $log.info(message, title);
            openModal(message, title, tooltip, 'success');
        }

        function msgWarning(message, title, tooltip) {
            title = title || 'Atenção!';
            $log.warn(message, title);
            openModal(message, title, tooltip, 'warning');
        }

        function msgError(message, title, tooltip) {
            title = title || 'Ops, algo deu errado!';
            $log.error(message, title);
            openModal(message, title, tooltip, 'error');
        }

        function openModal(message, title, tooltip, type) {
            $uibModal.open({
                //backdropClass: 'oobj-notification-modal-background',
                controller: 'NotificationModalController',
                controllerAs: 'vm',
                templateUrl: 'app/util/notification.modal.html',
                resolve: {
                    message: function() { return message; },
                    title: function() { return title; },
                    tooltip: function() { return tooltip; },
                    type: function() { return type; }
                }
            });
        }

        /**
         * Abre uma modal de confirmacao com o titulo e texto recebido
         * 
         * @param  {String} titulo inserido no cabecalho da modal
         * @param  {String} texto inserido no corpo da modal
         * @param  {Function} acaoConfirmacao acao que sera executada sempre que o botao confirmar for utilizado
         * @param  {Boolean} isAcaoPerigosa diz se a ação é critica ou perigosa, por exemplo, exclusão
         */
        function modalConfirmacao(titulo, texto, acaoConfirmacao, isAcaoPerigosa) {
            $uibModal.open({
                controller: 'ConfirmationController',
                controllerAs: 'vm',
                templateUrl: 'app/util/confirmation.modal.html',
                resolve: {
                    titulo: function() { return titulo; },
                    texto: function() { return texto; },
                    acaoConfirmacao: function() { return acaoConfirmacao; },
                    isAcaoPerigosa: isAcaoPerigosa
                }
            });
        }

        /**
         * Extrai de uma resposta de promise de falha e mostra a mensagem de erro
         * 
         * @param razao da promise de falha
         */
        function mostrarErroPadraoPromise(razao) {
            msgError(razao.data.message);
        }
    }
})();