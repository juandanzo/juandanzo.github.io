(function() {
	Date.prototype.getWeekNumber = function () {
		var d = new Date(+this);  //Creamos un nuevo Date con la fecha de "this".
		d.setHours(0, 0, 0, 0);   //Nos aseguramos de limpiar la hora.
		d.setDate(d.getDate() + 4 - (d.getDay() || 7)); // Recorremos los dÃ­as para asegurarnos de estar "dentro de la semana"
		//Finalmente, calculamos redondeando y ajustando por la naturaleza de los nÃºmeros en JS:
		return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
	};
	var f=new Date();
	var semanaBase = new Date(f.getFullYear(), f.getMonth(), f.getDate()).getWeekNumber(); 
	//console.info("SemanaBase: "+semanaBase);
	
	var arrCumples = [
					["Gise","24/1"],
					["Alan","9/2"],
					["Mari","11/3"],
					["Franco","13/3"],
					["Juan","23/3"],
					["Romi","9/4"],
					["Jesi","18/5"],
					["Zeke","9/6"],
					["Cami","27/6"],
					["Pri","8/7"],
					["Ili","10/7"],
					["Lucho","26/7"],
					["Carlos","6/8"],
					["Mai","16/8"],
					["Fede","25/8"],
					["Eliana","25/8"],
					["Maru","16/9"],
					["Ruth","28/10"],
					["Agus","18/11"],
					["Jorge","23/11"],
					["Sofi","30/11"]
					];
	
	var cumple = f.getDate() + "/" + (f.getMonth()+1);
	var texto = "";
	var count = 0;
	for(i=0;i<arrCumples.length;i++){		
		var dividir = arrCumples[i][1].split("/");
		//console.info("Dia: "+dividir[0]+"   Mes:"+dividir[1]);
		var semanaCumples = new Date(f.getFullYear(), dividir[1]-1, dividir[0]).getWeekNumber();
				
		if (semanaCumples === semanaBase) {
			if (arrCumples[i][1] === String(cumple)) {
				console.info("Feliz CumpleaÃ±os: "+arrCumples[i][0]);
				$("#modalTexto").html(arrCumples[i][0]+": "+arrCumples[i][1]);
				count ++;
			}else{
				//var padre = document.getElementById("#modalTexto2");
				
				//padre.appendChild((arrCumples[i][0]+": "+arrCumples[i][1]));
				
				var texto = texto +"<br/>"+(arrCumples[i][0]+": "+arrCumples[i][1]);
				
				$("#modalTexto2").html(texto);
				//$("#modalInicio").modal("show");
				count ++;
			};
		};
		if (count > 0) {
				$("#modalInicio").modal("show");
		};
		//console.info("SemanaBase: "+semanaCumples);
		
	};
})();
     
