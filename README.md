# teste CodeceptJS e Appium

* Testes Mobile
* Usando Page Object
* Reports
* Uso de Tags

## Programas Necessários para todos os Ambientes

* NodeJS
* Java
* Appium Doctor
* Appium
* Visual Studio Code

## Comandos para serem executados no Terminal Global (NPM)

* **Observações** - Instruções -g ira instalar no seu ambiente, podendo ser rodado em qualquer terminal ou projeto

* **npm i -g appium-doctor** - Irá instalar o appium-doctor, serve para verificar se o seu ambiente temos todas as configurações necessárias
* **npm i -g appium** - Irá instalar o Appium
* **npm i codeceptjs webdriverio@8.6.3 --save-dev** - Ira realizar a instalação do CodeceptJS
* **npm i webdriver-manager --save-dev** - Instala o WebDriver

## Comandos para serem executados no Terminal Global (APPIUM)

* **appium driver install uiautomator2** e **appium driver install xcuitest** - Instalação dos Drivers, **xcuitest** somente para MAC
* **appium plugin install execute-driver** - Pacote de execução (Talvez opcional)

## Configuração Variáveis de Ambiente

* Configurar nas variáveis de ambiente do seu sistema operacional conforme cada ambiente, seguir na pasta **tutoriais**

## Documentações de Referências

* **CodeceptJS** - https://codecept.io/
* **Appium Desktop** - https://github.com/appium/appium-desktop/releases

## Configurando o Projeto

* No seu terminal digite o seguinte comando: **npx codeceptjs init**
* Realize a pré configuração padrão, sempre selecionando as opções desejadas
* Configurar o diretório do APK no arquivo **.env**

## Rodando os Testes (Emulator)

* **Observações** - Rodando somente um teste dentro de uma suite ou uma suite, usar as tags, exemplo: **npm run testUnit '@name_test'**

* Primeiramente deve-se iniciar o **Appium** como o comando **appium** no seu terminal ou **appium --allow-cors**
* Rodar o comando no seu terminal: **npm run testAll**
* Criando arquivos de teste: **npx codeceptjs gt**
* Criando Page Object: **npx codeceptjs gpo**

## Rodando os Testes (Real)

* Para rodar no dispositivo real rode o comando no terminal: **adb devices**
* Verifique se o seu dispositivo apareceu, pois é o nome que deve-ser configurado em **DEVICE** no arquivo **.env**
* Rode o comando no terminal: **npm run testAll**

## Comandos de Referências

* **curl http://localhost:4723/status** - Para verificar o status do Appium

## Rodando as configurações Appium Inspetor

* **Observações** - Se o mesmo não funcionar podemos usar o Maestro somente para usar como inspetor de elementos
* **Observações** - Pode ocorrer de ocorrer erro ao realizar a conexão, certifique-se de configurar corretamente as **capabilities**

* Abrir o link: **https://inspector.appiumpro.com/** para acessar o inspetor de elementos, segue abaixo o **JSON** de pré configuração:

* ![Json de exemplo](tutoriais/images/json-config.png)

## Documentos de Estudos

* Aplicando o BDD nos cenários de testes em: **https://codecept.io/bdd/**
