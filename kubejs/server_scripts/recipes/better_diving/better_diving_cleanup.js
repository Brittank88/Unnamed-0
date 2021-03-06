// priority: 0

// NOTE: Non-vanilla (or copper) chunks are removed via data folder.

onEvent('recipes', event => {
	// Save chunk recipes we wish to keep.
	let savedChunkRecipeJSONs = [];
	[
		'better_diving:coal_chunk'    ,
		'better_diving:iron_chunk'    ,
		'better_diving:gold_chunk'    ,
		'better_diving:lapis_chunk'   ,
		'better_diving:redstone_chunk',
		'better_diving:diamond_chunk' ,
		'better_diving:emerald_chunk' ,
	].forEach(chunk => event.forEachRecipe({input: chunk}, recipe => savedChunkRecipeJSONs.push(recipe.json)));
	
	// Remove all recipes from the mod.
	event.remove({mod: 'better_diving'});
	
	// Also clean all other recipes using new materials added by this mod that we have hidden.
	[
		'better_diving:silver_ingot'  ,
		'better_diving:lead_ingot'    ,
		'better_diving:lithium_ingot' ,
		'better_diving:titanium_ingot'
	].forEach(material => event.remove({input: material}));
	
	// Also clear recipes auto-generated by create that the general event.remove doesn't seem to cover.
	event.remove({id : 'create:crushing/silver_ore'});
	event.remove({id : 'create:milling/silver_ore' });
	event.remove({id : 'create:crushing/lead_ore'  });
	event.remove({id : 'create:milling/lead_ore'   });

	// Also clear recipes from Colossal Chests using input items that were created using silver.
	event.remove({input: 'colossalchests:chest_wall_silver'});

	// Also clear Iron Chests silver to gold chest upgrade (doesn't even use silver???).
	event.remove({id: 'ironchest:upgrades/silver_to_gold_chest_upgrade'});
	
	// Reinstate saved recipes.
	savedChunkRecipeJSONs.forEach(recipeJSON => event.custom(recipeJSON));
});