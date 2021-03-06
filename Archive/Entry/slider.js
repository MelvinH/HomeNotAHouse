// JavaScript Document

//Get Price Value//  
$(function() {
	$(".report").hide();	
    $( "#price-range" ).slider({
      range: true,
      min: 0,
      max: 500000,
	  step: 50000,
      values: [ 100000, 300000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
	
    $( "#amount" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) + " - $" + $( "#price-range" ).slider( "values", 1 ) );
	  
				

//Get Crime Value//  						
	var crimesteps = [];
	crimesteps[ 0 ] = "People should watch out for me!";
	crimesteps[ 1 ] = "I'm used to rough neighborhoods.";
	crimesteps[ 2 ] = "I have some street skills.";
	crimesteps[ 3 ] = "I don't mind a little character.";
	crimesteps[ 4 ] = "I have six locks on my door!"
				


	$( "#crime-range" ).slider({
	range: false,
	min: 0,
	max: 4,
	value: 1,
	step: 1,
	slide: function( event, ui ) {
		$( "#crime" ).val(crimesteps[ui.value]);
	}
	});
	
		$("#crime").val(crimesteps[$("#crime-range").slider("value")]);
		
	
	$("#pricebutton").click(function() {
		var pricevalues = $( ".price" ).slider( "option", "values" );
		var crimevalues = $( ".crimerate" ).slider( "value" );	
		$(".form").hide();
		$(".report").show();
		console.log(pricevalues);
	    console.log(crimevalues);
	});	
});
 
