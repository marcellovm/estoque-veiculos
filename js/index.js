function load(page) {
    //pegando o conteudo da variavel page e colocando no html da tag <main>
    content.innerHTML = window[page]();
}