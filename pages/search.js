const { I } = inject();

module.exports = {
    fields: {
        search: '#search_box',
        link: '#com.android.chrome:id/line_1'
    },

    text: {
        text_error: 'Maestro'
    },

    doSearch(text_default, text_input) {
        //pause(); // Comando para debugar manualmente os testes, cada teste o mesmo salva na pasta outputs o histótico
        //Toda vez que o teste falha o mesmo tira uma screenshot e salva na pasta output

        I.waitForElement(this.fields.search, 5);
        I.see(text_default);
        I.fillField(this.fields.search, text_input);
    
        I.waitForElement(this.fields.link);
        I.click(this.fields.link);
    },

    checkTextError() {
        I.waitForText(this.text.text_error, 5);
        I.see(this.text.text_error);
    }
}