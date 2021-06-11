// priority: 0

onEvent('jei.hide.items', event => {
	[
		// We use the Create copper ingot.
		'caves_and_cliffs_mod:copper_ingot'
	].forEach(item => event.hide(item));
});