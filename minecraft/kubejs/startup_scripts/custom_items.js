StartupEvents.registry('item', event => {
	// Trees
	event.create('hot_raw_iron')
	event.create('hot_raw_iron_sheet')
	event.create('lube')
	event.create('incomplete_iron_casing', 'create:sequenced_assembly')
})
