
var provincia_arr = new Array("San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón");

var canton_arr = new Array();
canton_arr[0] = "";
canton_arr[1] = "San José|Escazú|Desamparados|Puriscal|Tarrazú|Aserrí|Mora|Goicoechea|Santa Ana|Alajuelita|Vásquez de Coronado|Acosta|Tibas|Moravia|Montes de Oca|Turrubares|Dota|Curridabat|Perez Zeledón|León Cortés";
canton_arr[2] = "Alajuela|San Ramón|Grecia|San Mateo|Atenas|Naranjo|Palmares|Poás|Orotina|San Carlos|Zarcero|Valverde Vega|Upala|Los Chiles|Guatuso";
canton_arr[3] = "Cartago|Paraíso|La Union|Jímenez|Turrialba|Alvarado|Oreamuno|El Guarco";
canton_arr[4] = "Heredia|Barva|Santo Domingo|Santa Bárbara|San Rafael|San Isidro|Belén|Flore|San Pablo|Sarapiquí";
canton_arr[5] = "Liberia|Nicoya|Santa Cruz|Bagaces|Carrillo|Cañas|Abangares|Tilarán|Nandayure|La Cruz|Hojancha";
canton_arr[6] = "Puntarenas|Esparza|Buenos Aires|Montes de Oro|Osa|Aguirre|Golfito|Coto Brus|Parrita|Corredores|Garabito";
canton_arr[7] = "Limón|Pococí|Siquirres|Talamanca|Matina|Guacimo";

var distrito_arr = [];
distrito_arr["San José"] = "Carmen|Merced|Hospital|Catedral|Zapote|San Francisco de Dos Ríos|Uruca|Mata Redonda|Pavas|Hatillo|San Sebastián";
distrito_arr["Escazú"] = "Escazu"; 
distrito_arr["Desamparados"] = "Desamparados|San Miguel|San Juan de Dios|San Rafael Arriba|San Antonio|Frailes|Patarra|San Cristobal|Rosario|Damas|San Rafael Abajo|Gravilias|Los Guido";
distrito_arr["Puriscal"] = "Santiago|Mercedes|Sur Barbacoas|Grifo Alto|San Rafael|Candelarita|Desamparaditos|San Antonio|Chires";
distrito_arr["Tarrazú"] = "Tarrazú"; 
distrito_arr["Aserrí"] = "Aserrí|Tarbaca|Vuelta de Jorco|San Gabriel|Legua|Monterrey|Salitrillos";
distrito_arr["Mora"] = "Colón|Guayabo|Tabarcia|Piedras Negras|Picagres|Jaris|Quitirrisí";
distrito_arr["Goicoechea"] = "Guadalupe|San Francisco|Calle Blancos|Mata de Plátano|Ipis|Rancho Redondo|Purral";
distrito_arr["Santa Ana"] = "Santa Ana|Salitral|Pozos|Uruca|Piedades|Brasil";
distrito_arr["Alajuelita"] = "Alajuelita|San Josecito|San Antonio|Concepción|San Felipe";
distrito_arr["Vázquez de Coronado"] = "San Isidro|San Rafael|Dulce Nombre de Jesús|Patalillo|Cascajal"
distrito_arr["Acosta"] = "San Ignacio|Guaitil|Palmichal|Cangrejal|Sabanillas";
distrito_arr["Tibás"] = "San Juan|Cinco Esquinas|Anselmo Llorente|León XIII|Colima";
distrito_arr["Moravia"] = "San Vicente|San Jerónimo|La Trinidad";
distrito_arr["Montes de Oca"] = "San Pedro|Sabanilla|Mercedes|San Rafael";
distrito_arr["Turrubares"] = "San Pablo|San Pedro|San Juan de Mata|San Luis|Carara";
distrito_arr["Dota"] = "Santa María|Jardín|Copey";
distrito_arr["Curridabat"] = "Curridabat|Granadilla|Sánchez|Tirrases";
distrito_arr["Pérez Zeledón"] = "San Isidro de El General|El General|Daniel Flores|Rivas|San Pedro|Platanares|Pejibaye|Cajón|Barú|Río Nuevo|Paramo|La Amistad";
distrito_arr["León Cortés Castro"] = "San Pablo|San Andrés|Llano Bonito|San Isidro|Santa Cruz|San Antonio";

