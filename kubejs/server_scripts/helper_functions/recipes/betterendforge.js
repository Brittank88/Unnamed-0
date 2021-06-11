// priority: 99

onEvent('recipes', event => {

    // Create root to attach recipe types to.
    event.recipes.betterendforge = {};

    // Infusion Recipe
    // Example:
    /*
    {
        "type": "betterendforge:infusion"                               ,
        "input": { "item": "betterendforge:terminite_chestplate" }      ,
        "output": "betterendforge:crystalite_chestplate"                ,
        "time": 300                                                     ,
        "catalysts": [
            { "item" : "betterendforge:amber_gem"       , "index" : 0 } ,
            { "item" : "betterendforge:crystal_shards"  , "index" : 1 } ,
            { "item" : "betterendforge:crystal_shards"  , "index" : 3 } ,
            { "item" : "betterendforge:crystal_shards"  , "index" : 5 } ,
            { "item" : "betterendforge:crystal_shards"  , "index" : 7 }
        ]
    }
    */
	event.recipes.betterendforge.infusion = function(center, output, catalysts) {
		event.custom({
			type      : 'betterendforge:infusion' ,
			input     : { item : center }         ,
			output    : output                    ,
			catalysts : catalysts.filter(c => !!c).map((c, i) => { return { item : c, index : i } })
		});
	};

    // Anvil Smithing Recipe
    // Example:
    /*
    {
        "type": "betterendforge:anvil_smithing"               ,
        "input": { "item": "betterendforge:aeternium_ingot" } ,
        "result": "betterendforge:aeternium_hammer_head"      ,
        "level": 4                                            ,
        "damage": 6                                           ,
        "anvilLevel": 5
    }
    */
	event.recipes.betterendforge.anvil_smithing = function(input, output, toolLevel, anvilLevel, anvilDamage) {
		event.custom({
			type       : 'betterendforge:anvil_smithing' ,
			input      : { item : input }                ,
			result     : output                          ,
			level      : toolLevel                       ,
			damage     : anvilDamage                     ,
			anvilLevel : anvilLevel                      ,
		});
	};

    // Alloying Recipe
    // Example:
    /*
    {
        "type": "betterendforge:alloying"                                                                          ,
        "ingredients": [ { "item": "betterendforge:terminite_ingot" } , { "item" : "minecraft:netherite_ingot" } ] ,
        "result": "betterendforge:aeternium_ingot"                                                                 ,
        "experience": 4.5                                                                                          ,
        "smelttime": 600
    }
    */
    event.recipes.betterendforge.alloying = function(ingredientL, ingredientR, output, experience, smeltTime) {
        event.custom({
            type        : 'betterendforge:alloying'                           ,
            ingredients : [ { item : ingredientL } , { item : ingredientR } ] ,
            result      : output                                              ,
            experience  : experience                                          ,
            smelttime   : smeltTime
        });
    };
});