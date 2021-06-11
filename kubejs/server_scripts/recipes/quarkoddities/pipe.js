// priority: 0

onEvent('recipes', event => {
    // Remove original pipe recipe.
    event.remove({ id : 'quark:oddities/crafting/pipe' });

    // Add new pipe recipe.
    event.shaped('16x quark:pipe', [
        ' H ' ,
        'AGA' ,
        ' C '
    ], {
        A : 'create:andesite_alloy'  , 
        G : '#forge:glass'           ,
        H : 'minecraft:hopper'       ,
        C : 'quark:chute'
    });
});