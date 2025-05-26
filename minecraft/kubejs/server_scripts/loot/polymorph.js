LootJS.modifiers(event => {
	for (let loot_table of ['create:large_water_wheel', 'create:encased_chain_drive', 'create:encased_fan', 'create:hand_crank', 'create:mechanical_press', 'create:basin', 'create:depot', 'create:speedometer', 'create:mechanical_bearing', 'create:mechanical_drill', 'create:deployer', 'create:portable_storage_interface', 'create:brass_tunnel', 'create:brass_funnel', 'create:mechanical_saw', 'create:nozzle', 'create:crushing_wheels'])
		event.addBlockLootModifier(loot_table).replaceLoot(ItemFilter.ALWAYS_TRUE, 'create:andesite_casing')

	for (let loot_table of ['scaffolding', 'barrel'])
		event.addBlockLootModifier(loot_table).replaceLoot(ItemFilter.ALWAYS_TRUE, 'spruce_planks')
})
