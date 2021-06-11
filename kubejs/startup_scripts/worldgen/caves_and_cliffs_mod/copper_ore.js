// priority: 0

onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
		// Remove Caves and Cliffs Mod stone-based copper ore (but keep deepslate variant).
		ores.blocks = ['caves_and_cliffs_mod:copper_ore'];
	});
});