$(document).ready(function(){

    $("#btnAddTodo").on('click', addTodo);
    $("#btnUpdateTodo").on('click', updateTodo);
    $("#btnDeleteTodo").on('click', deleteTodo);
    $("#btnOpenModal").on('click', openModal);

    $(".show").on('click', showTodo);

    cleanData();

function openModal(){
    cleanData();
    toggleModal();
}

function addTodo(){

    $.ajax({
        url: "ajax/todo.add.php", 
        type: "POST",
        data: {
            title :$("#titleTodo").val(),
            category :$("#categoryTodo").val(),
            description :$("#descriptionTodo").val(),
        },   
        dataType: "json",
        success: function(response){

            if(response.success){
                var todo = response.todo;

                $("#todosList").prepend("<tr id='todo_"+todo.id+"'> <th scope='row'>"+todo.id+"</th>  <td>"+todo.title+"</td>  <td>"+todo.category+"</td><td><button type=button class='btn btn-info show' >Voir</button></td></tr>");
                $('#todo_'+todo.id+" .show").on('click', showTodo);

                cleanData();
                toggleModal();

                $("#message2").text(response.message).show();
                
            }else{
                $("#message").text(response.message).show();
            }
        }      
    })

}

function updateTodo(){

    $.ajax({
        url: "ajax/todo.update.php", 
        type: "POST",
        data: {
            id :$("#idTodo").val(),
            title :$("#titleTodo").val(),
            category :$("#categoryTodo").val(),
            description :$("#descriptionTodo").val(),
        },   
        dataType: "json",
        success: function(response){

            if(response.success){
                var todo = response.todo;

                $( "#todo_"+todo.id+" th" ).replaceWith( "<th scope='row'>"+todo.id+"</th>" );
                $( "#todo_"+todo.id+" td:eq(0)" ).replaceWith( "<td>"+todo.title+"</td>" );
                $( "#todo_"+todo.id+" td:eq(1)" ).replaceWith( "<td>"+todo.category+"</td>" );

                cleanData();
                toggleModal();

                $("#message2").text(response.message).show();

            }else{
                $("#message").text(response.message).show();
            }
   
        }        
    })

}

function deleteTodo(){

    $.ajax({
        url: "ajax/todo.delete.php", 
        type: "POST",
        data: {
            id :$("#idTodo").val(),
        },   
        dataType: "json",
        success: function(response){

            if(response.success){
                $( "#todo_"+$("#idTodo").val() ).remove();
                toggleModal();
                $("#message2").text(response.message).show();

            }else{
                $("#message").text(response.message).show();
            }
   
        }        
    })

}

function showTodo(){
    cleanData();

    $(".default_screen").hide();
    $(".other_screen").show();


    // $(this) correspond a l'élément courant : le bouton sur lequel on a cliqué
    // $(this).parent() correspond au parent du bouton => le td
    // $(this).parent().parent() correspond au parent du parent du bouton => le tr
    // $(this).parent().parent().attr("id") correspond à l'id du tr => todo_X
    // pour recuperer le X j'utilise la fonction split qui coupe une chaine de caractère en fonction de l'element passé en paramettre : "_"
    // le split me renvoie un tableau, le 1er element du tableau : "todo" et le 2eme element : "X"
    // j'ai besoin du X donc je le récupère avec [1]
    
    var id  = ($(this).parent().parent().attr("id").split("_"))[1];

    $.ajax({
        url: "ajax/todo.show.php", 
        type: "POST",
        data: {
            id :id,
        },   
        dataType: "json",
        success: function(response){

            if(response.success){
                var todo = response.todo;
                $("#idTodo").val(todo.id);
                $("#titleTodo").val(todo.title);
                $("#categoryTodo").val(todo.category);
                $("#descriptionTodo").val(todo.description);

                toggleModal();

            }else{
                $("#message").text(response.message).show();
            }

        }  
    })
}


function toggleModal(){
    $('#todoModal').modal('toggle');
}


function cleanData(){
    $("input, textarea").val("");
    $("#message, #message2").html("");
    $("#message, #message2").hide();


    $(".default_screen").show();
    $(".other_screen").hide();
}

}); // END jQuery





