$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa-input').val();
        const novaLinha = $(`<li>${tarefa}</li>`);
        $(novaLinha).appendTo('ul');
        $('#tarefa-input').val('');
        $(novaLinha).val('');
        })
});