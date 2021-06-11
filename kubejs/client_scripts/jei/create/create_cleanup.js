// priority: 0

onEvent('jei.hide.items', event => {
    [
		'create:crushed_silver_ore' ,   // Auto-Generated
		'create:crushed_lead_ore'
	].forEach(item => event.hide(item));
});