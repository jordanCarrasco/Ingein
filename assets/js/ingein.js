$(document).ready(function(){
	//$('#paginaCargada').hide();
	 $.getJSON('http://www.mindicador.cl/api', function(data) {
                    var dailyIndicators = data;
                    $('#uf').text('$'+dailyIndicators.uf.valor);                   
                    $('#utm').text('$'+dailyIndicators.utm.valor);                   
                    $('#usd').text('$'+dailyIndicators.dolar.valor);                 
                    $('#ipc').text(dailyIndicators.ipc.valor);   
                }).fail(function() {
                    console.log('Error al consumir la API!');
    });

	$.ajax({
		url:'administration/dataPage.json',
		type: 'GET',
		dataType:'json',
		success: function(result){
			$.each(result,function(i,item){
                createHtmlSection(item);
                        
            });
		}
	});


});


function createHtmlSection(item){
	var section = item.tipoSection;
	var html = "";
	switch(section){
		case 'quienes_somos':
			html = "<div class='col-md-6 col-md-offset-3 wow fadeIn'>" +
				   " <h1>"+ item.titulo+"</h1>" +
                   " <hr class='colored'>"  +                   
                   "</div>" +
                   "<div class='row'>" +
                   "<div class='col-md-6 col-md-offset-3'  align='justify'>" +
                   " <p>" + item.desc + "</p>" +
                   "</div></div>";
                   $('#sectionAbout').html(html); 
			break;
		case 'nuestro_equipo':
		var htmlAux = "";
			html = "<div class='row'>"+
		            "    <div class='col-lg-12'>"+
		            "        <h2>"+item.titulo +"</h2>"+
		            "        <p>"+item.subtitulo +"</p>"+
		            "        <hr class='colored'>"+
		            "    </div>"+
		            "</div>"+
		            "<div class='row content-row'>"+
		            "    <div class='col-lg-12'>"+
		            "        <div class='about-carousel'>";
		            $.each(item.integrantes,function(i,item){
		              htmlAux = htmlAux +"<div class='item'>"+
		            "                <img src='"+ item.img+"' class='img-responsive' alt=''>"+
		            "                <div class='caption'>"+
		            "                    <h3>"+item.nombre +"</h3>"+
		            "                    <hr class='colored'>"+
		            "                    <p>"+item.cargo +"</p>"+
		            "                    <ul class='list-inline social'>"+
		            "                        <li>"+
		            "                            <a href='#'><i class='fa fa-facebook fa-fw'></i></a>"+
		            "                        </li>"+
		            "                        <li>"+
		            "                            <a href='#'><i class='fa fa-twitter fa-fw'></i></a>"+
		            "                        </li>"+
		            "                        <li>"+
		            "                            <a href='#'><i class='fa fa-linkedin fa-fw'></i></a>"+
		            "                        </li>"+
		            "                    </ul>"+
		            "                </div>"+
		            "            </div>"; 
		            });	      
		                        
		            html = html + htmlAux + "</div>"+
		            "    </div>"+
		            "</div>";
		            $('#nuestroEquipo').html(html);

		            // Owl Carousel Settings
				    $(".about-carousel").owlCarousel({
				        items: 3,
				        navigation: true,
				        pagination: false,
				        navigationText: [
				            "<i class='fa fa-angle-left'></i>",
				            "<i class='fa fa-angle-right'></i>"
				        ],
				    });
		            
		break;
		case 'nuestros_servicios':
			var aux = "";
			var aux2 = "";
			html = 	"<div class='row text-center'>" +
            "    <div class='col-lg-12 wow fadeIn'>" +
            "        <h2>"+item.titulo+"</h2>" +
            "        <hr class='colored'>" +
            "        <p>"+item.subtitulo+"</p>" +
            "    </div>" +
            "</div>" +
            "<div class='row content-row'>";
            $.each(item.desc,function(i,b){
            	aux2 = "";
            	aux = aux + 
            	"    <div class='col-md-4 wow fadeIn' data-wow-delay='.2s'>" +
	            "        <div class='media'>" +
	            "            <div class='pull-left'>" +
	            "                <i class='fa fa-clipboard'></i>" +
	            "            </div>" +
	            "            <div class='media-body'>" +
	            "                <h3 class='media-heading'>"+b.titulo+"</h3>"+
	            "                <ul>";
	            $.each(b.detalle,function(i,details){
	            	aux2 = aux2 + "<li>"+details.desc+"</li>";

	            });
	            aux = aux + aux2;
	            aux = aux + "            </div>" +
				            "        </div>" +
				            "    </div>";
            });          
                   
            html = html + aux + "</div>" ;
            
            $('#sectionServicios').html(html);


		break;
		case 'nuestro_trabajo':
		break;		

	}

}