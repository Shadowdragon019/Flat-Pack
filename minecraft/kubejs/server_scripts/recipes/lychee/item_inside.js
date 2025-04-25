ServerEvents.recipes(event => {
	event.custom({
		type: "lychee:item_inside",
		item_in: {
			item: "raw_iron"
		},
		block_in: {
			blocks: ["lava"],
			state: {
				level: 0
			}
		},
		post: [{
			type: "drop_item",
			item: "kubejs:hot_raw_iron"
		},{
			type: "place",
			block: "air"
		}]
	})

	event.custom({
		type: "lychee:item_inside",
		item_in: {
			item: "kubejs:hot_raw_iron_sheet"
		},
		block_in: {
			blocks: ["water"],
			state: {
				level: 0
			}
		},
		post: [{
			type: "drop_item",
			item: "create:iron_sheet"
		},{
			type: "place",
			block: "air"
		}]
	})
})
