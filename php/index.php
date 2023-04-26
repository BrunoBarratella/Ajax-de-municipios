<?php
require_once "class/ceps_class.php";

//Condição onde se houver uma requisição com o metodo POST executo os "itens" abaixo
if (isset($_POST['uf'])) {
  //Instancio a minha classe Ceps
  $ceps = new Ceps();
  //Atribuo a variavel da classe o valor vindo via metodo POST
  $ceps->uf = $_POST['uf'];

  //Atribuo a uma variavel minha função que traz os municipios de acordo com o estado selecionado
  $municipio = $ceps->getMunicipio();
  echo json_encode($municipio);

} else {
  //Caso não haja um POST executara todas as condições abaixo
  $ceps = new Ceps();
  $estados = json_encode($ceps->getEstados());
  echo $estados;
}
