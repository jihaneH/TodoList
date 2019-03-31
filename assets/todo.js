
document.getElementById("btnOpenModal").addEventListener("click", openModal);
document.getElementById("btnAddTodo").addEventListener("click", addTodo);
document.getElementById("btnUpdateTodo").addEventListener("click", updateTodo);
document.getElementById("btnDeleteTodo").addEventListener("click", deleteTodo);

cleanForm();

function openModal() {
    cleanForm();
    toggleModal();
}

function addTodo() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var response = JSON.parse(xhr.responseText);

            if(response.success){

                var todo = response.todo;
                var todosList = document.getElementById("todosList");

                var noeud_todo = document.createElement("tr");
                noeud_todo.setAttribute("id", "todo_" + todo.id);
                noeud_todo.innerHTML = "<th scope='row'>" + todo.id + "</th>  <td>" + todo.title + "</td>  <td>" + todo.category + "</td> <td><button type=button class='btn btn-info' onClick='showTodo(" + todo.id + ")' >Voir</button></td>";

                todosList.insertBefore(noeud_todo, todosList.firstChild);

                cleanForm();
                toggleModal();

                document.getElementById("message2").innerHTML = response.message;
                document.getElementById("message2").style.display = "";

            }else{
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("message").style.display = "";

            }
        }
    };

    xhr.open('POST', 'ajax/todo.add.php');

    var data = new FormData();
    data.append('title', document.getElementById("titleTodo").value);
    data.append('description', document.getElementById("descriptionTodo").value);
    data.append('category', document.getElementById("categoryTodo").value);
    data.append('id', document.getElementById("idTodo").value);


    xhr.send(data);

}

function updateTodo() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var response = JSON.parse(xhr.responseText);

            if(response.success){
                var todo = response.todo;
                var todosList = document.getElementById("todosList");
    
                var noeud_todo = document.createElement("tr");
                noeud_todo.setAttribute("id", "todo_" + todo.id);
                noeud_todo.innerHTML = "<th scope='row'>" + todo.id + "</th>  <td>" + todo.title + "</td>  <td>" + todo.category + "</td> <td><button type=button class='btn btn-info' onClick='showTodo(" + todo.id + ")' >Voir</button></td>";
    
                todosList.replaceChild(noeud_todo, document.getElementById("todo_" + todo.id));
    
                cleanForm();
                toggleModal();
                
                document.getElementById("message2").innerHTML = response.message;
                document.getElementById("message2").style.display = "";

              
            }
            else{
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("message").style.display = "";

            }    
        }
    };

    xhr.open('POST', 'ajax/todo.update.php');

    var data = new FormData();
    data.append('title', document.getElementById("titleTodo").value);
    data.append('description', document.getElementById("descriptionTodo").value);
    data.append('category', document.getElementById("categoryTodo").value);
    data.append('id', document.getElementById("idTodo").value);


    xhr.send(data);

}

function deleteTodo() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {


            var response = JSON.parse(xhr.responseText);

            if(response.success){

                var noeud_todo = document.getElementById("todo_" + document.getElementById("idTodo").value);
                var todosList = document.getElementById("todosList");
    
                todosList.removeChild(noeud_todo);

                cleanForm();
                toggleModal();

                document.getElementById("message2").innerHTML = response.message;
                document.getElementById("message2").style.display = "";
               
            }else{
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("message").style.display = "";
            }
        }
    };

    xhr.open('POST', 'ajax/todo.delete.php');

    var data = new FormData();
    data.append('id', document.getElementById("idTodo").value);

    xhr.send(data);

}

function showTodo(id) {

    document.getElementById("btnAddTodo").style.display = "none"; // remplace  $("#btnAddTodo").hide();
    document.getElementById("btnUpdateTodo").style.display = "";  // remplace $("#btnUpdateTodo").show();
    document.getElementById("btnDeleteTodo").style.display = "";  // remplace $("#btnDeleteTodo").show();
    toggleModal();

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {

            var response = JSON.parse(xhr.responseText);

            if(response.success){

                var todo = response.todo;

                document.getElementById("idTodo").value = todo.id;
                document.getElementById("titleTodo").value = todo.title;
                document.getElementById("categoryTodo").value = todo.category;
                document.getElementById("descriptionTodo").value = todo.description;

                toggleModal();

            }else{
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("message").style.display = "";

            }            
        }
    };

    xhr.open('POST', 'ajax/todo.show.php');

    var data = new FormData();
    data.append('id', id);

    xhr.send(data);

}


function toggleModal(){
    $('#todoModal').modal('toggle');
}

function cleanForm() {
    document.getElementById("idTodo").value = "";
    document.getElementById("titleTodo").value = "";
    document.getElementById("categoryTodo").value = "";
    document.getElementById("descriptionTodo").value = "";
    
    document.getElementById("message").innerHTML = "";
    document.getElementById("message2").innerHTML = "";

    document.getElementById("btnAddTodo").style.display = ""; 
    document.getElementById("btnUpdateTodo").style.display = "none";  
    document.getElementById("btnDeleteTodo").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("message2").style.display = "none";
    

}