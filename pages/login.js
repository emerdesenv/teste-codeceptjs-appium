const { I } = inject();

module.exports = {
    fields: {
        email: '#email',
        password: '#password'
    },

    button: {
        enter: '#login-button'
    },

    messages: {
        login_error: 'Erro ao realizar login'
    },

    doLogin(email, password) {
        //pause(); // Comando para debugar manualmente os testes, cada teste o mesmo salva na pasta outputs o histótico
        //Toda vez que o teste falha o mesmo tira uma screenshot e salva na pasta output

        I.waitForElement(this.fields.email, 5);
        I.fillField(this.fields.email, email);
    
        I.waitForElement(this.fields.password);
        I.fillField(this.fields.password, password);

        I.waitForElement(this.button.enter);
        I.click(this.button.enter);
    },

    checkLoginError() {
        I.waitForText(this.messages.login_error, 5);
        I.see(this.messages.login_error);
    },

    scrollPage() {
        I.touchPerform([
            { action: 'press', options: { x: 215, y: 1000 } },
            { action: 'wait', options: { ms: 300 } },
            { action: 'moveTo', options: { x: 215, y: 500 } },
            { action: 'release' }
        ]);
    }
}