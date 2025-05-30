# LootJS.modifiers

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: LootModificationEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| enableLogging |  |  | void | ✘ |
| disableLootModification | ResourceLocationFilter[] |  | void | ✘ |
| addLootTableModifier | ResourceLocationFilter[] |  | LootActionsBuilderJS | ✘ |
| addLootTypeModifier | LootContextType[] |  | LootActionsBuilderJS | ✘ |
| addBlockLootModifier | Object |  | LootActionsBuilderJS | ✘ |
| addEntityLootModifier | EntityType<?>[] |  | LootActionsBuilderJS | ✘ |
| disableWitherStarDrop |  |  | void | ✘ |
| disableCreeperHeadDrop |  |  | void | ✘ |
| disableSkeletonHeadDrop |  |  | void | ✘ |
| disableZombieHeadDrop |  |  | void | ✘ |
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
LootJS.modifiers((event) => {
	// This space (un)intentionally left blank
});
```

