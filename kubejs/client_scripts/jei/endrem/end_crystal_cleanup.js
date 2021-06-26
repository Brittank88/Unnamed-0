// priority: 0

onEvent('jei.hide.items', event => {
    [
        'endrem:end_crystal_hoe'         ,  // Tools
        'endrem:end_crystal_pickaxe'     ,
        'endrem:end_crystal_axe'         ,
        'endrem:end_crystal_sword'       ,
        'endrem:end_crystal_shovel'      ,
        'endrem:end_crystal_helmet'      ,  // Player Armour
        'endrem:end_crystal_chestplate'  ,
        'endrem:end_crystal_leggings'    ,
        'endrem:end_crystal_boots'       ,
        'endrem:end_crystal_horse_armor'    // Horse Armour
    ].forEach(item => event.hide(Item.of(item).ignoreNBT()))
});