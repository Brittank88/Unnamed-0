// priority: 0

onEvent('entity_type.tags', event => {
    // Blacklisting entities from being visible in WTHIT.
	[
		'immersive_portals:border_portal'            ,	// Immersive Portals
		'immersive_portals:breakable_mirror'         ,
		'immersive_portals:end_floor_portal'         ,
		'immersive_portals:end_portal'               ,
		'immersive_portals:general_breakable_portal' ,
		'immersive_portals:global_tracked_portal'    ,
		'immersive_portals:loading_indicator'        ,
		'immersive_portals:mirror'                   ,
		'immersive_portals:nether_portal_new'        ,
		'immersive_portals:portal'
	].forEach(entity => event.add('waila:blacklist', entity));
});