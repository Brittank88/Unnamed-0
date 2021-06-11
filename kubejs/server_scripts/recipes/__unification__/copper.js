// priority: 0

onEvent('recipes', event => {
    [   // Copper Ingot
        'better_diving:copper_ingot'
    ].forEach(ingot => {
        event.replaceOutput({} , ingot , 'create:copper_ingot');
        event.replaceInput ({} , ingot , 'create:copper_ingot');
    });

    [   // Copper Block
        'better_diving:copper_block'
    ].forEach(block => {
        event.replaceOutput({} , block , 'create:copper_block');
        event.replaceInput ({} , block , 'create:copper_block');
    });
});