angular
    .module('app')
    .service('TriggerService', TriggerService);

TriggerService.$inject = ['$http', '$q'];

function TriggerService($http, $q) {
    this.salvar = salvar;
    this.listar = listar;
    this.get = get;

    function get(id) {
        return $q(function(resolve, reject) {
            $http.get('/api/trigger/' + id)
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }

    function salvar(trigger) {
        return $q(function(resolve, reject) {
            $http.post('/api/trigger/', JSON.stringify(trigger))
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }

    function listar() {
        return $q(function(resolve, reject) {
            $http.get('/api/trigger/')
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }
}