// priority: 0

onEvent('jei.hide.items', event => {
	[
		'ironchest:copper_to_silver_chest_upgrade' ,    // Silver-Based Items
		'ironchest:silver_to_gold_chest_upgrade'   ,
		'ironchest:silver_chest'
	].forEach(item => event.hide(item));
});