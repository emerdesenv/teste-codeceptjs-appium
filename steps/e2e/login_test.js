Feature('login');

const {I, loginPage } = inject(); // Declarando no escopo global, assim consigo usar em qualquer cenário de teste

// Executa sempre antes de cada Teste
Before(() => {
    console.log("Somente um teste!");
});

// Executa sempre depois de cada Teste
After(() => {
    console.log("Somente um teste!");
});

Scenario('Login com sucesso',  ({ I }) => {
    loginPage.doLogin('teste@teste.com', '123456');
});

Scenario('Login com erro',  ({ I }) => {
    loginPage.doLogin('teste@teste.com', '12345678');
    loginPage.checkLoginError();
});