// priority: 0

onEvent('recipes', event => {

    //#// Helmet, Chestplate, Leggings, Boots //#//

	[
		'helmet',
		'chestplate',
		'leggings',
		'boots'
	].forEach(armourType => {

		// Make terminite armour reliant on thallasium armour.
		event.remove({id : `betterendforge:terminite_${armourType}`});
		event.smithing(`betterendforge:terminite_${armourType}`, `betterendforge:thallasium_${armourType}`, 'betterendforge:terminite_block');

		// Make crystalite armour reliant on ametrine armour.
		event.remove({id : `betterendforge:crystalite_${armourType}`});
		event.recipes.betterendforge.infusion(
			`byg:ametrine_${armourType}`                 ,
			`betterendforge:crystalite_${armourType}`    ,
			[
				'betterendforge:amber_gem'               ,
				'betterendforge:crystal_shards'          ,
				'quark:diamond_heart'                    ,
				'betterendforge:crystal_shards'          ,
				`betterendforge:terminite_${armourType}` ,
				'betterendforge:crystal_shards'          ,
				'quark:diamond_heart'                    ,
				'betterendforge:crystal_shards'
			]
		);

		// Make aeternium armour reliant on crystalite armour.
		event.remove({id : `betterendforge:aeternium_${armourType}_smithing`});
		event.smithing(`betterendforge:aeternium_${armourType}`, `betterendforge:crystalite_${armourType}`, 'betterendforge:aeternium_block');
	});
});