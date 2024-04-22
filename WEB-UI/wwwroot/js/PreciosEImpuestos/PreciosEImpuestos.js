var Especialidad_arr = new Array("Medicina general", "Cardiología", "Oftamología", "Neumología", "Otorrinolaringolía", "Gastroenteorología", "Laboratorio químico", "Ginecología", "Oncología", "Radiología");

var PrecioConsulta_arr = new Array();
PrecioConsulta_arr[0] = "";
PrecioConsulta_arr[1] = "50000";
PrecioConsulta_arr[2] = "70000";
PrecioConsulta_arr[3] = "60000";
PrecioConsulta_arr[4] = "65000";
PrecioConsulta_arr[5] = "75000";
PrecioConsulta_arr[6] = "68000";
PrecioConsulta_arr[7] = "55000";
PrecioConsulta_arr[8] = "72000";
PrecioConsulta_arr[9] = "80000";
PrecioConsulta_arr[10] = "68000";

var ImpuestoServicio_arr = [];
ImpuestoServicio_arr["50000"] = "0.1";
ImpuestoServicio_arr["70000"] = "0.12";
ImpuestoServicio_arr["60000"] = "0.08";
ImpuestoServicio_arr["65000"] = "0.09";
ImpuestoServicio_arr["75000"] = "0.11";
ImpuestoServicio_arr["68000"] = "0.1";
ImpuestoServicio_arr["55000"] = "0.07 ";
ImpuestoServicio_arr["72000"] = "0.1 ";
ImpuestoServicio_arr["80000"] = "0.12";
ImpuestoServicio_arr["68000"] = "0.09";


function print_especialidad(especialidad_id) {
	var option_str = document.getElementById(especialidad_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Selecione la Especialidad', '');
	option_str.selectedIndex = 0;
	for (var i = 0; i < Especialidad_arr.length; i++) {
		option_str.options[option_str.length] = new Option(Especialidad_arr[i], Especialidad_arr[i]);
	}
}

function print_Precio(precio_id, precio_index) {
	var option_str = document.getElementById(precio_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Seleccione el precio de la consulta', '');
	option_str.selectedIndex = 0;

	var precios_especialidad = PrecioConsulta_arr[precio_index].split("|");
	for (var i = 0; i < precios_especialidad.length; i++) {
		option_str.options[option_str.length] = new Option(precios_especialidad[i], precios_especialidad[i]);
	}
}

function print_impuesto(impuesto_id, impuesto_index) {
	var option_str = document.getElementById(impuesto_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Seleccione el impuesto del servicio', '');
	option_str.selectedIndex = 0;

	var impuesto_servicio = ImpuestoServicio_arr[impuesto_index].split("|");
	for (var i = 0; i < impuesto_servicio.length; i++) {
		option_str.options[option_str.length] = new Option(impuesto_servicio[i], impuesto_servicio[i]);
	}
}
