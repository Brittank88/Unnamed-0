// priority: 0

onEvent('jei.hide.items', event => {
	[
		'better_diving:titanium_chunk'              ,   // Chunks
		'better_diving:silver_chunk'                ,
		'better_diving:lead_chunk'                  ,
		'better_diving:lithium_chunk'               ,
		'better_diving:titanium_ingot'              ,   // Ingots
		'better_diving:silver_ingot'                ,
		'better_diving:lead_ingot'                  ,
		'better_diving:lithium_ingot'               ,
		'better_diving:copper_ingot'                ,
		'better_diving:titanium_block'              ,   // Blocks
		'better_diving:silver_block'                ,
		'better_diving:lead_block'                  ,
		'better_diving:lithium_block'               ,
		'better_diving:copper_block'                ,
		'better_diving:fiber_mesh'                  ,   // Equipment
		'better_diving:power_cell'                  ,
		'better_diving:seamoth'                     ,
		'better_diving:diving_mask'                 ,
		'better_diving:standard_o2_tank'            ,
		'better_diving:wetsuit_leggings'            ,
		'better_diving:fins'                        ,
		'better_diving:rebreather'                  ,
		'better_diving:high_capacity_o2_tank'       ,
		'better_diving:improved_wetsuit_leggings'   ,
		'better_diving:ultra_glide_fins'            ,
		'better_diving:reinforced_diving_mask'      ,
		'better_diving:reinforced_o2_tank'          ,
		'better_diving:reinforced_wetsuit_leggings' ,
		'better_diving:reinforced_fins'
	].forEach(item => event.hide(Item.of(item).ignoreNBT()));
});