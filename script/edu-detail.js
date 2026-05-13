//detail.js

$(function(){
    $('.consult').on('click', function(e){
        e.preventDefault();

        $('#modal').show();
    });

    $('.close').on('click', function(){
        $('#modal').hide();
    });
});