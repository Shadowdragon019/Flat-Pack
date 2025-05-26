//crafting, anvil, brewing, compostable, fuel, create:draining, create:item_application, create:mystery_conversion, create:packing, create:pressing, create:spout_filling, lychee:item_inside/minecraft/default
JEIEvents.removeCategories(event => {
	event.remove("anvil")
	event.remove("fuel")
	event.remove("brewing")
	event.remove("compostable")
	event.remove("create:mystery_conversion")
	event.remove("create:draining")
	event.remove("create:spout_filling")
})
