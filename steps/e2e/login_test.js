Feature('login');

const {I, loginPage } = inject()

Scenario('Login com sucesso',  ({ I }) => {
    loginPage.doLogin('teste@teste.com', '123456');
});

Scenario('Login com erro',  ({ I }) => {
    loginPage.doLogin('teste@teste.com', '12345678');
    loginPage.checkLoginError();
});