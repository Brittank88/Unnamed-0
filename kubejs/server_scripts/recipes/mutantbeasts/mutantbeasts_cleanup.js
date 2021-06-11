// priority: 0

onEvent('recipes', event => {
	[
		// We don't want Chemical X to ever get into the hands of players, holy crap.
		// This also disables the Spider Pig, which is probably for the better...
		'mutantbeasts:chemical_x',
		// We don't even want to be able to tame creeper minions.
		'mutantbeasts:creeper_minion_tracker'
	].forEach(item => event.remove({ output: item }));
});