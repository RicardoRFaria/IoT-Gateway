angular
    .module('app')
    .service('DispositivosService', DispositivosService);

DispositivosService.$inject = ['$http', '$q'];

function DispositivosService($http, $q) {
    this.salvar = salvar;
    this.listar = listar;
    this.get = get;
    this.excluir = excluir;

    function get(id) {
        return $q(function(resolve, reject) {
            $http.get('/api/dispositivo/' + id)
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }

    function excluir(id) {
        return $q(function(resolve, reject) {
            $http.delete('/api/dispositivo/' + id)
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }

    function salvar(dispositivo) {
        return $q(function(resolve, reject) {
            let metodo = 'post';
            if (dispositivo._id) {
                metodo = 'put';
            }
            $http[metodo]('/api/dispositivo/', JSON.stringify(dispositivo))
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
            $http.get('/api/dispositivo')
                .then(function (resultado) {
                    resolve(resultado.data);
                }, function (falha) {
                    reject(falha);
                }
            );
        });
    }
}