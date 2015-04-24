( function ( $ ) {
	'use strict';

	var teModular = {
		id: 'te-modular',
		name: 'మాడ్యులర్',
		description: 'Modular keyboard layout for Telugu',
		date: '2014-12-31',
		author: 'Praveen Illa',
		license: 'GPLv3',
		version: '1.0',
		patterns: [

			// numbers

			[ '\\`', 'ే' ],
			[ '1', '1' ],
			[ '2', '2' ],
			[ '3', '3' ],
			[ '4', '4' ],
			[ '5', '5' ],
			[ '6', '6' ],
			[ '7', '7' ],
			[ '8', '8' ],
			[ '9', '9' ],
			[ '0', '0' ],
			[ '\\-', '-' ],
			[ '\\=', '=' ],

			// shift num

			[ '\\~', 'ఏ' ],
			[ '\\!', '!' ],
			[ '\\@', '\'' ],
			[ '\\#', '\'' ],
			[ '\\$', 'ఊ' ],
			[ '\\%', '%' ],
			[ '\\^', 'క్ష' ],
			[ '\\&', 'ౄ' ],
			[ '\\*', '్ర' ],
			[ '\\(', '(' ],
			[ '\\)', ')' ],
			[ '\\_', 'ఙ' ],
			[ '\\+', '+' ],

			//querty order
			// 1st row

			[ 'Q', 'అ' ],
			[ 'q', 'ష' ],
			[ 'W', 'ఘ' ],
			[ 'w', 'గ' ],
			[ 'E', 'ఖ' ],
			[ 'e', 'క' ],
			[ 'R', 'ఠ' ],
			[ 'r', 'ట' ],
			[ 'T', 'ఢ' ],
			[ 't', 'డ' ],
			[ 'Y', 'ఫ' ],
			[ 'y', 'ప' ],
			[ 'U', 'బ' ],
			[ 'u', 'మ' ],
			[ 'I', 'ళ' ],
			[ 'i', 'ల' ],
			[ 'O', '‌శ' ],
			[ 'o', 'వ' ],
			[ 'P', 'ఒ' ],
			[ 'p', 'ొ' ],
			[ '\\{', 'ఓ' ],
			[ '\\[', 'ో' ],
			[ '\\}', 'ఞ' ],
			[ '\\]', 'ూ' ],
			[ '\\|', 'శ్రీ' ],
			[ '\\\\', '్ర' ],

			//2nd row
			[ 'A', 'ఆ' ],
			[ 'a', 'ా' ],
			[ 'S', 'ఇ' ],
			[ 's', 'ి' ],
			[ 'D', '్' ],
			[ 'd', '్' ],
			[ 'F', 'ణ' ],
			[ 'f', 'య' ],
			[ 'G', 'థ' ],
			[ 'g', 'త' ],
			[ 'H', 'ధ' ],
			[ 'h', 'ద' ],
			[ 'J', 'భ' ],
			[ 'j', 'న' ],
			[ 'K', 'ఱ' ],
			[ 'k', 'ర' ],
			[ 'L', 'హ' ],
			[ 'l', 'స' ],
			[ ':', ':' ],
			[ ';', ';' ],
			[ '"', 'ఔ' ],
			[ '\\\'', 'ౌ' ],

			// 3rd row
			[ 'Z', 'ఋ' ],
			[ 'z', 'ృ' ],
			[ 'X', 'ఝ' ],
			[ 'x', 'జ' ],
			[ 'C', 'ఛ' ],
			[ 'c', 'చ' ],
			[ 'V', 'ఈ' ],
			[ 'v', 'ీ' ],
			[ 'B', 'ఎ' ],
			[ 'b', 'ె' ],
			[ 'N', 'ఉ' ],
			[ 'n', 'ు' ],
			[ 'M', 'ఐ' ],
			[ 'm', 'ై' ],
			[ '\\<', 'ం' ],
			[ ',', ',' ],
			[ '\\>', 'ః' ],
			[ '\\.', '.' ],
			[ '\\?', '?' ],
			[ '\\/', '/' ]


		],
		patterns_x: [
			// Some characters originally not there in original layout but for accessibility kept these based on inscript.
			[ '\\!', '౹' ],
			[ '\\@', '౼' ],
			[ '\\#', '౺' ],
			[ '\\$', '౽' ],
			[ '4', '₹' ],
			[ '\\%', '౻' ],
			[ '\\^', '౾' ],
			[ '1', '\u200d' ],
			[ '2', '\u200c' ],
			[ '0', '౸' ],
			[ '\\-', '౿' ],
			[ 'R', 'ౣ' ],
			[ 'r', 'ౡ' ],
			[ 'p', 'ౙ' ],
			[ 'F', 'ఌ' ],
			[ 'f', 'ౢ' ],
			[ ';', 'ౘ' ],

			[ '\\>', 'ఽ' ],
			[ '\\.', '॥' ],

			[ '-', 'ఁ' ],
			[ '=', 'ః' ],

			[ 'q', 'ష్ట్ర' ],
			[ 'w', '÷' ],
			[ 'e', 'క్ష్మ' ],
			[ 'y', '్పు' ],
			[ 'i', 'క్ష్మి' ],
			[ '\\[', 'క్ష్మీ' ],
			[ '\\]', '×' ],

			[ 'g', 'ఁ' ],
			[ 'k', '్ర' ],
			[ 'l', 'స్త్ర' ],
			[ ';', '్పు' ],

			[ 'z', 'ౠ' ],
			[ 'c', 'ఁ' ],
			[ 'v', '|' ],
			[ 'n', '-' ],
			[ '.', '÷' ],
			[ '/', '÷' ]

		]
	};

	$.ime.register( teModular );
}( jQuery ) );