// priority: 0

onEvent('jei.hide.items', event => {
	[
		'mutantbeasts:chemical_x',
		'mutantbeasts:spider_pig_spawn_egg',
		'mutantbeasts:creeper_minion_tracker'
	].forEach(item => event.hide(item));
});