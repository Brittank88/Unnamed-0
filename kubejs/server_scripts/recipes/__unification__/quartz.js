// priority: 1

onEvent('recipes', event => {
	event.replaceInput ({} , 'minecraft:quartz'   , '#forge:gems/quartz');
	event.replaceInput ({} , 'byg:quartz_crystal' , '#forge:gems/quartz');
	event.replaceOutput({} , 'minecraft:quartz'   , '#forge:gems/quartz');
	event.replaceOutput({} , 'byg:quartz_crystal' , '#forge:gems/quartz');
});