# teste CodeceptJS e Appium

* Testes na interface Mobile
* Usando Page Object

## Programas Necessários para todos os Ambientes

* NodeJS
* Java
* Appium Doctor
* Appium
* Visual Studio Code

## Comandos para serem executados no Terminal Global

* **Observações** - Instruções -g ira instalar no seu ambiente, podendo ser rodado em qualquer terminal ou projeto

* **npm i -g appium-doctor** - Irá instalar o appium-doctor, serve para verificar se o seu ambiente temos todas as configurações necessárias
* **npm i -g appium** - Irá instalar o Appium
* **npm i codeceptjs webdriverio@8.6.3 --save-dev** - Ira realizar a instalação do CodeceptJS
* **appium driver install uiautomator2** e **appium driver install xcuitest** - Instalação dos Drivers
* **appium plugin install execute-driver** - Pacote de execução (Talvez opcional)
* **npm install --save-dev webdriver-manager** - Instala o WebDriver

## Configuração Variáveis de Ambiente

* Configurar nas variáveis de ambiente do seu sistema operacional conforme cada ambiente, seguir na pasta **tutoriais**

## Documentações de Referências

* **CodeceptJS** - https://codecept.io/
* **Appium Desktop** - https://github.com/appium/appium-desktop/releases

## Configurando o Projeto

* No seu terminal digite o seguinte comando: **npx codeceptjs init**
* Realize a pré configuração padrão, sempre selecionando as opções desejadas
* Configurar o diretório do APK no arquivo **.env**

## Rodando os Testes

* Primeiramente deve-se iniciar o **Appium** como o comando **appium** no seu terminal ou **appium --allow-cors**
* Rodar o comando no seu terminal: **npx codeceptjs run --steps**
* Criando arquivos de teste: **npx codeceptjs gt**
* Criando Page Object: **npx codeceptjs gpo**

## Comandos de Referências

* **curl http://localhost:4723/status** - Para verificar o status do Appium

## Rodando as configurações Appium Inspetor

* Coloque uma porta: 4723
* Abrir o link: **https://inspector.appiumpro.com/** para acessar o inspetor de elementos