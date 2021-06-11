// priority: 0

onEvent('item.right_click', event => {

    // Player needs to be sneaking and holding an item for this feature.
	if (event.item && event.player.crouching) {

        // Ray trace to get the block we're looking at so we can get info about it.
	    let ray = event.player.rayTrace();

		// Water potions can place water puddles on the ground if the player is sneaking.
		if (event.item.id == 'minecraft:potion' && event.item.getNbt().Potion == 'minecraft:water') {

			// If the block we're looking at is solid, and the block above that is air, and we're looking at the top of the block, we can place a water puddle on top.
			if (ray && ray.block && ray.block.id != 'minecraft:air' && ray.facing == 'up' && ray.block.up.id == 'minecraft:air') {

				// Place the water puddle.
				ray.block.up.set('subwild:water_puddle');

				// Replace the water bottle in the player's hand with an empty one.
				event.player.setMainHandItem(Item.of('minecraft:glass_bottle'));

				// Play a sound!
				event.player.playSound('minecraft:item.bottle.empty', 100, 1);

				// Cancel the event, we're not doing the standard drinking event.
				event.cancel();
			}

		// Glass bottles can pick up water puddles from the ground if the player is sneaking.
		} else if (event.item.id == 'minecraft:glass_bottle') {

			// If the block we're looking at has a water puddle above it, and we're looking at the top of the block, we know there's an attempt to bottle the puddle.
			if (ray && ray.block && ray.block.up.id == 'subwild:water_puddle' && ray.facing == 'up') {

				let waterBottle = Item.of('minecraft:potion', { Potion : 'minecraft:water' });

				// If there are multiple glass bottles in the held itemstack, we need to account for this.
				let bottleCount = event.player.getMainHandItem().getCount();
				if (bottleCount > 1) {

					// Test if we can give the player a water bottle. If we can, we've also simultaneously done so and will have recorded the viable slot.
					let insertRes;
					for (slot = 0; slot < 36; slot++) { if ((insertRes = event.player.inventory.insert(slot, waterBottle, false)) == item.empty) break; }
					// Also test offhand item (ID of which is -106, which currently causes errors because it's negative).
					if (insertRes != item.empty && event.player.getOffHandItem() == item.empty) { event.player.setOffHandItem(waterBottle); insertRes = item.empty; }

					// If nothing was viable, cancel the event, return and don't remove the puddle.
					if (insertRes != item.empty) { event.cancel(); return; }

					// Remove one glass bottle if we were able to give the player a water bottle.
					event.player.getMainHandItem().setCount(bottleCount - 1);

				// If there's only one glass bottle, replace the empty bottle in the player's hand with a water bottle.
				} else event.player.setMainHandItem(waterBottle);

				// Remove the water puddle, because we know we can successfully bottle and store it.
				ray.block.up.set('minecraft:air');

				// Play a sound!
				event.player.playSound('minecraft:item.bottle.fill', 100, 1);

				// Cancel the event, we've intercepted it.
				event.cancel();
			}
		}
	}
});