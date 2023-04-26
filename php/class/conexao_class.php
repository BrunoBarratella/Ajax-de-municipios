<?php
class Conexao
{
  var $Bhost = "bagre";
  var $Buser = "wise";
  var $Bpass = "#Ws!0zWISEd1o8d0i5%";
  var $Bdb = "checkout_teste";
  var $Bport = 3306;

  public $conn;

  public function __construct()
  {
    try {
      $this->conn = new PDO("mysql:host=" . $this->Bhost . ";port=" . $this->Bport . ";dbname=" . $this->Bdb, $this->Buser, $this->Bpass);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      echo "Whoops, ocorreu um erro ao conectar-se ao banco de dados" . $e;
    }
  }
}
