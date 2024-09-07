function pesquisar() {
    // Variáveis
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    const minCaracteres = 3; // Define o número mínimo de caracteres
    
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado. Você precisa digitar algo relacionado a Crimes Cibernéticos.";
        return
    }
  
    campoPesquisa = campoPesquisa.toLowerCase();

    // Vamos mostrar no console o que estamos digitando
    console.log(campoPesquisa);

    // para cada dado dentro da lista dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados  += `
        <div class="item-resultado">
            <h2><a>${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.linkVideo}> Link de Vídeo</a><br>
            <a href=${dado.linkPdf}> Link do PDF</a>
        </div>
        `;
        }
    } 

    if (!resultados) {
        resultados = "Nenhuma informaçã encontrada sobre o que você pesquisou.";
    }

    section.innerHTML = resultados
}