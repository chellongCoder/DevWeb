<<<<<<< HEAD
/* Armenian(UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['hy'] = {
	closeText: 'Փակել',
	prevText: '&#x3C;Նախ.',
	nextText: 'Հաջ.&#x3E;',
	currentText: 'Այսօր',
	monthNames: ['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս',
	'Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'],
	monthNamesShort: ['Հունվ','Փետր','Մարտ','Ապր','Մայիս','Հունիս',
	'Հուլ','Օգս','Սեպ','Հոկ','Նոյ','Դեկ'],
	dayNames: ['կիրակի','եկուշաբթի','երեքշաբթի','չորեքշաբթի','հինգշաբթի','ուրբաթ','շաբաթ'],
	dayNamesShort: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
	dayNamesMin: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
	weekHeader: 'ՇԲՏ',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hy']);

return datepicker.regional['hy'];

}));
=======
/* Armenian(UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['hy'] = {
	closeText: 'Փակել',
	prevText: '&#x3C;Նախ.',
	nextText: 'Հաջ.&#x3E;',
	currentText: 'Այսօր',
	monthNames: ['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս',
	'Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'],
	monthNamesShort: ['Հունվ','Փետր','Մարտ','Ապր','Մայիս','Հունիս',
	'Հուլ','Օգս','Սեպ','Հոկ','Նոյ','Դեկ'],
	dayNames: ['կիրակի','եկուշաբթի','երեքշաբթի','չորեքշաբթի','հինգշաբթի','ուրբաթ','շաբաթ'],
	dayNamesShort: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
	dayNamesMin: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
	weekHeader: 'ՇԲՏ',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['hy']);

return datepicker.regional['hy'];

}));
>>>>>>> dc6f5e4785075211e9a8d0f8d80bd5a4d0d7383c
