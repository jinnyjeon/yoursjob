//detail.js

$(function(){
    $('.btn a').on('click', function(e){
        e.preventDefault();

        $('#modal').show();
    });

    $('.close').on('click', function(){
        $('#modal').hide();
    });
});