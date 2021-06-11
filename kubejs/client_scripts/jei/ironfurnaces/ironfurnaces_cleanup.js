// priority: 0

onEvent('jei.hide.items', event => {
	[
		'ironfurnaces:silver_furnace'  ,    // Silver-Based Items
		'ironfurnaces:upgrade_silver'  ,
		'ironfurnaces:upgrade_gold2'   ,
		'ironfurnaces:upgrade_silver2' ,
		'ironfurnaces:heater'          ,    // Wireless Heating
		'ironfurnaces:item_heater'
	].forEach(item => event.hide(item));
});