//Crio as constantes que recebem meus selects
const selUf = document.querySelector("#uf");
const selMunicipio = document.querySelector("#municipio");

//Faço um fetch onde trago todos meus estados e adiciono no meu select atribuido a constante selUf
fetch("php/index.php")
  .then(request => request.json())
  .then((response) => {
    //Crio um laço de repetição (forEach), onde para cada resposta que houver no caso aqui sendo representada por
    // "Estado" eu crio uma constante chamada option onde dentro dela acesso meu documento e crio um novo elemento option
    // E atribuo a eles seus devidos valores value = <option value=''> e text = <option>Text</option>
    response.forEach((Estado) => {
      const option = document.createElement("option");
      option.value = Estado.Estado
      option.text = Estado.Estado

      //No fim do laço adiciono a constante que representa o dado recebido ao meu select Uf
      selUf.append(option);
    });
    console.log("Estados foram adicionados com sucesso")
  }).catch((error) => {
    console.log(error);
  });

//Crio um escutador de Eventos onde a cada mudança(Change) ele recebe um evento onde executa uma função
selUf.addEventListener("change", (event) => {
  //Crio uma condição para limpar meu campo de Municipios
  while (selMunicipio.options.length > 0) {
    selMunicipio.remove('0');
  }

  //Quando todos meus campos de municipio forem limpos irei acionar a função que recebe o valor do meu
    //target como parametro
  buscaCidade(event.target.value);
});

//Crio uma função que recebe como parametro o "uf"
function buscaCidade(uf) {
  //Crio uma constante com o nome form que recebe um FormData para conseguir enviar via no metodo body
  const form = new FormData();
  //Adiciono  um campo de formulario que recebe um nome e um valor por ex: <input name='uf' value='uf'>
  form.append("uf", uf)

  //Faço o outro fetch mas usando o metodo Post e enviando minha constante form
  fetch("php/index.php", {
    method: "post",
    body: form
  })
    .then(request => request.json())
    .then((response) => {
          //Esta parte é semelhante a parte de cima ^^^^
      //No meu response para cada "Cidades" que eu recebo que no caso são os dados trazidos do banco de dados
      response.forEach((Cidades) => {
        //Crio uma constante "options" que recebe um elemento novo <option>
        const options = document.createElement("option");
        //Atribuo valores para esse option
        options.value = Cidades.Cidade
        options.text = Cidades.Cidade

        //Adiciono o option com seus devidos valores atribuido ao meu select de Municipios
        selMunicipio.append(options);
      });
      console.log("Municipios foram adicionados com sucesso")
    }).catch((erros) => {
      console.log(erros);
    });
}