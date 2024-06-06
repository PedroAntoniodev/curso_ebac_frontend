$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        if(novaTarefa) {
            const novaLista = $('<li style="display: none"></li>');
            novaLista.append(`<span>${novaTarefa} `);
            novaLista.appendTo('ul');
            novaLista.fadeIn();
            $('#nova-tarefa').val('');
        } else {
            alert("Por favor, preencha ambos os campos.");
        }
    });
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).find('span').toggleClass('feito');
    });
});