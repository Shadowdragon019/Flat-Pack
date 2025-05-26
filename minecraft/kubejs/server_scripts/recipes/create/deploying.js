ServerEvents.recipes(event => {
	event.recipes.create.deploying('create:cogwheel', ['create:shaft', 'spruce_planks'])
	event.recipes.create.deploying('create:large_cogwheel', ['create:cogwheel', 'spruce_planks'])
})
