;(() => {
    try {
    	const select = localStorage.getItem('check-grip-select-reload')
    	const year = 1000 * 60 * 60 * 24 * 30 * 12
    	const elapsed = Date.now() - Number( select )
    	if( !select || elapsed > year ){
	        localStorage.setItem('check-grip-select-reload', Date.now() );
    		location.reload()
    	}
    } catch(e) {
        return false;
    }
})();