
document.addEventListener('DOMContentLoaded', async() => {


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
const link = document.createElement('link')
link.rel = 'stylesheet'
if( locale === 'production'){
	// link.href = 'https://resource.oko.nyc/_projects/iomic/css/iomic.css?v=7'
	link.href = 'https://cdn.jsdelivr.net/gh/CubbyStudio/CubbyStudio/css/iomic.css?v=21'
}else{
	link.href = './css/iomic.css'
}
document.head.appendChild( link )

// tweak squarespace css
for( const h2 of document.querySelectorAll('.Main-content h2')){
	if( h2.innerText.match(/grip/i)){ // main header "grip selector"
		h2.style['font-family'] = 'Exo'
		h2.style['font-weight'] = 'bold'
	}
	if( window.innerWidth < 768 ){
		h2.style['font-size'] = '38px'
	}
}

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

		// console.log('anytin wrong wit state wot', GIVEN_STATE )

		// i think - this func normally runs AFTER an option is selected, but BEFORE the step changes
		// 
		// const step_test = set_back_state ? this.state.active_step - 1 : this.state.active_step

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
		if( GIVEN_STATE.size === 'mxxl' ){
			early_return = 'Sticky JUMBO'
		}
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
					if( this.state.size === 'j' || this.state.size === 'ls' || this.state.size === 'mxxl' ){
						this.show_result()
						return
					}
					this.show_step( 'firmness' )
				})
				dropdown.addEventListener('mouseup', () => {
					if( !dropdown.value ) return
					this.set_state('size', dropdown.value )
					if( this.state.size === 'j' || this.state.size === 'ls' || this.state.size === 'mxxl' ){
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
	const main = document.querySelector('.Main-content')
	if( !main ){
		localog('failed to find main')
		return
	}
	main.appendChild( IOMIC.ele )
}

IOMIC.show_step('size')

})




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
