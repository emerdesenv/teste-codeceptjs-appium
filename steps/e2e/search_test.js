Feature('search').tag('@search');

const {I, searchPage } = inject(); // Declarando no escopo global, assim consigo usar em qualquer cenário de teste

// Executa sempre antes de cada Teste
Before(() => {
    console.log("Somente um teste!");
});

// Executa sempre depois de cada Teste
After(() => {
    console.log("Somente um teste!");
});

Scenario('Pesquisa com sucesso',  ({ I }) => {
    I.runOnAndroid(() => {
        console.log("Rodou no Android!");
    });

    I.runOnIOS(() => {
        console.log("Rodou no IOS!");
    });

    searchPage.doSearch('Search or type URL', 'Maestro Framework');

}).tag('@pesquisa_sucesso');

Scenario('Pesquisa com erro',  ({ I }) => {
    searchPage.doSearch('Pesquisa aqui', 'Mestre dos magos');
    searchPage.checkTextError();
}).tag('@pesquisa_erro');