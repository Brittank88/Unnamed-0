// priority: 0

onEvent('item.tags', event => {
    event.remove( 'curios:charm' , 'minecraft:totem_of_undying' );
    event.remove( 'curios:back'  , 'minecraft:elytra'           );
    event.remove( 'curios:back'  , 'quark:backpack'             );
    event.remove( 'curios:charm' , 'apotheosis:potion_charm'    );
});