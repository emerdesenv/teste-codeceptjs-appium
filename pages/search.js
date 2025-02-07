const { I } = inject();

module.exports = {
    fields: {
        search: '#search_box',
        link: '#com.android.chrome:id/line_1'
    },

    text: {
        text_error: 'Maestro',
        text_default_field: 'Search or type URL'
    },

    doSearch(text_input) {
        //pause(); // Comando para debugar manualmente os testes, cada teste o mesmo salva na pasta outputs o histótico
        //Toda vez que o teste falha o mesmo tira uma screenshot e salva na pasta output

        I.waitForElement(this.fields.search, 5);
        I.see(this.text.text_default_field);
        I.fillField(this.fields.search, text_input);
    
        I.waitForElement(this.fields.link, 2);
        I.click(this.fields.link);
    },

    checkText() {
        I.waitForText(this.text.text_error, 5);
        I.see(this.text.text_error);
    }
}