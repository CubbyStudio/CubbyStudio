


/*
	search "add new" for adding new products
*/


const iomic_labels = {
	firm: ['extra soft', 'soft', 'medium', 'firm'],
	tack: ['more tacky', 'in between', 'less tacky'],
	texture: ['smooth', 'hybrid', 'rough'],
}

// *** add new 1
const iomic_products = {

	// "iXx Cord 2.3": {
	// 	sizes: ['mm', 'mml'], // follows ix2a
	// 	firmness: [0,0,0,1],
	// 	tackiness: [0,0,1],
	// 	texture: [0,1,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1696222190698-APS61FV9UNJ5KYCEM0G5/iXx+CORD.jpg?format=750w',
	// 	image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/iXx_Cord_2-3?v=1751077593',
	// 	url: '',
		// square_url: 'https://www.iomicusa.com/fullswing/ixxcord23',
	// 	recommendations: [
	// 		"iXX 2.3",
	// 		"iX 2.3",
	// 		'X-Evolution 2.6',
	// 		'X-Evolution 2.3',
	// 	]
	// },

	"Sticky Opus BC 1.8": {
		sizes: ['mm', 'mml'], // follows ix2a
		firmness: [0,0,1,0],
		tackiness: [1,0,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1674691470990-444GRPXF53DN1BGK4RZS/opusBC1_8.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_Opus_BC_1-8?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-opus-bc-1-8',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-opus-bc',
		recommendations: [
			'Moebius Black 1.8',
			'Sticky 1.8',
			'Sticky 1.8 SUPER LIGHT',
			'Sticky Camo 1.8',
		]		
	},

	"Sticky 3.5": {
		sizes: ['mml', 'ml', 'mxl', 'mxxl'], // follows ix2a
		firmness: [0,0,1,0],
		tackiness: [1,0,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1675096271768-GZS98DZO8CO92L6YV0WK/STICKY3_5title.jpg?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_3-5?v=1751077592',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-3-5',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky3-5',
		recommendations: [
			'Sticky MID',
			'Sticky JUMBO',
		]		
	},

	"iX Touch 2.0":{
		sizes: ['mm', 'mml'], // follows ix2a
		firmness: [0,1,0,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1655511445757-JODL6I9TGL37ZXWPF22W/iXTOUCH+2.0_grey.jpg?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/iX_Touch_2-0?v=1751077593',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/ix-touch-2-0',
		// square_url: 'https://www.iomicusa.com/fullswing/ix-touch',
		recommendations: [
			'iXSA 2.0',
			'Sticky 2.3',
			'Moebius Black 1.8',
			'Sticky 1.8',
		]
	},
	"Sticky 1.0":{
		sizes: ['j', 'ls'],
		firmness: [0,0,0,0],
		tackiness: [0,0,0],
		texture: [0,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645658589023-JN7M6JA15F92FHT8RH4B/Sticky_Ladies_Junior_feature_bleed_2021.png',
		// image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_Lady-s_-_Junior?v=1751077595',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/sticky1_0?v=1751174410',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-1-0',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-lady-junior',
		recommendations: []
	},
	"Sticky 1.8":{
		sizes: ['lm', 'c', 'ms'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646428491059-OPFY9V1TLJ9RYMOCFE8Q/Sticky+1.8_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_1-8?v=1751077594',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-1-8',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-18',
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
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646101503248-M230772PCEXB9ZX8I4FN/Stick_Superlight_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_1-8_SUPER_LIGHT?v=1751077783',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-1-8-super-light',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-18-super-light',
		recommendations: []
	},
	"Sticky Evolution 1.8":{
		sizes: ['lm', 'c', 'ms'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [0,1,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646345263045-IMAQA6YTT23TPRLPDPDO/Sticky+Evolution_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_Evolution_1-8?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-evolution-2-3-1-8-1-5',
		// square_url: 'https://www.iomicusa.com/fullswing/black-armor-2-sticky-evolution-23-18',
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
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646083803698-E2VFZFPCX30SX33R6MG9/MOEBIUS+1.8_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Moebius_Black_1-8?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/moebius-black-1-8',
		// square_url: 'https://www.iomicusa.com/fullswing/moebiusblack18',
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
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646031751688-1PJQ2QBDFGZ8E411GFM7/StickyCamo_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_Camo_1-8?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-camo-2-3-1-8',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-camo-23-18',
		recommendations: []
	},
	"iXSA 2.0":{
		sizes: ['mm', 'mml'],
		firmness: [1,0,0,0],
		tackiness: [1,0,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645660116280-0GCTJVX39CJ6XV1VXNG7/IXSA_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/iXSA_2-0?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/ix-sa-2-0',
		// square_url: 'https://www.iomicusa.com/fullswing/ix-sa-20',
		recommendations: [
			'Moebius Black 1.8',
		]
	},
	"Sticky 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646343849332-BO6NO1WHYK45TLEATPIT/Sticky+2.3_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_2-3?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-2-3',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-23',
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
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646345263045-IMAQA6YTT23TPRLPDPDO/Sticky+Evolution_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_Evolution_2-3?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-evolution-2-3-1-8-1-5',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-camo-23-18',
		recommendations: [
			'X-GRIP 2.3',
		]
	},
	"X-Evolution 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1],
		tackiness: [0,0,1],
		texture: [0,1,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646086399667-9I4EG0RJ0U7X9PHQNFDL/XEVOLUTION+2.3_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/X-Evolution_2-3?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/x-evolution-2-3',
		// square_url: 'https://www.iomicusa.com/fullswing/black-armor-2-x-evolution-23',
		recommendations: [
		]
	},
	"Sticky Black Army 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645827893887-CCIY23ZAB43J6EQL5NMG/Sticky+BLACK+ARMY+2.3_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_Black_Army_2-3?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-black-army-2-3',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-black-army23',
		recommendations: []
	},
	"Sticky Camo 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646031751688-1PJQ2QBDFGZ8E411GFM7/StickyCamo_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_Camo_2-3?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-camo-2-3-1-8',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-camo-23-18',
		recommendations: []
	},
	"iX 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,0,1],
		tackiness: [0,0,1],
		texture: [1,0,1],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1645997766684-2I0CQK31U86HRAA0KS49/IX+2.3_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/iX_2-3?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/ix-2-3',
		// square_url: 'https://www.iomicusa.com/fullswing/ix23',
		recommendations: [
			'iXX 2.3',
		]
	},
	"iXX 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,0,1],
		tackiness: [0,0,1],
		texture: [0,0,1],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646023612895-K1IQKKJ7WIB87O36OHTN/IXx2.3_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/iXX_2-3?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/ixx-2-3',
		// square_url: 'https://www.iomicusa.com/fullswing/ixx23',
		recommendations: [
			'iX 2.3',
		]
	},
	"X-GRIP 2.3":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,0],
		tackiness: [0,1,0],
		texture: [0,1,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646098205027-OGY3XCQ5DG31OEPDRFBB/X+GRIP++2.3_feature_bleed_SO.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/X-GRIP_2-3?v=1751077594',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/x-grip-2-3',
		// square_url: 'https://www.iomicusa.com/fullswing/x-grip23',
		recommendations: [
			'Sticky Evolution 2.3'
		]
	},
	"X-Evolution 2.6":{
		sizes: ['mm', 'mml'],
		firmness: [0,0,1,1],
		tackiness: [0,0,1],
		texture: [0,1,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646370665473-4CPCBQ1OBJJYAXN33KU4/X+Evolution+2.6_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/X-Evolution_2-6?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/x-evolution-2-6',
		// square_url: 'https://www.iomicusa.com/fullswing/x-evolution26',
		recommendations: []
	},
	"MID Evolution":{
		sizes: ['ml', 'mxl'],
		firmness: [0,0,0,1],
		tackiness: [0,1,1],
		texture: [0,1,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646069410505-36LPVRW57QNO97LOAYJ5/MIDEVO_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/MID_Evolution?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/mid-evolution',
		// square_url: 'https://www.iomicusa.com/fullswing/mid-evolution',
		recommendations: [
			'Sticky MID',
		],
	},
	"Sticky MID":{
		sizes: ['ml', 'mxl'],
		firmness: [0,0,0,1],
		tackiness: [1,1,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646367839203-QL0AZQTKR8E07LYF5YYW/Sticky+MID_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_MID?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-mid',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-mid',
		recommendations: [
			'MID Evolution',
			'Sticky JUMBO', // this is filtered out on all but MXL size
		]
	},
	"Sticky JUMBO":{
		sizes: ['ml', 'mxl', 'mxxl'],
		firmness: [0,0,0,1],
		tackiness: [1,0,0],
		texture: [1,0,0],
		// square_image: 'https://images.squarespace-cdn.com/content/v1/56b3dc95859fd06e4103c4ae/1646367738247-ED93L8FOYLOGK7RQZAL0/Sticky+JUMBO_feature_bleed.png?format=750w',
		image: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/Sticky_JUMBO?v=1751077595',
		url: 'https://1ce4w0-6k.myshopify.com/collections/full-swing-1/products/sticky-jumbo',
		// square_url: 'https://www.iomicusa.com/fullswing/sticky-jumbo',
		recommendations: [],
	},
}


// *** add new 2
const iomic_descriptions = {

	"iX Touch 2.0": `By softening the hardness by -15 (about 30%) from the normal hardness, adhesion is improved and further gripping power is achieved.
The grip end is equipped with IOMIC’s Technology, a softness version of LTC (Low Torque Control), which provides players with a stable trajectory.`,

	"Sticky 1.0": `Iomic's Sticky series now offers its tour proven performance to Ladies and Juniors.`,

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

// 	"iXx Cord 2.3": `Our first IOMIC cord grip, with our unique X pattern and cord material provides maximum feedback and control.
// By weaving cords into the rubber grip surface, this grip feels like it sticks to your hand. We have minimized slippage and achieved a superior grip feeling.

// NOTE: the iXx Cord grip 2.3 does contain RUBBER (for those with rubber allergies)`,

	"Sticky Opus BC 1.8": `The Sticky Opus BC 1.8 is manufactured using IOMIC's special marble coloring process. Which is the only one in the world which creates a unique pattern on every grip.`,

	"Sticky 3.5": `Sticky 3.5 is NEW size in our popular Sticky Series.

Just between our Sticky 2.3 (Standard Size) and Sticky MID (Midsize) with our LTC features and lighter IOMAX.`,

}





// ( these are interface image assets, not product photos )
// const old_square_assets = {
// 	hand: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e963bf99a183d7cdf2853/1647220283444/hand.jpg',
// 	startover: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e92b3b5e9bb484a46d127/1647219379718/startover.png',
// 	buy_now: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e92c4c2eed331b3a56ff3/1647219396625/buynow.png',
// 	firm_1: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e965aa9355e77af711a67/1647220314926/hand_extrasoft.png',
// 	firm_2: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e9665144cda6e4197c285/1647220325394/hand_soft.png',
// 	firm_3: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e966215b8c2139f1c1e78/1647220322491/hand_medium.png',
// 	firm_4: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622ea4f20696395c7ca44c2f/1647224050634/hand_firm.png',
// 	tack_1: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e968edef6e30c7a8a8f90/1647220366962/tack_most.png',
// 	tack_2: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e96885b8af274450e460f/1647220360758/tack_in-between.png',
// 	tack_3: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e968c43ca9a3c3ac7db6f/1647220364094/tack_least.png',
// 	surface_1: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e9680f6ecfc26fccc3d86/1647220352413/grip_smooth.png',
// 	surface_2: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e9677b5e9bb484a473764/1647220343947/grip_hybrid.png',
// 	surface_3: 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/622e967b15e88f37a27bf39d/1647220347125/grip_rough.png',
// }

const iomic_assets = {
	hand: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/hand?v=1751458072',
	startover: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/startover?v=1751458072',
	buy_now: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/buy_now?v=1751458072',
	firm_1: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/firm_1?v=1751458072',
	firm_2: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/firm_2?v=1751458072',
	firm_3: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/firm_3?v=1751458072',
	firm_4: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/firm_4?v=1751458072',
	tack_1: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/tack_1?v=1751458072',
	tack_2: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/tack_2?v=1751458072',
	tack_3: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/tack_3?v=1751458072',
	surface_1: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/surface_1?v=1751458072',
	surface_2: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/surface_2?v=1751458072',
	surface_3: 'https://cdn.shopify.com/s/files/1/0679/8095/1612/files/surface_3?v=1751458072',
}



// *** add new ( for reference )
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






// *** add new 3 - potentially add filters here
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




let grip_link

let appending_style = false
let missing_main = 0
document.addEventListener('DOMContentLoaded', async() => {

	appending_style = setInterval(() => { // just let it run
		if( !document.head.querySelector('#iomic-grip-styles') ){
			document.head.append( grip_link )
			console.log('re-appended iomic styles')
		}
		if( !document.getElementById('io-main')){ // the extremely annoying cache condition where the browser has left the script mid-execution
			missing_main++
			if( missing_main > 3 ){
				// location.reload()
				console.warn('FAILED TO FIND INIT ELE')
				// clearInterval( appending_style )
			}
		}
	}, 1000)

	setTimeout(() => {
		init_app()
	}, 500)

			// clearTimeout( initializing )
		// }
	// })
})


const init_app = () => {

	console.log('init iomic grip selector')

	// ----------------- init
	// locale
	let locale
	if( window.location.href.match(/local.html/) ){
		locale = 'local'
	}else{
		locale = 'production'
	}

	// const logstack = 1
	const logstack = 0
	const stack = ( msg, ...args ) => {
		if( logstack ) console.log('_________>', msg, ...args )
	}

	const localog = ( ...args ) => {
		if( locale === 'local' ) console.log( ...args )
	}


	// append stylesheet
	grip_link = document.createElement('link')
	grip_link.id = 'iomic-grip-styles'
	grip_link.rel = 'stylesheet'
	if( locale === 'production'){
		// link.href = 'https://resource.oko.nyc/_projects/iomic/css/iomic.css?v=7'
	  grip_link.href = 'https://cdn.jsdelivr.net/gh/CubbyStudio/CubbyStudio/css/iomic.css?v=21'
	}else{
		// grip_link.href = './css/iomic.css'
	}
	 document.head.appendChild( grip_link ) // moved this in-house squarespace website

	// tweak squarespace css
	// for( const h2 of document.querySelectorAll('.Main-content h2')){
	// 	if( h2.innerText.match(/grip/i)){ // main header "grip selector"
	// 		h2.style['font-family'] = 'Exo'
	// 		h2.style['font-weight'] = 'bold'
	// 	}
	// 	if( window.innerWidth < 768 ){
	// 		h2.style['font-size'] = '38px'
	// 	}
	// }

	const IMAGE = type => {
		if( iomic_assets[ type ] ){
			return iomic_assets[ type ]
		}else{
			localog('missing image for: ', type )
			return `https://cdn.shopify.com/s/files/1/0679/8095/1612/files/missing-img-small.png?v=1751458768`
			// return 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/6228bf44eabeea07082789a7/1646837572339/asdf.png'
		}
	}

	// const PRODUCT = ( name, resource_type ) => {
	// 	switch( resource_type ){
	// 		case 'image':
	// 			return _products[ name ] ? _products[ name ].img : 'https://static1.squarespace.com/static/56b3dc95859fd06e4103c4ae/t/6228bf44eabeea07082789a7/1646837572339/asdf.png'
	// 		case 'url':
	// 			localog('unhandled product url request', name, resource_type )
	// 			return ''
	// 		default: 
	// 			localog('unknown / invalid product request', name, resource_type )
	// 			return ''
	// 	}
	// }













	// ----------------- class

	class Quiz {

		constructor( init ){
			this.ele = document.createElement('div')
			this.ele.id = 'io-main'
			this.constrainer = document.createElement('div')
			this.constrainer.id = 'io-constrainer'
			this.ele.appendChild( this.constrainer )
			this.pure_state = {
				active_step: 0,
				size: '',
				firmness: '',
				tackiness: '',
				surface: '',
			}
			this.state = {}
			for( const key in this.pure_state ){
				this.state[ key ] = this.pure_state[ key ]
			}
			this.steps = []
			this.build()
		}








		// ------------------------------------------------------------------------------------------ 
		// ACTIONS
		// ------------------------------------------------------------------------------------------
		show_step( type ){

			stack('show_step', type )

			// handle buttons
			for( const btn of this.nav.querySelectorAll('.io-button')){
				btn.classList.remove('selected')
			}
			for( const pane of this.content.querySelectorAll('.io-content')){
				pane.classList.remove('selected')
			}
			const btn = this.nav.querySelector('.io-button[data-step="' + type.toLowerCase() + '"]')
			btn.classList.add('selected')
			
			// handle mobile buttons
			let found = false
			for( const step of this.nav.querySelectorAll('.io-mobile-step')){
				if( found ){
					step.classList.remove('selected')
				}else{
					step.classList.add('selected')
				}
				if( step.getAttribute('data-step') === type.toLowerCase() ){
					found = true
				}
			}
			// const step = this.nav.querySelector('.io-mobile-step[data-step="' + type.toLowerCase() + '"]')
			// step.classList.add('selected')

			// show content
			this.content.querySelector('.io-content[data-step="' + type.toLowerCase() + '"]').classList.add('selected')

			// handle state
			this.state.active_step = this.steps.indexOf( btn.getAttribute('data-step') )

			if( this.state.active_step === 0 ){
				this.startover.style.display = 'none'
			}else{
				this.startover.style.display = 'block'
			}

			// filter
			this.filter_step()

			// if( type !== 'size' ) this.lookahead()

			// localog( 'show step: ', type, this.state.active_step )

			this.result_indicator.style.display = 'none'

			// -----------------
			// mobile stuffs
			// -----------------

			if( window.innerWidth < 768 ){
				this.mobile_slider.style.display = 'inline-block'
				this.startover.style.display = 'none'
			}

		}

		lookahead(){

			stack('lookahead')

			let tally = {}

			const options = this.content.querySelectorAll('.io-option')
			for( const option of options ){

				const lookahead_state = Object.assign({}, this.state )
				// lookahead_state.active_step++
				lookahead_state[ option.getAttribute('data-type') ] = option.getAttribute('data-value')

				const possible = this.get_filtered( lookahead_state, 'lookahead' )

				if( !Object.keys( possible ).length ){
					option.classList.add('io-disabled')
				}else{
					option.classList.remove('io-disabled')
				}
				// localog('lookahead possible:', possible )

			}

			// for each option
			// set state to AS IF option chose
			// count results
			// set disabled if zero

		}

		filter_step(){

			stack('filter_step')
			// "active_step": 3,
			// "size": "c",
			// "firmness": "extra soft",
			// "tackiness": "in between",
			// "surface": "rough"

			// localog('skipping filter_step')
			return

			// const options = this.content.querySelectorAll('.io-option')

			// for( const option of options ){
			// 	option.classList.remove('io-disabled')
			// }

			// switch( this.state.active_step ){
			// 	case 0: // size
			// 		// never filtered....
			// 		break;
			// 	case 1: // firmness
			// 		if( this.state.class === 'undersize' ){
			// 			for( const option of options ){
			// 				const val = option.getAttribute('data-value')
			// 				if( val === 'firm' || val === 'extra soft' ){
			// 					option.classList.add('io-disabled')
			// 				}
			// 			}
			// 		}else if( this.state.class === 'standard' ){
			// 			for( const option of options ){
			// 				const val = option.getAttribute('data-value')
			// 				if( val === 'soft' ){
			// 					option.classList.add('io-disabled')
			// 				}
			// 			}
			// 		}else if( this.state.class === 'midsize' ){
			// 			for( const option of options ){
			// 				const val = option.getAttribute('data-value')
			// 				if( val === 'soft' || val === 'extra soft' || val === 'medium' ){
			// 					option.classList.add('io-disabled')
			// 				}
			// 			}
			// 		}
			// 		break;
			// 	case 2: // tackiness
			// 		if( this.state.class === 'undersize' ){
			// 			for( const option of options ){
			// 				const val = option.getAttribute('data-value')
			// 				if( val === 'more tacky' || val === 'less tacky' ){
			// 					option.classList.add('io-disabled')
			// 				}
			// 			}
			// 		}else if( this.state.class === 'standard' ){
			// 			// combine individual firmness settings:
			// 			if( this.state.firmness === 'medium' ){ 
			// 				for( const option of options ){
			// 					const val = option.getAttribute('data-value')
			// 					if( val === 'more tacky' || val === 'less tacky' ){
			// 						option.classList.add('io-disabled')
			// 					}
			// 				}						
			// 			}else if( this.state.firmness === 'firm'){
			// 				for( const option of options ){
			// 					const val = option.getAttribute('data-value')
			// 					if( val === 'in between' || val === 'more tacky' ){
			// 						option.classList.add('io-disabled')
			// 					}
			// 				}
			// 			}else if( this.state.firmness === 'extra soft'){
			// 				for( const option of options ){
			// 					const val = option.getAttribute('data-value')
			// 					if( val !== 'more tacky' ){
			// 						option.classList.add('io-disabled')
			// 					}
			// 				}
			// 			}
			// 		}else if( this.state.class === 'midsize' ){
			// 			for( const option of options ){
			// 				const val = option.getAttribute('data-value')
			// 				if( val === 'more tacky' ){
			// 					option.classList.add('io-disabled')
			// 				}
			// 			}
			// 		}
			// 		break;
			// 	case 3:  // surface
			// 		if( this.state.class === 'undersize' ){
			// 			for( const option of options ){
			// 				const val = option.getAttribute('data-value')
			// 				if( val === 'rough' || val === 'smooth' ){
			// 					// rando exception here:
			// 					if( val === 'smooth' && this.state.firmness === 'medium' ) continue
			// 					// normal:
			// 					option.classList.add('io-disabled')
			// 				}

			// 			}
			// 		}else if( this.state.class === 'standard' ){
			// 			// for( const option of options ){
			// 			// 	const val = option.getAttribute('data-value')
			// 			// 	if( val === 'rough' ){
			// 			// 		option.classList.add('io-disabled')
			// 			// 	}
			// 			// }
			// 			if( this.state.firmness === 'extra soft'){
			// 				for( const option of options ){
			// 					const val = option.getAttribute('data-value')
			// 					if( val !== 'smooth' ){
			// 						option.classList.add('io-disabled')
			// 					}
			// 				}	
			// 			}else if( this.state.firmness === 'medium' ){
			// 				for( const option of options ){
			// 					const val = option.getAttribute('data-value')
			// 					if( val === 'rough' ){
			// 						option.classList.add('io-disabled')
			// 					}
			// 				}
			// 			}else if( this.state.firmness === 'firm'){
			// 				for( const option of options ){
			// 					const val = option.getAttribute('data-value')
			// 					if( val === 'smooth' ){
			// 						option.classList.add('io-disabled')
			// 					}
			// 				}
			// 			}
			// 		}else if( this.state.class === 'midsize' ){
			// 			if( this.state.firmness === 'firm' ){
			// 				if( this.state.tackiness === 'less tacky'){
			// 					for( const option of options ){
			// 						const val = option.getAttribute('data-value')
			// 						if( val !== 'hybrid' ){
			// 							option.classList.add('io-disabled')
			// 						}
			// 					}
			// 				}else if( this.state.tackiness === 'in between'){
			// 					for( const option of options ){
			// 						const val = option.getAttribute('data-value')
			// 						if( val !== 'smooth' ){
			// 							option.classList.add('io-disabled')
			// 						}
			// 					}
			// 				}
			// 			}
			// 		}
			// 		break;

			// 	default: 
			// 		localog('(no active step, filtering results)')
			// 		break;
			// }
		}

		set_state( key, value ){
			stack('set_state', key, value )
			if( typeof this.state[ key ] !== 'string' && typeof this.state[ key ] !== 'number' ){
				localog('missing state key: ', key )
				return
			}
			this.state[key] = value
			this.state.class = iomic_get_class( this.state.size )
			this.reflect_state()
		}

		reflect_state(){
			stack('reflect_state')
			this.dev_tooltip.innerText = JSON.stringify( this.state, null, 4 )
			this.show_filtered()
		}

		show_filtered(){
			stack('show_filtered')
			const f = this.get_filtered( this.state, 'show_filtered' )
			if( !this.dev_filtered ){
				this.dev_filtered = document.createElement('div')
				this.dev_filtered.id = 'io-filtered-list'
			}
			this.dev_tooltip.appendChild( this.dev_filtered )
			this.dev_filtered.innerHTML = ''
			for( const key in f ){
				this.dev_filtered.innerHTML += `${ key }: ${ f[key].tally }<br>`
				// if( f[key].tally ) console.log('tally: ', f[key].name, f[key].tally )
			}
			// console.log('products with points: ', show )
		}

		build_results_elements( remaining ){

			for( const btn of this.nav.querySelectorAll('.io-button')){
				btn.classList.remove('selected')
			}
			for( const pane of this.content.querySelectorAll('.io-content')){
				pane.classList.remove('selected')
			}

			this.state.active_step = this.steps.length

			// blank slate
			this.results.innerHTML = ''

			// production info
			const header = document.createElement('div')
			header.classList.add('io-content-header')
			header.innerHTML = 'Based on your answers, your recommended grip is:'
			this.results.appendChild( header )

			const top_product = this.get_top_rec( remaining )

			/*
				ok here is the issue...

			*/

			const result = document.createElement('div')
			result.classList.add('io-result-main')
			const main = this.build_main( top_product )
			result.appendChild( main )
			this.results.appendChild( result )

			const recs = document.createElement('div')
			recs.classList.add('io-result-recs', 'io-row')
			const rec_header = document.createElement('h3')
			rec_header.classList.add('io-column')
			rec_header.innerHTML = 'Alternative Recommendations'
			rec_header.style['font-style'] = 'italic'
			rec_header.style['font-weight'] = 'bold'
			rec_header.style['text-align'] = 'left'
			recs.appendChild( rec_header )

			return {
				recs: recs,
				keys: Object.keys( remaining ),
				top_product: top_product,
				main: main,
			}

		}

		show_result(){
			stack('show_result')
			// calculate results
			const remaining = this.get_filtered( this.state, 'show_result' )

			// the main builder:
			const { 
				recs, 
				keys, 
				top_product,
				main,
			} = this.build_results_elements( remaining )

			const recommendations = this.get_recommendations( remaining, top_product )

			// console.log('missing desc??: ', recommendations)

			for( const key in recommendations ){
				recs.appendChild( this.build_recommendation( recommendations[ key ] ) )
			}
			this.results.appendChild( recs )

			if( !keys.length ){
				this.results.innerHTML = '(no products match these criteria)'
				localog('missing A')
			}else{
				const buynow = document.createElement('div')
				buynow.classList.add('io-buynow')
				const link = document.createElement('a')
				link.href = top_product.url
				link.target = '_blank'
				const img = document.createElement('img')
				img.src = iomic_assets.buy_now
				link.appendChild( img )
				buynow.appendChild( link )
				main.appendChild( buynow )
			}

			console.log('show-result top rec: \n', top_product.name)

			this.results.style.display = 'inline-block'

			this.result_indicator.style.display = 'inline-block'

			const r = document.querySelector('.io-result-recs')
			if( Object.keys( recommendations ).length ){
				if( r ) r.style.display = 'block'
			}else{
				if( r ) r.style.display = 'none'
			}


			// ---------------
			// mobile stuffs
			// ---------------

			this.mobile_slider.style.display = 'none'

			this.startover.style.display = 'inline-block'

			if( window.innerWidth < 768 ){
				main.appendChild( this.startover ) // ( just moves it to bottom )
				this.nav.classList.add('io-mobile-result-viz')
			}else{
				this.startover.style['vertical-align'] = 'bottom'
				this.nav.classList.remove('io-mobile-result-viz')
			}


		}

		restart(){
			stack('restart')
			this.state = Object.assign({}, this.pure_state )
			this.reflect_state()
			this.show_step('size')
			this.results.style.display = 'none'
			this.ele.querySelector('.io-content-size select').value = ''
		}


















		// ------------------------------------------------------------------------------------------ 
		// GETS
		// ------------------------------------------------------------------------------------------ 
		get_filtered( GIVEN_STATE, caller ){
			stack('get_filtered', caller )
			// const logging = true
			const logging = false

			// i think - this func normally runs AFTER an option is selected, but BEFORE the step changes
			
			const printlog = {
				size: {},
				firmness: {},
				tackiness: {},
				surface: {},
			}

			// ( business logic )

			const clone = Object.assign({}, iomic_products )
			// if( logging ) console.log('INIT clone: ', clone )

			let product, index, rating

			for( const key in clone ) clone[ key ].tally = 0 // init tally prop

			// --- early returns
			let early_return
			if( GIVEN_STATE.size === 'j' || GIVEN_STATE.size === 'ls' ){
				early_return = "Sticky 1.0"
			}
			// if( GIVEN_STATE.size === 'mxxl' ){
			// 	early_return = 'Sticky JUMBO'
			// }
			if( early_return ){

				clone[ early_return ].tally = 10

				// ---- restore this to do one-off returns:
				// const obj = Object.assign({}, iomic_products[ early_return ] )
				// obj.name = early_return
				// obj.tally = 10
				// if( logging ) localog('returning early, should be shortcut product')
				// return { 
				// 	[ obj.name ]: obj
				// }
			}
			// --- early returns

			for( const key in clone ){
				product = clone[ key ]
				// product.tally = 0
				// size
				if( GIVEN_STATE.active_step >= 0 ){
					// console.log('filtering size')
					if( !product.sizes.includes( GIVEN_STATE.size ) ){
						if( logging ){
							printlog.size[ key ] = false
							// console.log('unmatch size: ', key, product.sizes, GIVEN_STATE.size )
						}
						// console.log('size', GIVEN_STATE.size )
						// delete clone[ key ]
						continue
					}else{
						product.tally++
					}
				}
				// firmness
				if( GIVEN_STATE.active_step >= 1 ){
					// console.log('filtering firmness')
					index = iomic_labels.firm.indexOf( GIVEN_STATE.firmness )
					rating = product.firmness[ index ]
					if( rating !== 1 ){
						if( logging ){
							printlog.firmness[ key ] = false
							// console.log('unmatch firmness: ', key, index, rating, GIVEN_STATE.firmness )
						}
						// delete clone[ key ]
						continue
					}else{
						product.tally++
					}
				}
				// tackiness
				if( GIVEN_STATE.active_step >= 2 ){
					// console.log('filtering tackiness')
					index = iomic_labels.tack.indexOf( GIVEN_STATE.tackiness )
					rating = product.tackiness[ index ]
					if( rating !== 1 ){
						if( logging ){
							printlog.tackiness[ key ] = false
							// console.log('unmatch tackiness: ', key, index, rating, GIVEN_STATE.tackiness )
						}
						// delete clone[ key ]
						continue
					}else{
						product.tally++
					}
				}
				// surface
				if( GIVEN_STATE.active_step >= 3 ){
					// console.log('filtering surface')
					index = iomic_labels.texture.indexOf( GIVEN_STATE.surface )
					rating = product.texture[ index ]
					if( rating !== 1 ){
						if( logging ){
							printlog.surface[ key] = true
							// console.log('unmatch surface: ', key, index, rating, GIVEN_STATE.surface )
						}
						// delete clone[ key ]
						continue
					}else{
						product.tally++
					}
				}
			}

			// shim in names for display
			for( const key in clone ){
				clone[ key ].name = key
			}

			if( logging ){
				// console.log('get_filtered state: ', this.state )
				// console.log('get_filtered printlog: ', printlog )
				console.log('get_filtered result: ', clone )
			}

			return clone

		}


		get_choice_key(){
			stack('get_choice_key')
			return this.state.size + '_' + this.state.firmness + '_' + this.state.tackiness + '_' + this.state.surface
		}

		get_top_rec( products ){
			let max = 0
			let product
			for( const key in products ){
				if( products[key].tally && products[key].tally > max ){
					product = products[ key ]
					max = products[key].tally
				}
			}
			return product
		}

		get_recommendations( products, top_product ){
			stack('get-recommendations')
			if( !products){
				localog('invalid get recommendations')
				return {}
			}
			if( !top_product || !top_product.recommendations  ){ // || !top_product.recommendations.length
				localog('invalid top_product: ', products, top_product )
				return {}
			}

			const recs = {}

			let filled = 0
			const sort_tally = []
			for( const key in products ){
				if( !iomic_products[ key ] || !iomic_descriptions[ key ]){
					localog('invalid recommendation: ', key )
					continue
				}
				if( top_product.name === key ) continue
				
				sort_tally.push( products[ key ])

				filled++

			}

			// console.log('pre filter', this.get_top_rec( sort_tally).name )

			this.filter_rec_exceptions( top_product, sort_tally )

			/*
				so HERE, there should be only FOUR when stick jumbo is top_product
			*/
			console.log('post filter', sort_tally.length )



			// const sorted = 
			sort_tally.sort((a, b) => {
				// return a.tally - b.tally
				return b.tally - a.tally
			})

			let name
			let added = 0
			for( let i = 0; i < sort_tally.length; i++ ){
				if( added > 3 ) continue
				if( this.skip_exception_recs( top_product, sort_tally[i], i ) ) continue
				name = sort_tally[i].name
				recs[ name ] = sort_tally[i]
				recs[ name ].description = iomic_descriptions[ name ]
				recs[ name ].name = name
				added++
			}

			return recs
		}


		skip_exception_recs( main, tally_obj, index ){
			// remove Ladies for Cadet+ size
			// console.log( main.name, tally_obj.name )
			const size_to_index = Object.keys( iomic_sizes ).indexOf( this.state.size )
			if( tally_obj.name === "Sticky 1.0" && size_to_index > 3 ){
				console.log('skipping Ladies recommendation')
				return true
			}
			return false
		}


		filter_rec_exceptions( product, recommendations ){
			/*
				custom transforms on recs
			*/
			stack('filter-rec-exceptions')

			// console.log('filter recs main product: ', product.name )

			if( !Array.isArray( recommendations )){
				console.log('invalid filter rec')
				return
			}

			//  XL grip size should NEVER have any grip with the "1.8 or 2.0
			if(  product.sizes.includes('mxl') ){ //product.sizes.includes('mxxl') ||
				// for( const key in recommendations ){
				let entry
				for( let i = recommendations.length - 1; i >= 0; i-- ){
					entry = recommendations[i]
					if( entry.name.match('1.8') || entry.name.match('2.0') ){
						// delete recommendations[ key ]
						const x = splice_attribute('name', entry.name, recommendations )
					}
				}
			}

			// totally custom replace recs entirely for:
			let custom
			if( product.name.match(/sticky jumbo/i)){
				recommendations.length = 0
				custom = ['MID Evolution', 'Sticky MID', 'X-Evolution 2.6', 'Sticky 2.3']
				for( const name of custom ){
					recommendations.push( iomic_products[ name ] )
				}

			}else if( product.name.match(/Sticky MID/i) ){
				recommendations.length = 0
				custom = ['MID Evolution', 'Sticky MID', 'X-Evolution 2.6', 'Sticky 2.3']
				for( const name of custom ){
					recommendations.push( iomic_products[ name ] )
				}

			}else if( product.name === 'MID Evolution'){
				recommendations.length = 0
				custom = ['Sticky MID', 'X-Evolution 2.3', 'X-Evolution 2.6', 'Sticky JUMBO']
				for( const name of custom ){
					recommendations.push( iomic_products[ name ] )
				}

			}else if( product.name === 'iX Touch 2.0'){
				recommendations.length = 0
				for( const name of product.recommendations ){
					recommendations.push( iomic_products[ name ] )
				}
			}

			console.log( 'top product at filter exceptions: \n', product.name )

			console.log('so why not', recommendations)

		}





















		// ------------------------------------------------------------------------------------------ 
		// BUILDERS
		// ------------------------------------------------------------------------------------------
		build(){
			this.nav = document.createElement('div')
			this.nav.id = 'io-nav'
			this.mobile_slider = document.createElement('div')
			this.mobile_slider.id = 'io-mobile-slider'
			this.mobile_slider.classList.add('io-row')
			this.content = document.createElement('div')
			this.content.id = 'io-content'
			this.add_step('size')
			this.add_step('firmness')
			this.add_step('tackiness')
			this.add_step('surface')
			const steps = this.mobile_slider.querySelectorAll('.io-mobile-step')
			for( const ele of steps ){
				ele.classList.add('io-column-' + steps.length )
			}

			this.result_indicator = document.createElement('div')
			this.result_indicator.id = 'io-result-indicator'
			this.nav.appendChild( this.result_indicator )

			this.result_break = document.createElement('div')
			this.result_break.id = 'io-result-break'
			this.result_indicator.appendChild( this.result_break )

			this.result_content = document.createElement('div')
			this.result_content.id = 'io-result-content'
			this.result_content.innerHTML = 'RESULT'
			this.result_indicator.appendChild( this.result_content )

			this.nav.appendChild( this.mobile_slider )

			this.add_startover()

			this.results = document.createElement('div')
			this.results.id = 'io-results'
			this.content.appendChild( this.results )
			this.dev_tooltip = document.createElement('div')
			this.dev_tooltip.id = 'io-devtip'
			if( locale === 'local' ){
			// if( location.href.match(/localhost/i)){
				document.body.appendChild( this.dev_tooltip )
			}

			this.constrainer.appendChild( this.nav )
			this.constrainer.appendChild( this.content )
		}
		add_step( type ){
			this.nav.appendChild( this.build_button( type ) )
			this.mobile_slider.appendChild( this.build_button_step( type ) )
			this.nav.appendChild( document.createElement('br') )
			this.content.appendChild( this.build_content( type ) )
			this.steps.push( type.toLowerCase() )
		}
		add_startover(){
			this.startover = document.createElement('div')
			this.startover.id = 'startover'
			this.nav.appendChild( this.startover )
			const io = this
			this.startover.addEventListener('click', () => {
				io.restart()
			})
		}
		build_button( type ){
			const io = this
			const btn = document.createElement('div')
			btn.classList.add('io-button')
			btn.setAttribute('data-step', type.toLowerCase() )
			btn.innerHTML = type
			if( locale !== 'production'){
				btn.addEventListener('click', () => {
					io.show_step( type )
				})			
			}
			return btn
		}
		build_button_step( type ){
			const ele = document.createElement('div')
			ele.classList.add('io-mobile-step', 'io-column')
			ele.setAttribute('data-step', type )
			return ele
		}
		build_content( type ){
			const c = document.createElement('div')
			c.classList.add('io-content', 'io-content-' + type, 'io-row' )
			c.setAttribute('data-step', type.toLowerCase() )
			const header = document.createElement('div')
			header.classList.add('io-column', 'io-content-header')

			switch( type ){

				case 'size':

					// left column
					const left = document.createElement('div')
					left.classList.add('io-column', 'io-column-2')
					const selection = document.createElement('div')
					selection.classList.add('io-size-selector')
					header.innerHTML = 'Select your <span class="io-highlight">Glove Size:</span>'
					selection.appendChild( header )
					left.appendChild( selection )

					// right
					const right = document.createElement('div')
					right.classList.add('io-column', 'io-column-2')
					const dropdown = document.createElement('select')
					const start = document.createElement('option')
					start.value = ''
					start.innerText = 'Glove Size'
					dropdown.appendChild( start )
					for( const key in iomic_sizes ){
						const option = document.createElement('option')
						option.value = key
						option.innerText = capitalize( iomic_sizes[ key ] )
						dropdown.appendChild( option )
					}				
					right.appendChild( dropdown )

					// hand col
					const hand_col = document.createElement('div')
					hand_col.classList.add('io-column')
					const hand = document.createElement('img')
					hand.src = IMAGE('hand')
					hand_col.appendChild( hand )

					c.appendChild( left )
					c.appendChild( right )
					c.appendChild( hand_col )

					dropdown.addEventListener('change', () => {
						if( !dropdown.value ) return
						this.set_state('size', dropdown.value )
						if( this.state.size === 'j' || this.state.size === 'ls' ){ // this.state.size === 'mxxl'
							this.show_result()
							return
						}
						this.show_step( 'firmness' )
					})
					dropdown.addEventListener('mouseup', () => {
						if( !dropdown.value ) return
						this.set_state('size', dropdown.value )
						if( this.state.size === 'j' || this.state.size === 'ls' ){ // this.state.size === 'mxxl'
							this.show_result()
							return
						}
						this.show_step( 'firmness' )
					})
					break;

				case 'firmness':
					header.innerHTML = 'Select your preferred grip <span class="io-highlight">Firmness:</span>'
					const grips = document.createElement('div')
					grips.classList.add('io-row')
					for( let i = 0; i < iomic_labels.firm.length; i++ ){
						const option = document.createElement('div')
						option.setAttribute('data-type', type.toLowerCase() )
						option.setAttribute('data-value', iomic_labels.firm[i] )
						option.classList.add('io-option', 'grip-option', 'io-column', 'io-column-4')
						filter_mobile_column_sizes( option )
						const img = document.createElement('img')
						img.src = IMAGE('firm_' + ( i + 1 ) )
						const label = document.createElement('div')
						label.classList.add('io-label')
						label.innerHTML = iomic_labels.firm[i].toLowerCase()
						option.appendChild( img )
						option.appendChild( label )
						grips.appendChild( option )
					}
					c.appendChild( header )
					c.appendChild( grips )
					break;

				case 'tackiness':
					header.innerHTML = 'Select your preferred grip <span class="io-highlight">Tackiness:</span>'
					const tacks = document.createElement('div')
					tacks.classList.add('io-row')
					for( let i = 0; i < iomic_labels.tack.length; i++ ){
						const option = document.createElement('div')
						option.setAttribute('data-type', type.toLowerCase() )
						option.setAttribute('data-value', iomic_labels.tack[i] )
						option.classList.add('io-option', 'tack-option', 'io-column', 'io-column-3')
						filter_mobile_column_sizes( option )
						const img = document.createElement('img')
						img.src = IMAGE('tack_' + ( i + 1 ) )
						const label = document.createElement('div')
						label.classList.add('io-label')
						label.innerHTML = iomic_labels.tack[i].toLowerCase()
						option.appendChild( img )
						option.appendChild( label )
						tacks.appendChild( option )
					}
					c.appendChild( header )
					c.appendChild( tacks )
					break;

				case 'surface':
					header.innerHTML = 'Select your preferred grip <span class="io-highlight">Surface Texture:</span>'
					const surfaces = document.createElement('div')
					surfaces.classList.add('io-row')
					for( let i = 0; i < iomic_labels.texture.length; i++ ){
						const option = document.createElement('div')
						option.setAttribute('data-type', type.toLowerCase() )
						option.setAttribute('data-value', iomic_labels.texture[i] )
						option.classList.add('io-option', 'texture-option', 'io-column', 'io-column-3')
						filter_mobile_column_sizes( option )
						const img = document.createElement('img')
						img.src = IMAGE('surface_' + ( i + 1 ) )
						const label = document.createElement('div')
						label.classList.add('io-label')
						label.innerHTML = iomic_labels.texture[i].toLowerCase()
						option.appendChild( img )
						option.appendChild( label )
						surfaces.appendChild( option )
					}
					c.appendChild( header )
					c.appendChild( surfaces )
					break;

				default: 
					break;
			}
			for( const ele of c.querySelectorAll('div.io-option')){
				ele.addEventListener('click', () => {
					this.set_state( ele.getAttribute('data-type').toLowerCase(), ele.getAttribute('data-value') )
					const next_iter = this.steps.indexOf( ele.getAttribute('data-type') ) + 1
					const next_step = this.steps[ next_iter ]
					if( next_step ){
						this.show_step( next_step )
					}else{
						this.show_result()
					}
				})
			}

			return c
		}
		build_main( product ){
			/*
				idempotent
				build main result area for a single product
			*/

			localog('building main: \n', product.name )

			const ele = document.createElement('div')

			if( !product ){
				// no matches
				localog('missing B')
				ele.innerHTML = 'no products match these criteria'
				return ele
			}

			const linkwrap = document.createElement('a')
			linkwrap.href = product.url
			linkwrap.target = '_blank'
			const header = document.createElement('div')
			header.classList.add('io-main-result-header')
			header.innerHTML = product.name
			const img = document.createElement('img')
			img.src = product.image
			linkwrap.appendChild( header )
			linkwrap.appendChild( img )

			const desc = document.createElement('div')
			desc.classList.add('io-description')
			const text = iomic_descriptions[ product.name ]
			if( !text ){
				localog('failed to find matching description for:')
				localog( product.name )
				localog( Object.keys( iomic_descriptions ) )
			}
			desc.innerHTML = text 

			ele.appendChild( linkwrap )			
			ele.appendChild( desc )

			return ele
		}
		build_recommendation( product ){
			/*
				idempotent
				build a rec element for a single product
			*/

			// localog('building alt: ', product.name, product.tally )
			const link = document.createElement('a')
			link.classList.add('io-result-rec', 'io-column', 'io-column-2')
			link.href = product.url
			link.target = '_blank'
			link.style['text-decoration'] = 'none'
			link.style['color'] = 'black'
			link.style['text-align'] = 'left'
			const header = document.createElement('div')
			header.classList.add('io-rec-header')
			header.innerHTML = product.name
			const img_wrapper = document.createElement('div')
			img_wrapper.classList.add('io-img-wrapper')
			const img = document.createElement('img')
			img.src = product.image
			const desc = document.createElement('div')
			desc.classList.add('io-rec-description')
			desc.innerHTML = product.description
			desc.style['text-decoration'] = 'none'
			if( !product.description ){
				localog('missing desc for: ', product )
			}

			if( 1 || window.innerWidth < 768 ){ // ( header below )
				link.appendChild( img_wrapper )
				img_wrapper.appendChild( img )
				link.appendChild( header )
			}else{ // ( header above )
				link.appendChild( header )
				link.appendChild( img_wrapper )
				img_wrapper.appendChild( img )			
			}

			link.appendChild( desc )

			return link
		}


	}



	const capitalize = value => {
		return value[0].toUpperCase() + value.substr(1).replace( value[0] )
	}

	const filter_mobile_column_sizes = option => {
		if( window.innerWidth < 768 && option.classList.contains('io-column-4') ){
			option.classList.remove('io-column-4')
			option.classList.add('io-column-2')
		}
	}


	// ----------------- logic

	const IOMIC = new Quiz()
	window.IOMIC = IOMIC

	if( locale === 'local' ){
		document.body.appendChild( IOMIC.ele )
	}else if( locale === 'production'){
		// const main = document.querySelector('#page .content-wrapper') // old squarespace container
		const main = document.querySelector('#MainContent') // shopify container

		// squarespace stuff:
		// const default_grid = main.querySelector('.content')
		// default_grid.remove()
		if( !main ){
			localog('failed to find main')
			return
		}
		main.append( IOMIC.ele )
		// main.appendChild( IOMIC.ele )
	}

	IOMIC.show_step('size')



}



const splice_attribute = ( attr, value, set ) => {

	if( !Array.isArray( set )){
		localog('invalid splice attr')
		return
	}

	for( const entry of set ){
		if( entry[ attr ] === value ){
			return set.splice( set.indexOf( entry ), 1 )
		}
	}

}



