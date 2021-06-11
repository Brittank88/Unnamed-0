// priority: 0

onEvent('jei.hide.items', event => {
    [
		'colossalchests:chest_wall_silver'     ,    // Silver-Based Items
		'colossalchests:colossal_chest_silver' ,
		'colossalchests:interface_silver'
	].forEach(item => event.hide(item));
});