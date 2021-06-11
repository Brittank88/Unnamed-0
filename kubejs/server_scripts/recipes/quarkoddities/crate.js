// priority: 0

onEvent('recipes', event => {
    // Remove original crate recipe.
    event.remove({ id : 'quark:oddities/crafting/crate' });

    // Add new crate recipe.
    event.shaped('quark:crate', [
        'APA',
        'PCP',
        'APA'
    ], {
        A : 'create:andesite_alloy' , 
        P : '#minecraft:planks'     ,
        C : '#forge:chests/wooden'
    });
});