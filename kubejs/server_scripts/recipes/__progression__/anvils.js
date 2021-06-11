// priority: 0

onEvent('recipes', event => {
	// Make thalassium anvil rely on iron anvil.
	event.remove({ id : 'betterendforge:thallasium_anvil' });
	event.smithing('betterendforge:thallasium_anvil', 'minecraft:anvil', 'betterendforge:thallasium_block');

	// Force terminite anvil to rely on thalassium anvil.
	event.remove({ id : 'betterendforge:terminite_anvil' });
});