// priority: 0

onEvent('jei.hide.items', event => {
	[
		'#subwild:coal_ores'     ,	// Ore Variants
		'#subwild:iron_ores'     ,
		'#subwild:gold_ores'     ,
		'#subwild:lapis_ores'    ,
		'#subwild:redstone_ores' ,
		'#subwild:diamond_ores'  ,
		'#subwild:emerald_ores'
	].forEach(type => {
		let ingredient = Ingredient.of(type);
		if (ingredient) ingredient.getStacks().toArray().forEach(stack => event.hide(stack.getId()));
	});
});