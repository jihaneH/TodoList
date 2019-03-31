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

        $title          = htmlspecialchars($title);
        $description    = htmlspecialchars($description);
        $category       = htmlspecialchars($category);

        if($title != '' &&  $description != '' && $category != ''){

            $todo = new Todo();
            $todo->title        = $title;
            $todo->category     = $category;
            $todo->description  = $description;

            saveTodo($todo);

            echo json_encode(new ResponseSuccess($todo,"La nouvelle tâche a été enregistrée."));
        }
        else{
            echo json_encode(new ResponseFail("Erreur : Impossible d'enregistrer la nouvelle tâche, vérifier le formulaire."));
        }
}else{
    echo json_encode(new ResponseFail("Erreur : Impossible d'enregistrer la nouvelle tâche, vérifier le formulaire."));
}

