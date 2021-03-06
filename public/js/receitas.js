$(document).ready(function() {
    //Função para deletar alimento/receita Selecionado
    $(".btn-excluir-receitas").on("click", function() {
        Swal.fire({
            title: 'Excluir esse item?',
            text: 'Você não pode desfazer essa ação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                var receita_id = $(this).attr('receita_id');
                $.ajax({
                    type: "post",
                    url: "/deletar-receita",
                    data: {
                        "_token": $('#token').val(),
                         "receita_id": receita_id
                      },
                });
                window.location.reload();
            }
        })
        return false;
    });
})
