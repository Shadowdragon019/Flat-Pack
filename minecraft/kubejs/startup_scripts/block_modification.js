BlockEvents.modification(event => {
	for (var block of ["stone", "dirt", "gravel", "raw_iron_block"]) {
		event.modify(block, modifiedBlock => {
			modifiedBlock.destroySpeed = -1
			modifiedBlock.explosionResistance = 999999
		})
	}
})
