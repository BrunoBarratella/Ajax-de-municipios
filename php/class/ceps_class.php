<?php
require_once "conexao_class.php";

class Ceps{
public $uf;

//Função para trazer todos as UF's do banco de dados
  public function getEstados(){
    $conexao = new Conexao();

    try {
      $sql = "SELECT Estado FROM cep GROUP BY Estado";

      $qr = $conexao->conn->prepare($sql);
      $qr->execute();
      return $qr->fetchAll();
    } catch (PDOException $e) {
      echo "Whoops ocorreu um erro ao trazer estados do banco de dados: " . $e;
    }
  }

//Função para trazer todos os municipios de acordo com a UF selecionada
  public function getMunicipio(){
    $conexao = new Conexao();

    try {
      $sql = "SELECT Cidade FROM cep WHERE Estado = '" . $this->uf . "' AND Cidade IS NOT NULL GROUP BY Cidade";

      $qr = $conexao->conn->prepare($sql);
      $qr->execute();
      return $qr->fetchAll();
    } catch (PDOException $e) {
      echo "Whops, ocorreu um erro ao trazer os municipios: " . $e;
    }
  }

}