$(document).ready(function() {
    $('input[type="button"]').click(function(){
        var result = $('#input').val();
        result = result*1000/3600;
        if ( isNaN(result) ) {
            $('#output').val('0.00');
            alert("Введён некорректный тип данных");
        }
        else 
            $('#output').val(result.toFixed(2));
    });
});


