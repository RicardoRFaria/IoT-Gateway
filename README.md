# Gateway para IoT

Gateway para iteração com dispositivos de IoT desenvolvido em node.js e Typescript

+ [TypeScript][typescript] 2.3 to ES6 transpilation,
+ [TSLint][tslint] 4.x with a general recommendation for a good default configuration (*Note: TSLint >= 5.x is not yet supported by [tslint-microsoft-contrib][slint-microsoft-contrib]*),
+ [Jest][jest] unit testing and code coverage,
+ Type definitions for Node.js v6.x (LTS) and Jest,

## Available scripts

+ `start` - Inicia o servidor do express.js
+ `clean` - remove todos os caches e arquivos tranpilados
+ `build` - Transpile de TypeScript para ES6,
+ `watch` - Inicia um watch que efetua o transpile automatico de coisas alteradas
+ `lint` - Executa um lint dos arquivos e dos testes
+ `test` - Executa os testes
+ `test:watch` - Inicia um watch que executa os testes sempre que algo for modificado

## License
MIT License. [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE).