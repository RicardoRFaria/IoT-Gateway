# Gateway para IoT

Gateway para iteração com dispositivos de IoT desenvolvido em node.js e Typescript

+ **TypeScript** 2.3 com transpile para ES6,
+ **TSLint** 4.x com recomentações gerais padrão (*Nota: TSLint >= 5.x ainda não é suportado pelo _tslint-microsoft-contrib_,
+ **Jest** para teste unitário e cobertura,
+ Definições de tipo para Node.js v6.x (LTS) e Jest
+ **Angular 1.6** para o front end da aplicação

## Scripts disponíveis

+ `npm start` - Inicia o servidor do express.js
+ `npm clean` - remove todos os caches e arquivos tranpilados
+ `npm build` - Transpile de TypeScript para ES6,
+ `npm run watch` - Inicia um watch que efetua o transpile automatico de coisas alteradas
+ `npm lint` - Executa um lint dos arquivos e dos testes
+ `npm test` - Executa os testes
+ `npm test:watch` - Inicia um watch que executa os testes sempre que algo for modificado

## Dependências
MongoDb, pode ser baixado através de imagem docker e executado da seguinte forma:

```
$ docker pull tutum/mongodb
$ docker run -d -p 27017:27017 -p 28017:28017 -e MONGODB_PASS="iot-gateway" tutum/mongodb
```

## Executando a aplicação
1. Execute o comando `npm run watch` em um console e deixe aberto
2. Execute o comando `npm start` em outro console
3. Abra o navegador na tela padrão conforme a porta configurada (ela será escrita no log, por padrão é 3000).

## Carregando com dados básicos:
Os dados básicos para execução da app, são criados através de uma URL exposta no endpoint de api no endereço:
`http://localhost:3000/api/basicos`

Ao executar este endereço, será criado um cadastro wildcard, com ID do MQTT Client '*', de forma que qualquer dispositivo enviando os dados, terá seu cadastro de dispositivo atendido para este.

O evento padrão é o envio de SMS para o número padrão e será enviado sempre que a aplicação receber um valor 'true'.

## Papper
O papper (artigo) que está sendo confeccionado pode ser conferido aqui: [IoT-Gateway-TCC](https://github.com/daniloguimaraes/IoT-Gateway-TCC).

## License
MIT License. [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/master/LICENSE).
