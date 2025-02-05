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
    }
}