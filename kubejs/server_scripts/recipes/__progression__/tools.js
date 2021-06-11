// priority: 0

onEvent('recipes', event => {

    //#// Hammer //#//

	// Make Thallasium Smith Hammer rely on Iron Smith Hammer
	event.remove({ id : 'betterendforge:thallasium_hammer_smithing' });
	event.smithing('betterendforge:thallasium_hammer', 'betterendforge:iron_hammer', 'betterendforge:thallasium_block');

	// Make Terminite Smith Hammer rely on Thallasium Smith Hammer
	event.remove({ id : 'betterendforge:terminite_hammer_smithing' });
	event.smithing('betterendforge:terminite_hammer', 'betterendforge:thallasium_hammer', 'betterendforge:terminite_block');

	// Make Aeternium Hammer Head require Aeternium Smith Hammer or Terminite Smith Hammer (instead of Netherite Smith Hammer).
	// event.remove({ id : 'betterendforge:aeternium_hammer_head' });

    //#// Sword, Shovel, Pickaxe, Axe, Hoe //#//

	[
		'sword'   ,
		'shovel'  ,
		'pickaxe' ,
		'axe'     ,
		'hoe'
	].forEach(toolType => {

		if (toolType == 'sword') {
	
			// Make terminite sword handle and blade dependent on thallasium sword handle and blade.
			event.remove({ id : 'betterendforge:terminite_sword_handle_smithing' });
			event.remove({ id : 'betterendforge:terminite_sword_blade'  });
			event.smithing('betterendforge:terminite_sword_handle' , 'betterendforge:thallasium_sword_handle' , 'betterendforge:terminite_ingot');
			event.smithing('betterendforge:terminite_sword_blade'  , 'betterendforge:thallasium_sword_blade'  , 'betterendforge:terminite_ingot');

			// Make aeternium sword handle and blade depend on terminite sword handle and blade.
			event.remove({ id : 'betterendforge:aeternium_sword_handle_smithing' });
			event.remove({ id : 'betterendforge:aeternium_sword_blade'  });
			event.smithing('betterendforge:aeternium_sword_handle' , 'betterendforge:terminite_sword_handle' , 'betterendforge:aeternium_ingot');
			event.smithing('betterendforge:aeternium_sword_blade'  , 'betterendforge:terminite_sword_blade'  , 'betterendforge:aeternium_ingot');

		} else {

			// Make terminite tool components dependent on thallasium tool components.
			event.remove({ id : `betterendforge:terminite_${toolType}_head` });
			event.smithing(`betterendforge:terminite_${toolType}_head`, `betterendforge:thallasium_${toolType}_head`, 'betterendforge:terminite_ingot');

			// Make aeternium tool components depend on terminite head components.
			event.remove({ id : `betterendforge:aeternium_${toolType}_head` });
			event.smithing(`betterendforge:aeternium_${toolType}_head`, `betterendforge:terminite_${toolType}_head`, 'betterendforge:aeternium_ingot');
		}

		// Make pendorite tools and weapons depend on aeternium tools and weapons.
		event.remove({ id : `byg:pendorite_${toolType}` });
		event.smithing(`byg:pendorite_${toolType}`, `betterendforge:aeternium_${toolType}`, 'byg:pendorite_scraps');
	});
});