distrito_arr["Alajuela"] = "Alajuela|San José|Carrizal|San Antonio|Guácima|San Isidro|Sabanilla|San Rafael|Río Segundo|Desamparados|Turrucares|Tambor|Garita|Sarapiquí";
distrito_arr["San Ramón"] = "San Ramón|Santiago|San Juan|Piedades Norte|Piedades Sur|San Rafael|San Isidro|Ángeles|Alfaro|Volio|Concepción|Zapotal|Peñas Blancas|San Lorenzo";
distrito_arr["Grecia"] = "Grecia|San Isidro|San José|San Roque|Tacares|Puente de Piedra|Bolivar";
distrito_arr["San Mateo"] = "San Mateo|Desmonte|Jesús María|Labrador";
distrito_arr["Atenas"] = "Atenas|Jesús|Mercedes|San Isidro|Concepción|San José|Santa Eulalia|Escobal";
distrito_arr["Naranjo"] = "Naranjo|San Miguel|San José|Cirrí Sur|San Jerónimo|San Juan|El Rosario|Palmitos";
distrito_arr["Palmares"] = "Palmares|Zaragoza|Buenos Aires|Santiago|Candelaria|Esquipulas|La Granja";
distrito_arr["Poás"] = "San Pedro|San Juan|San Rafael|Carrillos|Sabana Redonda";
distrito_arr["Orotina"] = "Orotina|El Mastate|Hacienda Vieja|Coyolar|La Ceiba";
distrito_arr["San Carlos"] = "Quesada|Florencia|Buenavista|Aguas Zarcas|Venecia|Pital|La Fortuna|La Tigra|La Palmera|Venado|Cutris|Monterrey|Pocosol";
distrito_arr["Zarcero"] = "Zarcero|Laguna|Tapesco|Guadalupe|Palmira|Zapote|Brisas";
distrito_arr["Valverde Vega"] = "Sarchí Norte|Sarchí Sur|Toro Amarillo|San Pedro|Rodríguez";
distrito_arr["Upala"] = "Upala|Aguas Claras|San José O Pizote|Bijagua|Delicias|Dos Ríos|Yolillal|Canalete";
distrito_arr["Los Chiles"] = "Los Chiles|Caño Negro|El Amparo|San Jorge";
distrito_arr["Guatuso"] = "San Rafael|Buenavista|Cote|Katira";

distrito_arr["Cartago"] = "Oriental|Occidental|Carmen|San Nicolás|Aguacaliente o San Francisco|Guadalupe o Arenilla|Corralillo|Tierra Blanca|Dulce Nombre|Llano Grande|Quebradilla";
distrito_arr["Paraíso"] = "Paraíso|Santiago|Orosi|Cachí|Llanos de Santa Lucía|Birrisito";
distrito_arr["La Union"] = "Tres Ríos|San Diego|San Juan|San Rafael|Concepción|Dulce Nombre|San Ramón|Río Azul";
distrito_arr["Jiménez"] = "Juan Viñas|Tucurrique|Pejibaye";
distrito_arr["Turrialba"] = "Turrialba|La Suiza|Peralta|Santa Cruz|Santa Teresita|Pavones|Tuis|Tayutic|Santa Rosa|Tres Equis|La Isabel|Chirripó";
distrito_arr["Alvarado"] = "Pacayas|Cervantes|Capellades";
distrito_arr["Oreamuno"] = "San Rafael|Cot|Potrero Cerrado|Cipreses|Santa Rosa";
distrito_arr["El Guarco"] = "El Tejar|San Isidro|Tobosi|Patio de Agua";

distrito_arr["Heredia"] = "Heredia|Mercedes|San Francisco|Ulloa|Varablanca";
distrito_arr["Barva"] = "Barva|San Pedro|San Pablo|San Roque|Santa Lucía|San José de la Montaña";
distrito_arr["Santo Domingo"] = "Santo Domingo|San Vicente|San Miguel|Paracito|Santo Tomás|Santa Rosa|Tures|Pará";
distrito_arr["Santa Bárbara"] = "Santa Bárbara|San Pedro|San Juan|Jesús|Santo Domingo|Purabá";
distrito_arr["San Rafael"] = "San Rafael|San Josecito|Santiago|Ángeles|Concepción";
distrito_arr["San Isidro"] = "San Isidro|San José|Concepción|San Francisco";
distrito_arr["Belén"] = "San Antonio|La Ribera|La Asunción";
distrito_arr["Flores"] = "San Joaquín|Barrantes|Llorente";
distrito_arr["San Pablo"] = "San Pablo|Rincón de Sabanilla";
distrito_arr["Sarapiquí"] = "Puerto Viejo|La Virgen|Las Horquetas|Llanuras del Gaspar|Cureña";

