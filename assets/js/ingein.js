$(document).ready(function(){
	$('#paginaCargada').hide();
	$.ajax({
		url:'administration/dataPage.json',
		type: 'GET',
		dataType:'json',
		success: function(result){
			$.each(result,function(i,item){
                alert(item);
                        
            });
		}
	});


})