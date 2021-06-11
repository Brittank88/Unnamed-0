// priority: 0

onEvent('recipes', event => {
    // Make copper furnaces mandatory for progression (ironfurnaces:iron_furnace2 is the recipe ID that uses a copper furnace).
	event.remove({id: 'ironfurnaces:iron_furnace'});
});