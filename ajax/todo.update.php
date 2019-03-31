<?php
  require_once '../config.php';
  require_once '../models/todo.php';
  require_once '../models/response_fail.php';
  require_once '../models/response_success.php';
  require_once '../database.php';
?>

<?php

if(! empty($_POST)){

    extract($_POST);

    $id             = htmlspecialchars($id);
    $title          = htmlspecialchars($title);
    $description    = htmlspecialchars($description);
    $category       = htmlspecialchars($category);

  
    if( $id != '' && $title != '' &&  $description != '' &&  $category != ''){
 
        $todo               = new Todo();
        $todo->title        = $title;
        $todo->category     = $category;
        $todo->description  = $description;
        $todo->id           = $id;

        updateTodo($todo);

        echo json_encode(new ResponseSuccess($todo,"La tâche a été modifiée."));

    }
    else{
        echo json_encode(new ResponseFail("Erreur : Impossible de modifier la tâche, vérifier le formulaire."));
    }

}else{
    echo json_encode(new ResponseFail("Erreur : Impossible de modifier la tâche, vérifier le formulaire."));
}
