// priority: 0

onEvent('recipes', event => {
	// Give OP recipe to rainbow coal.
	event.recipes.betterendforge.infusion(
		'biomesoplenty:rainbow_birch_sapling' ,
		'ironfurnaces:rainbow_coal'           ,
		[
			'quark:rainbow_rune'              ,
			'minecraft:coal_block'            ,
			'minecraft:lava_bucket'           ,
			'minecraft:coal_block'            ,
			'ironfurnaces:rainbow_plating'    ,
			'quark:charcoal_block'            ,
			'minecraft:lava_bucket'           ,
			'quark:charcoal_block'
		]
	);
});