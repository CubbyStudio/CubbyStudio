/*

	how to add a product:

	0 - not available
	1 - not available (deprecated - this is all handled with code filters now)
	2 - available
*/




const iomic_labels = {
	firm: ['extra soft', 'soft', 'medium', 'firm'],
	tack: ['more tacky', 'in between', 'less tacky'],
	texture: ['smooth', 'hybrid', 'rough'],
}


const iomic_products = {
	"iX Touch 2.0":{
		sizes: ['mm', 'mml'], // follows ix2a
		firmness: [0,1,0,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1655511445757-JODL6I9TGL37ZXWPF22W/iXTOUCH+2.0_grey.jpg?format=750w',
		// https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645658589023-JN7M6JA15F92FHT8RH4B/Sticky_Ladies_Junior_feature_bleed_2021.png',
		// image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645658014842-LH644PRG2H9F5AZDEVAT/Sticky_Ladies_Junior_feature_2021.jpg?format=750w',
		url: 'https://www.iomicusa.com/fullswing/ix-touch',
		recommendations: [
			'iXSA 2.0',
			'Sticky 2.3',
			'Moebius Black 1.8',
			'Sticky 1.8',
		]
	},
	"Sticky Lady's ＆ Junior":{
		sizes: ['j', 'ls'],
		firmness: [0,0,0,0],
		tackiness: [0,0,0],
		texture: [0,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645658589023-JN7M6JA15F92FHT8RH4B/Sticky_Ladies_Junior_feature_bleed_2021.png',
		// image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645658014842-LH644PRG2H9F5AZDEVAT/Sticky_Ladies_Junior_feature_2021.jpg?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-lady-junior',
		recommendations: []
	},
	"Sticky 1.8":{
		sizes: ['lm', 'c', 'ms'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		// image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646428484158-N12RHNPV1MEQVLLM21ZV/Sticky+1.8_feature.png?format=750w',
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646428491059-OPFY9V1TLJ9RYMOCFE8Q/Sticky+1.8_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-18',
		recommendations: [
			'Sticky 1.8 SUPER LIGHT',
			'Sticky Camo 1.8',
		],
	},
	"Sticky 1.8 SUPER LIGHT":{
		sizes: ['lm', 'c', 'ms'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646101503248-M230772PCEXB9ZX8I4FN/Stick_Superlight_feature_bleed.png?format=750w',
		url: 'https://iomicusa.squarespace.com/config/?frameUrl=/fullswing/sticky-18-super-light',
		recommendations: []
	},
	"Sticky Evolution 1.8":{
		sizes: ['lm', 'c', 'ms'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [0,1,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646345263045-IMAQA6YTT23TPRLPDPDO/Sticky+Evolution_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/black-armor-2-sticky-evolution-23-18',
		recommendations: [
			'Sticky 1.8',
			'Moebius Black 1.8',
		]
	},
	"Moebius Black 1.8":{
		sizes: ['lm', 'c', 'ms'],
		firmness: [0,1,0,0],
		tackiness: [0,1,0],
		texture: [0,1,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646083803698-E2VFZFPCX30SX33R6MG9/MOEBIUS+1.8_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/moebiusblack18',
		recommendations: [
			'Sticky 1.8',
			'Sticky Evolution 1.8',
		]
	},
	"Sticky Camo 1.8":{
		sizes: ['lm', 'c', 'ms'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646031751688-1PJQ2QBDFGZ8E411GFM7/StickyCamo_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-camo-23-18',
		recommendations: []
	},
	"iXSA 2.0":{
		sizes: ['mm', 'mml'],
		firmness: [1,0,0,0],
		tackiness: [1,0,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645660116280-0GCTJVX39CJ6XV1VXNG7/IXSA_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/ix-sa-20',
		recommendations: [
			'Moebius Black 1.8',
		]
	},
	"Sticky 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646343849332-BO6NO1WHYK45TLEATPIT/Sticky+2.3_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-23',
		recommendations: [
			'Sticky Black Army 2.3',
			'Sticky Camo 2.3',
		]
	},
	"Sticky Evolution 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [0,1,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646345263045-IMAQA6YTT23TPRLPDPDO/Sticky+Evolution_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-camo-23-18',
		recommendations: [
			'X-GRIP 2.3',
		]
	},
	"X-Evolution 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1],
		tackiness: [0,0,1],
		texture: [0,1,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646086399667-9I4EG0RJ0U7X9PHQNFDL/XEVOLUTION+2.3_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/black-armor-2-x-evolution-23',
		recommendations: [
		]
	},
	"Sticky Black Army 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645827893887-CCIY23ZAB43J6EQL5NMG/Sticky+BLACK+ARMY+2.3_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-black-army23',
		recommendations: []
	},
	"Sticky Camo 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646031751688-1PJQ2QBDFGZ8E411GFM7/StickyCamo_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-camo-23-18',
		recommendations: []
	},
	"iX 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,0,1],
		tackiness: [0,0,1],
		texture: [1,0,1],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645997766684-2I0CQK31U86HRAA0KS49/IX+2.3_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/ix23',
		recommendations: [
			'iXX 2.3',
		]
	},
	"iXX 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,0,1],
		tackiness: [0,0,1],
		texture: [0,0,1],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646023612895-K1IQKKJ7WIB87O36OHTN/IXx2.3_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/ixx23',
		recommendations: [
			'iX 2.3',
		]
	},
	"X-GRIP 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [0,1,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646098205027-OGY3XCQ5DG31OEPDRFBB/X+GRIP++2.3_feature_bleed_SO.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/x-grip23',
		recommendations: [
			'Sticky Evolution 2.3'
		]
	},
	"X-Evolution 2.6":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,1],
		tackiness: [0,0,1],
		texture: [0,1,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646370665473-4CPCBQ1OBJJYAXN33KU4/X+Evolution+2.6_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/x-evolution26',
		recommendations: []
	},
	"MID Evolution":{
		sizes: ['ml', 'mxl'],
		firmness: [0,0,0,1],
		tackiness: [0,1,1],
		texture: [0,1,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646069410505-36LPVRW57QNO97LOAYJ5/MIDEVO_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/mid-evolution',
		recommendations: [
			'Sticky MID',
		],
	},
	"Sticky MID":{
		sizes: ['ml', 'mxl'],
		firmness: [0,0,0,1],
		tackiness: [1,1,0],
		texture: [1,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646367839203-QL0AZQTKR8E07LYF5YYW/Sticky+MID_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-mid',
		recommendations: [
			'MID Evolution',
			'Sticky JUMBO', // this is filtered out on all but MXL size
		]
	},
	"Sticky JUMBO":{
		sizes: ['mxl', 'mxxl'],
		firmness: [0,0,0,0],
		tackiness: [0,0,0],
		texture: [0,0,0],
		image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646367738247-ED93L8FOYLOGK7RQZAL0/Sticky+JUMBO_feature_bleed.png?format=750w',
		url: 'https://www.iomicusa.com/fullswing/sticky-jumbo',
		recommendations: [],
	},
}



// `Iomic's Sticky series now offers its tour proven performance to Ladies and Juniors.`
const iomic_descriptions = {

	"Sticky Lady's ＆ Junior": `Iomic's Sticky series now offers its tour proven performance to Ladies and Juniors.`,

	"Sticky 1.8": `The Sticky 1.8 is designed to be incredibly soft with great tackiness, while minimizing torque. This grip is suitable for all playing styles, from beginners to top ranked tour professionals.`,
// 	`The Sticky Camo is Iomic's one of wide range of multi-colored grips. Iomic's unique production method of molding colors make these grips last long, and pop! 

// `,

	"Sticky 1.8 SUPER LIGHT": `The lightest grip in the Sticky series are BACK in Stock for North America market.  

This grip has same softness and thickness with super light weight, 35 grams!!`,


	"Sticky Evolution 1.8": `Now NEW Look for our first hybrid style grip,

the Black Armor 2 Sticky Evolution 1.8/2.3 is a combination of our "cord" X-Evolution pattern on the upper half and our softer Sticky pattern on the lower.`,


	"Moebius Black 1.8": `Featuring our LTC (Low Torque Control) plug at the butt end, the Moebius Black promotes less torque, more accurate shots and tighter dispersion with more soft and cool design. `,


	"Sticky Camo 1.8": `The Sticky Camo is Iomic's one of wide range of multi-colored grips. Iomic's unique production method of molding colors make these grips last long, and pop! `,


	"iXSA 2.0": `The iX SA grip contains a shock-absorbing material that is unprecedented in the golf grip industry, and was developed to reduce the impact from the club within the grip to help you make more accurate shots.  It eases the impact on your hands, even during your missed hits, which eases the strain on your body.

In addition, a completely new surface design and a hardness of 30% softer than the other iX series.`,


	"Sticky 2.3": `The Sticky 2.3 is suitable for all playing styles, from beginners to top ranked tour professionals. We improved the comfort and durability with proven feedback from the world's best. 

The 2.3 is standard size.

`,


	"Sticky Evolution 2.3": `The only "full cord" in the Iomic lineup, the X-Evolution is now available in the Black Armor 2 with NEW Style Color combinations. `,


	"X-Evolution 2.3": `The only "full cord" in the Iomic lineup, the X-Evolution is now available in the Black Armor 2 with NEW Style Color combinations. `,
	

	"Sticky Black Army 2.3": `The Sticky Black Army 2.3 is the latest addition to Iomic's wide range of multi-colored grips. Iomic's unique production method of molding colors make these grips last long, and pop! 

`,


	"Sticky Camo 2.3": `The Sticky Camo is Iomic's one of wide range of multi-colored grips. Iomic's unique production method of molding colors make these grips last long, and pop! `,



	"iX 2.3": `Using our NEW pattern of crosses and pebbled grain textures, this grip is our version of a cord grip in more durable and comfortable on hands.  

Our material's Low Torque properties and hybrid cord design will promote more accurate shot dispersion.  The Low Torque Control plug in the end cap of the grip will greatly lower grip torque and increase accuracy.

`,


	"iXX 2.3": `The iXx 2.3 is a combination of the best: everlasting tackiness meets uncompromising texture, resulting in the Lowest Torque Grip we have to offer. 

Featuring an upper half of two distinctively pebbled X's for unmatched traction when you need it most. 

This is the most "cord" feeling grip we have ever created!`,


	"X-GRIP 2.3": `The X-Grip is Iomic's original grip. This standard size grip has a unique pattern of crosses and diamonds which will help you grip the club with the perfect amount of pressure.`,


	"X-Evolution 2.6": `The X-Evolution is the next generation of the X-Grip featuring a slightly firmer and textured pattern. 

The deeper X pattern provides remarkable traction similar to that of a cord grip, while still feeling tacky. `,


	"MID Evolution": `The MID Evolution is our Midsize grip in the MID SIZE series. 

It's Eco-Friendly design consists of two layers of materials: 

a firmer, inner core made from recycled Iomic material that will stabilize the grip.  

The outer layer of  the MID Evolution is a combination of our  X-Evolution and Sticky pattern with Iomax materials that gives you soft and smooth feel of the grip with maxinum control.`,


	"Sticky MID": `The Sticky Mid is our Midsize grip in the Sticky series. 

It's Eco-Friendly design consists of two layers of materials: a firmer, inner core made from recycled Iomic grips, and a softer surface layer of new Iomax material. 

Due to high demand, we just added our favorite colors, Platinum Grey and White in Sticky Mid Family.  

`,

	"Sticky JUMBO": `The Sticky JUMBO is the largest size available in our Sticky series. 

It's Eco-Friendly design consists of two layers of materials: a firmer, inner core made from recycled Iomic grips, and a softer surface layer of new Iomax material.`,

}






const iomic_assets = {
	hand: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e963bf99a183d7cdf2853/1647220283444/hand.jpg',
	startover: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e92b3b5e9bb484a46d127/1647219379718/startover.png',
	buy_now: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e92c4c2eed331b3a56ff3/1647219396625/buynow.png',
	firm_1: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e965aa9355e77af711a67/1647220314926/hand_extrasoft.png',
	firm_2: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e9665144cda6e4197c285/1647220325394/hand_soft.png',
	firm_3: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e966215b8c2139f1c1e78/1647220322491/hand_medium.png',
	// firm_4: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e965e5b8af274450e435f/1647220318945/hand_firm.png',
	firm_4: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622ea4f20696395c7ca44c2f/1647224050634/hand_firm.png',
	tack_1: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e968edef6e30c7a8a8f90/1647220366962/tack_most.png',
	tack_2: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e96885b8af274450e460f/1647220360758/tack_in-between.png',
	tack_3: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e968c43ca9a3c3ac7db6f/1647220364094/tack_least.png',
	surface_1: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e9680f6ecfc26fccc3d86/1647220352413/grip_smooth.png',
	surface_2: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e9677b5e9bb484a473764/1647220343947/grip_hybrid.png',
	surface_3: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e967b15e88f37a27bf39d/1647220347125/grip_rough.png',
}




const iomic_sizes = {
	j: 'jnr',
	ls: 'ladies S',
	lm: 'ladies M',
	c: 'cadet',
	ms: 'mens S',
	mm: 'mens M',
	mml: 'mens M/L',
	ml: 'mens L',
	mxl: 'mens XL',
	mxxl: 'mens XXL',
}

const iomic_get_class = size => {
	const sizes = {
		jnr: ['j', 'ls'],
		undersize: ['lm', 'c', 'ms'],
		standard: ['mm', 'mml'],
		midsize: ['ml', 'mxl'],
		jumbo: ['mxxl'],
	}
	for( const type in sizes ){
		if( sizes[ type ].includes( size ) ){
			return type
		}
	}
	return false
}







const iomic_is_allowed = iomic => {
	/* 
		test if size class + current settings are enabled routes 
	*/

	const { firmness, tackiness, surface } = iomic.state

	switch( iomic.state.class ){

		case 'undersize':
			if( firmness === 'firm' || firmness === 'extra soft' ){
				return false
			}
			if( tackiness === 'more tacky' || tackiness === 'less tacky' ){
				return false
			}
			if( surface === 'rough' ){
				return false
			}
			if( surface === 'smooth' && firmness === 'medium'){
				return false
			}
			return true

		case 'midsize':
			if( firmness === 'soft' || firmness === 'extra soft' || firmness === 'medium' ){
				return false
			}else{
				if( tackiness === 'less tacky' ){
					if( surface !== 'hybrid' ) return false
				}else if( tackiness === 'in between' ){
					if( surface !== 'smooth' ) return false
				}
			}
			if( tackiness === 'more tacky' ){
				return false
			}
			if( surface === 'rough' ){
				return false
			}
			return true

		default:
			return true
	}

}



const push_keys = ( key_log, skip_valid ) => {

	const key = IOMIC.get_choice_key()
	IOMIC.state.active_step = key.split('_').length - 1

	if( Object.keys( IOMIC.get_filtered() ).length ){
		if( !skip_valid ){
			key_log.valid.push( key ) // ( only push last-stage keys as valid )
		}
		if( key === 'c_soft_in between_smooth'){
			console.log('yea its checkkinnnn', IOMIC.get_filtered() )
		}
		return true
	}else{
		/*
			before setting an invalid key
			check that state.class + state.size is even allowed
			if not, it will greyed out and thus can be skipped
		*/
		if( iomic_is_allowed( IOMIC ) ){
			key_log.invalid.push( key )
		}else{
			key_log.blocked.push( key )
		}
	}

	return false

}








/*

const shortcut_sizes = ['j', 'ls', 'mxxl']

const iomic_test_all = () => {

	console.log('not currently accurate')
	return

	const key_log = window.key_log = {
		valid: [],
		invalid: [],
		blocked: [],
	}

	let delay = 0
	for( const opt of document.querySelectorAll('.io-content-size option') ){

		if( !opt.value ) continue

		setTimeout(() => {

			const val = opt.value

			console.log('testing size: ', val )

			// IOMIC.restart()
			IOMIC.state = Object.assign({}, IOMIC.pure_state )

			IOMIC.set_state('size', val )
			let valid = push_keys( key_log, !shortcut_sizes.includes( IOMIC.state.size ) )
			// if( !valid ){
			// 	console.log('returning from ' + IOMIC.get_choice_key() )
			// 	return			
			// }

			for( const value of iomic_labels.firm ){
				// if( val === 'c'){
				// 	console.log('testing: ', IOMIC.get_choice_key() )
				// }
				IOMIC.set_state('firmness', value )
				valid = push_keys( key_log, true )
				// if( !valid ) continue

				for( const value of iomic_labels.tack ){
					IOMIC.set_state('tackiness', value )
					valid = push_keys( key_log, true )
					// if( !valid ) continue

					for( const value of iomic_labels.texture ){
						IOMIC.set_state('surface', value )
						valid = push_keys( key_log )
					}
				}
			}
		}, delay * 100 )
		delay++

	}

}

*/





