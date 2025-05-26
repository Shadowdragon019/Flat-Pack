ServerEvents.recipes(event => {
	event.custom({
		type: 'lychee:item_inside',
		item_in: {
			item: 'slime_ball'
		},
		block_in: 'fire',
		post: [{
			type: 'drop_item',
			item: 'kubejs:lube'
		},{
			type: 'place',
			block: 'air'
		}]
	})

	event.custom({
		type: 'lychee:item_inside',
		item_in: {
			item: 'raw_iron'
		},
		block_in: 'fire',
		post: [{
			type: 'drop_item',
			item: 'kubejs:hot_raw_iron'
		},{
			type: 'place',
			block: 'air'
		}]
	})

	event.custom({
		type: 'lychee:item_inside',
		ghost: true,
		item_in: {
			item: 'kubejs:hot_raw_iron_sheet'
		},
		block_in: 'water',
		post: [{
			type: 'drop_item',
			item: 'create:iron_sheet'
		}]
	})

	event.custom({
		type: 'lychee:item_inside',
		ghost: true,
		item_in: {
			item: 'kubejs:hot_raw_iron'
		},
		block_in: 'water',
		post: [{
			type: 'drop_item',
			item: 'create:iron_sheet'
		}]
	})
})
