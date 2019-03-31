<?php
  require_once 'config.php';
  require_once 'models/todo.php';
  require_once 'database.php';
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Todos</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="assets/todo.css">
</head>

<body>

        <div class="container">
            <div class="row">
                <div class="col-12">
                        <button type="button" class="btn btn-primary" id="btnOpenModal">
                                Ajouter une tâche 
                        </button>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                        <h2>Liste des tâches</h2>
                        <div id="message2" class="alert alert-success" role="alert"> </div>

                          <table class="table table-striped">
                              <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Titre</th>
                                    <th scope="col">Categorie</th>
                                    <th scope="col"></th>
                                  </tr>
                              </thead>
                              <tbody id="todosList">

                              <?php foreach (getAllTodos() as $todo) : ?>

                                  <tr id="todo_<?= $todo->id; ?>">
                                    <th scope="row"><?= $todo->id; ?></th>
                                    <td><?= $todo->title; ?></td>
                                    <td><?= $todo->category; ?></td>
                                <td><button type="button" class="btn btn-info show" onClick="showTodo(<?= $todo->id; ?>)">Voir</button></td> 
                               <!--     <td><button type="button" class="btn btn-info show" >Voir</button></td> -->
                                  </tr>
                                  
                                <?php endforeach; ?>             
                                  
                                </tbody>
                              </table>
                </div>
            </div>
            
        </div> 


           
              
              <!-- Modal -->
              <div class="modal fade" id="todoModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Ajouter une tâche</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">

                    <div id="message" class="alert alert-danger"> </div>

                    <form id="formAddTodo">

                        <input type="hidden" id="idTodo">

                    
                        <div class="form-group">
                                <label>Titre</label>
                                <input type="text" class="form-control" id="titleTodo">
                        </div>

                        <div class="form-group">
                          <label>Categorie</label>
                          <select class="form-control" id="categoryTodo">
                            <option>Urgent</option>
                            <option>Important</option>
                            <option>Normal</option>
                          </select>
                        </div>
    
                        <div class="form-group ">
                                <label for="exampleFormControlInput1">Description</label>
                                <textarea class="form-control" id="descriptionTodo" rows="3"></textarea>     
                        </div>
                      </form>   

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                      <button type="button" class="btn btn-primary default_screen" id="btnAddTodo">Ajouter</button>
                      <button type="button" class="btn btn-success other_screen" id="btnUpdateTodo">Modifier</button>
                      <button type="button" class="btn btn-danger other_screen" id="btnDeleteTodo">Supprimer</button>
                    </div>
                  </div>
                </div>
              </div>


    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

        <script src="assets/todo.js"></script>


</body>

</html>