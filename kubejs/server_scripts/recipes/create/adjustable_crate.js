// priority: 0

onEvent('recipes', event => {

    // Remove original crate recipe.
    event.remove({ id : 'create:crafting/logistics/adjustable_crate' });

    // Add new crate recipe.
    event.shaped('4x create:adjustable_crate', [
        'BBB',
        'BCB',
        'BBB'
    ], {
        B : 'create:brass_casing'  ,
        C : 'quark:crate'
    });

});