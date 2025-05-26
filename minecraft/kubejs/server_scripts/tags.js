ServerEvents.tags('worldgen/biome', event => {
	//event.get('has_structure/village_plains').removeAll()
	event.removeAllTagsFrom('plains')
})

ServerEvents.tags('worldgen/flat_level_generator_preset', event => {
	event.get('visible').removeAll()
	event.get('visible').add('kubejs:default')
})

ServerEvents.tags('block', event => {
	event.get('create:wrench_pickup').add(['functionalstorage:oak_4', 'functionalstorage:oak_2', 'functionalstorage:oak_1', 'minecraft:scaffolding'])
	event.get('kswitch:ignore').add('spruce_log', 'create:white_toolbox', 'create:orange_toolbox', 'create:magneta_toolbox', 'create:light_blue_toolbox', 'create:yellow_toolbox', 'create:lime_toolbox', 'create:pink_toolbox', 'create:gray_toolbox', 'create:light_gray_toolbox', 'create:cyan_toolbox', 'create:purple_toolbox', 'create:blue_toolbox', 'create:green_toolbox', 'create:red_toolbox', 'create:black_toolbox', 'spruce_stairs', 'spruce_slab', 'spruce_fence', 'spruce_button')
})


ServerEvents.tags('item', event => {
	event.get('flat_pack_tweaks:lube').removeAll()
	event.get('flat_pack_tweaks:lube').add(['kubejs:lube'])
})
