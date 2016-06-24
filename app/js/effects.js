// Efecto clic menu lleva panel
function posiciones(){
   
   
  var posPane1 = $('#posPanel1').offset();
  var posPane2 = $('#posPanel2').offset();
  var posPane3 = $('#posPanel3').offset();


  var endEfecto ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('#inicio').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: 0,
      },800)
    }); 

  $('#panel1').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: posPane1.top ,
      },800);

    });

  $('#panel2').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: posPane2.top ,
      },800)
    });

  $('#panel3').click(function(e) {

      $('body, html').stop().animate({
        scrollTop: posPane3.top ,
      },800)
    });

}



$(document).ready(function () {
	
	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	    }
	});

	// actualizamos posiciones

	setInterval('posiciones()', '1000');  

	// Efectos Segun Clik

	$('.panel').click(function(){

		$(this).animateCss('bounce');
	})

	// efectos segun posicion

	$(document).on('scroll', function(e){

		var posGeneral = $(document).scrollTop();

		console.log(posGeneral);
		
		// Efecto Navbar

		if (posGeneral >= 5) {
			$('.navbar').addClass('navbar-fixed-top');
		}else if(posGeneral <= 10){
			$('.navbar').removeClass('navbar-fixed-top');
		};

		// identificar poscion y efecto Nota: el elemeno tiene estylo opacity : 0

		var posPaenel = $('.panel').offset().top;

		if (posGeneral >= posPaenel) {

			$('.thumbnail > .caption').addClass('animated fadeIn');
		};

		// secuencia de efectos en varios elementos

		var posPanleBig = $('.panelBig').offset().top;
		var endEfecto ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		if (posGeneral >= posPaenel) {

			$('.bigTitle').addClass('animated fadeInDownBig').one(endEfecto, function(){
         		 $('.bigText').addClass('animated fadeInDownBig').one(endEfecto, function(){
            		$('.bigBtn').addClass('animated fadeInDownBig');
          		});
        	});
		};



	});




});
