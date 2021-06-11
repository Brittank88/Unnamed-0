// priority: 0

onEvent('block.tags', event => {
	[
		'byg:boric_campfire'        ,	// Oh The Biomes You'll Go
		'byg:cryptic_campfire'      ,
		'endergetic:ender_campfire'		// Endergetic Expansion
	].forEach(campfire => event.add('create:fan_heaters', campfire));
});