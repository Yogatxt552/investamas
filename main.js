$(document).ready(function(){
    var totalBeli = 0
    var gr = 0
	$("#m").click(function(){
	  	
		var n = $("#n").val();
		
	    for ( var i = 1; i <= n; i++) {
	    	$("#input").append(" Nominal Beli (IDR) <input type='text' id='beli"+i+"'><br>");
	    	$("#input").append(" Harga Beli (IDR)<input type='text' id='jual"+i+"'><br>");
	    }

	    $("#input").append("Harga Jual <input type='text' id='jual'><br>");
	    $("#input").append("<button id='hitung'>HITUNG</button>");
	
    });

});