// priority: 0

onEvent('recipes', event => {
	event.smithing('minecraft:iron_horse_armor'    , 'minecraft:leather_horse_armor' , 'minecraft:iron_ingot'); // Leather   => Iron
	event.smithing('minecraft:golden_horse_armor'  , 'minecraft:iron_horse_armor'    , 'minecraft:gold_ingot'); // Iron      => Gold
	event.smithing('minecraft:diamond_horse_armor' , 'minecraft:golden_horse_armor'  , 'minecraft:diamond'   ); // Gold      => Diamond
	event.smithing('byg:pendorite_horse_armor'     , 'minecraft:diamond_horse_armor' , 'byg:pendorite_scraps'); // Diamond   => Pendorite
	event.smithing('byg:ametrine_horse_armor'      , 'byg:pendorite_horse_armor'     , 'byg:ametrine_gems'   ); // Pendorite => Ametrine
});