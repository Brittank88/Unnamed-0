// priority: 0

// Vary the 'power' of spawned phantoms in the lostcities dimension.
onEvent('entity.spawned', event => {

    // Must be a phantom, must be in the lostcities dimension.
	if (event.entity.type == 'minecraft:phantom' && event.entity.world.dimension == 'lostcities:lostcity') {

		// Get the full NBT of the phantom.
		let NBT = event.entity.fullNBT;

		// Calculate how much we are going to 'grow' it.
		let growthFactor = Math.floor(Math.random() * 4) + 1;
		
		// Modify all target attributes (attack damage, movement speed) in retrieved NBT.
		NBT.Attributes.forEach(attribute => { if (['minecraft:generic.attack_damage', 'minecraft:generic.movement_speed'].includes(attribute.Name)) attribute.Base *= growthFactor; });

		// Also set the size appropriately.
		NBT.Size = Math.pow(growthFactor, 1.5);

		// Set the entity's NBT to our new NBT.
		event.entity.fullNBT = NBT;

		// Now that the NBT is set, we can safely set max health and current health.
		event.entity.maxHealth *= growthFactor;
		event.entity.health    *= growthFactor;
	}
});

// Prevent phantoms from taking suffocation damage (fixes large phantoms suffocating in walls they fly into).
onEvent('entity.attack', event => {
	// Prevents large phantoms from suffocating in walls they fly into.
	if (event.entity.type == 'minecraft:phantom' && event.entity.world.dimension == 'lostcities:lostcity' && event.source.type == 'inWall') event.cancel();
});