$(document).ready(function(){
    var totalBeli = 0
    var gr = 0


	$("#ok").click(function(){
		var n = $("#n").val();
			for ( var i = 1; i <= n; i++) {
				$("#input").append("<br>Pembelian ke-"+i+"<br>");
				$("#input").append(" Nominal Beli (IDR) <input type='text' id='beli"+i+"'><br>");
				$("#input").append(" Harga Beli (IDR)<input type='text' id='jual"+i+"'><br>");
			}

			$("#input").append("Harga Jual <input type='text' id='jual'><br>");
			$("#input").append("<button id='hitung'>HITUNG</button>");

		$("#hitung").click(function() {
			for (var i = 1; i <= n; i++) {
				var beli = Number($("#beli"+i).val());
				var hargaBeli = Number($("#jual"+i).val());
				totalBeli += beli;
				gr += beli / hargaBeli;
				grfix = gr.toFixed(2)
			}

			hargaJual = Number($("#jual").val());
			saldo = gr * hargaJual
			untung = saldo - totalBeli
			persen = (saldo * 100) / totalBeli - 100
			saldofix = saldo.toFixed(2)
			untungfix = untung.toFixed(2)
			persenfix = persen.toFixed(2)

			$("#totalBeli").append(totalBeli);
			$("#aset").append(grfix);
			$("#saldo").append(saldofix);
			$("#untung").append(untungfix);
			$("#persen").append(persenfix+"%");
		})	
  });

    $("#delete").click(function() {
			$("#input").empty();
			$("#totalBeli").empty();
			$("#aset").empty();
			$("#saldo").empty();
			$("#untung").empty();
			$("#persen").empty();
	    		totalBeli = 0;
			gr = 0
    })
});
