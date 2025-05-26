ServerEvents.recipes(event => {
	event.recipes.create.cutting('spruce_planks', 'spruce_log').id('kubejs:sawing/spruce_planks_requires_dry')
	event.recipes.create.cutting('2x spruce_planks', 'spruce_log').id('kubejs:sawing/spruce_planks_requires_lube')
	event.recipes.create.cutting('2x create:shaft', 'create:iron_sheet').id('kubejs:sawing/shaft_requires_dry')
	event.recipes.create.cutting('4x create:shaft', 'create:iron_sheet').id('kubejs:sawing/shaft_requires_lube')
})
