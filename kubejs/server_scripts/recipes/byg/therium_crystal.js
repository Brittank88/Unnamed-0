// priority: 0

onEvent('recipes', event => {
    // 4x Therium Shard => Therium Crystal
    event.shaped('byg:therium_crystal', [
        'SS' ,
        'SS'
    ], { S: 'byg:therium_shard' });
});