// priority: 0

onEvent('recipes', event => {
    // Remove wireless heating recipes.
	event.remove({ id : 'ironfurnaces:heater'      });
	event.remove({ id : 'ironfurnaces:item_heater' });
});