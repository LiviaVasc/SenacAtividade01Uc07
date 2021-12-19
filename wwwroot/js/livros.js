function validaTitulo()
{
    var campoTitulo = document.getElementById("txtTitulo");
    var valorTitulo = txtTitulo.value;
    
    if(valorTitulo.length < 2)
    {
        alert("Título inexistente, tente novamente");
        return false;
    }
    else
    {
        return true;
    }
}

function validaAutor()
{
    var campoAutor = document.getElementById("txtAutor");
    var valorAutor = txtAutor.value;
    
    if(valorAutor.length < 4)
    {
        alert("Autor incorreto, por favor tente novamente");
        return false;
    }
    else
    {
        return true;
    }
}

function validaAno()
{
    var campoAno = document.getElementById("txtAno");
    var valorAno = txtAno.value;
    
    if(valorAno.length < 11)
    {
        alert("Ano inexistente");
        return false;
    }
    else
    {
        return true;
    }
}