distrito_arr["Liberia"] = "Liberia|Cañas Dulces|Mayorga|Nacascolo|Curubandé";
distrito_arr["Nicoya"] = "Nicoya|Mansión|San Antonio|Quebrada Honda|Sámara|Nosara|Belén de Nosarita";
distrito_arr["Santa Cruz"] = "Santa Cruz|Bolsón|Veintisiete de Abril|Tempate|Cartagena|Cuajiniquil|Diriá|Cabo Velas|Tamarindo";
distrito_arr["Bagaces"] = "Bagaces|La Fortuna|Mogote|Río Naranjo";
distrito_arr["Carrillo"] = "Filadelfia|Palmira|Sardinal|Belén";
distrito_arr["Cañas"] = "Cañas|Palmira|San Miguel|Bebedero|Porozal";
distrito_arr["Abangares"] = "Las Juntas|Sierra|San Juan|Colorado";
distrito_arr["Tilarán"] = "Tilarán|Quebrada Grande|Tronadora|Santa Rosa|Líbano|Tierras Morenas|Arenal|Cabeceras";
distrito_arr["Nandayure"] = "Carmona|Santa Rita|Zapotal|San Pablo|Porvenir|Bejuco";
distrito_arr["La Cruz"] = "La Cruz|Santa Cecilia|La Garita|Santa Elena";
distrito_arr["Hojancha"] = "Hojancha|Monte Romo|Puerto Carrillo|Huacas|Matambú";

distrito_arr["Puntarenas"] = "Puntarenas|Pitahaya|Chomes|Lepanto|Paquera|Manzanillo|Guacimal|Barranca|Isla del Coco|Cóbano|Chacarita|Chira|Acapulco|El Roble|Arancibia";
distrito_arr["Esparza"] = "Espíritu Santo|San Juan Grande|Macacona|San Rafael|San Jerónimo|Caldera";
distrito_arr["Buenos Aires"] = "Buenos Aires|Volcán|Potrero Grande|Boruca|Pilas|Colinas|Chánguena|Biolley|Brunka";
distrito_arr["Montes de Oro"] = "Miramar|La Unión|San Isidro";
distrito_arr["Osa"] = "Puerto Cortés|Palmar|Sierpe|Bahía Ballena|Piedras Blancas|Bahía Drake";
distrito_arr["Aguirre"] = "Quepos|Savegre|Naranjito";
distrito_arr["Golfito"] = "Golfito|Puerto Jiménez|Guaycará|Pavón";
distrito_arr["Coto Brus"] = "San Vito|Sabalito|Aguabuena|Limoncito|Pittier|Gutiérrez Braun";
distrito_arr["Parrita"] = "Parrita";
distrito_arr["Corredores"] = "Corredor|La Cuesta|Canoas|Laurel";
distrito_arr["Garabito"] = "Jacó|Tárcoles|Lagunillas";

distrito_arr["Limón"] = "Limón|Valle La Estrella|Río Blanco|Matama";
distrito_arr["Pococí"] = "Guápiles|Jiménez|Rita|Roxana|Cariari|Colorado|La Colonia";
distrito_arr["Siquirres"] = "Siquirres|Pacuarito|Florida|Germania|El Cairo|Alegría|Reventazón";
distrito_arr["Talamanca"] = "Bratsi|Sixaola|Cahuita|Telire";
distrito_arr["Matina"] = "Matina|Batán|Carrandí";
distrito_arr["Guácimo"] = "Guácimo|Mercedes|Pocora";

function print_provincia(provincia_id) {
	var option_str = document.getElementById(provincia_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Selecione la Provincia', '');
	option_str.selectedIndex = 0;
	for (var i = 0; i < provincia_arr.length; i++) {
		option_str.options[option_str.length] = new Option(provincia_arr[i], provincia_arr[i]);
	}
}

function print_canton(canton_id, canton_index) {
	var option_str = document.getElementById(canton_id);
	option_str.length = 0;	
	option_str.options[0] = new Option('Seleccione el Canton', '');
	option_str.selectedIndex = 0;
	var cantones_arr = canton_arr[canton_index].split("|");
	for (var i = 0; i < cantones_arr.length; i++) {
		option_str.options[option_str.length] = new Option(cantones_arr[i], cantones_arr[i]);
	}
}
function print_distrito(distrito_id, distrito_index) {
	var option_str = document.getElementById(distrito_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Seleccione el Distrito', '');
	option_str.selectedIndex = 0;
	var distritos_arr = distrito_arr[distrito_index].split("|");
	for (var i = 0; i < distritos_arr.length; i++) {
		option_str.options[option_str.length] = new Option(distritos_arr[i], distritos_arr[i]);
	}
}
