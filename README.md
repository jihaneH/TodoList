# Gestionnaire de tâches en AJAX

## A. Organisation du projet

```
├── assets
│   ├── todo.css
│   ├── todo.js
│   └── __todo.js
│ 
├── ajax
│   ├── todo.add.php
│   ├── todo.delete.php
│   ├── todo.show.php
│   └── todo.update.php
│
├── models
│   ├── response_fail.php
│   ├── response_success.php
│   ├── response.php
│   └── todo.php
│       
├── config.php
├── database.php
├── index.html
└── table.sql

```
## B. Une tâche - todo

Une todo (tâche) se compose de :

+ id : Un identifiant  (entier unique )
+ title : Un titre (une chaine de caractère)
+ category : Une catégorie (une chaine de caractère)
+ description : Une description  (un texte long)

## C. Base de donnée 

Le fichier table.sql contient les requêtes SQL pour la création de la table

## D. Fichier de configuration 

Il faut configurer le fichier config.php avec vos propres accès à la base de donnée

```php
define ('DBH','__A_CONFIGURER__'); // exemple :  'mysql:dbname=todos;host=localhost'
define ('USER','__A_CONFIGURER__');
define ('PASSWORD', '__A_CONFIGURER__');
```

## E. Utiliser JS 

Le script a importer est :

```html
    <script src="todo.js"></script>
```
Verifier que la ligne 53 est decommenté  et la ligne 54 commenté
```html
            <td><button type="button" class="btn btn-info show" onClick="showTodo(<?= $todo->id; ?>)">Voir</button></td> 
    <!--     <td><button type="button" class="btn btn-info show" >Voir</button></td> -->
```

## F. Utiliser jQuery 

```html
    <script src="todo_jquery.js"></script>
```
Verifier que la ligne 53 est commenté  et la ligne 54 décommenté
```html
      <!--       <td><button type="button" class="btn btn-info show" onClick="showTodo(< ?= $todo->id; ?>)">Voir</button></td>  -->
        <td><button type="button" class="btn btn-info show" >Voir</button></td> 
```
