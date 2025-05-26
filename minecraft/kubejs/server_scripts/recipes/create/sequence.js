ServerEvents.recipes(event => {
	let trans = ''

	trans = 'kubejs:incomplete_iron_casing'
	event.recipes.create.sequenced_assembly(['create:andesite_casing'], 'spruce_log', [
		event.recipes.createDeploying(trans, [trans, 'slime_ball']),
		event.recipes.createDeploying(trans, [trans, 'create:iron_sheet']),
		event.recipes.createDeploying(trans, [trans, 'spruce_planks']),
		event.recipes.createCutting(trans, trans),
	]).transitionalItem(trans).loops(4)

})
