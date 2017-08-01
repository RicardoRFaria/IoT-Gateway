angular
    .module('app')
    .service('ConfiguracaoService', ConfiguracaoService);

ConfiguracaoService.$inject = ['$http', '$q'];

function ConfiguracaoService($http, $q) {
    this.salvarSMS = salvarSMS;
    this.get = get;

    function salvarSMS(configuracao) {
        return $q(function(resolve, reject) {
            $http.post('/api/configuracao/sms/', JSON.stringify(configuracao))
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }

    function get(tipo) {
        return $q(function(resolve, reject) {
            $http.get('/api/configuracao/' + tipo)
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }
}