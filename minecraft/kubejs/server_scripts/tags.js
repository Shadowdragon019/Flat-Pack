ServerEvents.tags(`worldgen/biome`, event => {
	//event.get(`has_structure/village_plains`).removeAll()
	event.removeAllTagsFrom(`plains`)
})

ServerEvents.tags(`worldgen/flat_level_generator_preset`, event => {
	event.get(`visible`).removeAll()
	event.get(`visible`).add(`kubejs:default`)
})
