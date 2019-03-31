<?php

function getDBH()
{
    try {
        $bdd = new PDO(DBH, USER, PASSWORD);
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $bdd->exec('SET NAMES utf-8');
        return $bdd;
    } catch (PDOException $e) {
        echo 'Connexion échouée : ' . $e->getMessage();
    }
}

 function getAllTodos()
 {
     $dbh = getDBH();
     $req = $dbh->prepare('SELECT * FROM todos ORDER BY id DESC ');
     $req->setFetchMode(PDO::FETCH_CLASS, 'Todo');
     $req->execute();
    
     return $req->fetchAll();
 }

 function saveTodo($todo)
 {
     $dbh = getDBH();
     $req = $dbh->prepare("INSERT INTO todos (title, category, description) VALUES (:title, :category, :description)");
     $req->bindParam(':title', $todo->title);
     $req->bindParam(':category', $todo->category);
     $req->bindParam(':description', $todo->description);
     $req->execute();
    
     $todo->id = $dbh->lastInsertId();
 }

 function getTodo($id)
{
    $dbh = getDBH();
    $req = $dbh->prepare('SELECT * FROM todos WHERE id = :id');
    $req->bindParam(':id', $id);
    $req->setFetchMode(PDO::FETCH_CLASS, 'Todo');
    $req->execute();
   
    return $req->fetch();
}

function deleteTodo($id)
{
    $dbh = getDBH();
    $req = $dbh->prepare("DELETE FROM todos WHERE id = :id");
    $req->bindParam(':id', $id);
    $req->execute();
}

function updateTodo($todo)
{
    $dbh = getDBH();
    $req = $dbh->prepare("UPDATE todos SET title = :title, category = :category , description = :description WHERE id = :id");
    $req->bindParam(':title', $todo->title);
    $req->bindParam(':description', $todo->description);
    $req->bindParam(':category', $todo->category);
    $req->bindParam(':id', $todo->id);
    $req->execute();
}
