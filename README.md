# Gateway para IoT

Gateway para iteração com dispositivos de IoT desenvolvido em node.js e Typescript

+ [TypeScript][typescript] 2.3 to ES6 transpilation,
+ [TSLint][tslint] 4.x with a general recommendation for a good default configuration (*Note: TSLint >= 5.x is not yet supported by [tslint-microsoft-contrib][slint-microsoft-contrib]*),
+ [Jest][jest] unit testing and code coverage,
+ Type definitions for Node.js v6.x (LTS) and Jest,

## Scripts disponíveis

+ `npm start` - Inicia o servidor do express.js
+ `npm clean` - remove todos os caches e arquivos tranpilados
+ `npm build` - Transpile de TypeScript para ES6,
+ `npm run watch` - Inicia um watch que efetua o transpile automatico de coisas alteradas
+ `npm lint` - Executa um lint dos arquivos e dos testes
+ `npm test` - Executa os testes
+ `npm test:watch` - Inicia um watch que executa os testes sempre que algo for modificado

## Dependencias
MongoDb, pode ser baixado através de imagem docker e executado da seguinte forma:

docker pull tutum/mongodb
docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="iot-gateway" tutum/mongodb

## License
MIT License. [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE).