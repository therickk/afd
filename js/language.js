
$(".translate").change(function(){
	val = $(this).val();
    $.getJSON('js/'+val+'.json', function (json){
	    $(".lang").each(function(index, value){
            $(this).text($(this).attr('key'));
	    });
    });
});  