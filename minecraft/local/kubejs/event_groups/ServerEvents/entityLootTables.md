# ServerEvents.entityLootTables

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [EntityLootEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/loot/EntityLootEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| modifyEntity | EntityType<?>, Consumer<LootBuilder> |  | void | ✘ |
| getType |  |  | String | ✘ |
| addEntity | EntityType<?>, Consumer<LootBuilder> |  | void | ✘ |
| getDirectory |  |  | String | ✘ |
| addJson | ResourceLocation, JsonObject |  | void | ✘ |
| removeAll |  |  | void | ✘ |
| modify | ResourceLocation, Consumer<LootBuilder> |  | void | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
ServerEvents.entityLootTables((event) => {
	// This space (un)intentionally left blank
});
```

