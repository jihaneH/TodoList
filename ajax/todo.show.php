<?php
  require_once '../config.php';
  require_once '../models/todo.php';
  require_once '../models/response_fail.php';
  require_once '../models/response_success.php';
  require_once '../database.php';
?>

<?php

if(! empty($_POST) &&  ! empty($_POST['id'])){

    $todo = getTodo($_POST['id']);
    echo json_encode(new ResponseSuccess($todo));

  }else{
    echo json_encode(new ResponseFail("Erreur : Impossible de trouver la tâche ."));
}

