# PlayerEvents.chat

## Basic info

- Valid script types: [SERVER]

- Has result? ✔

- Event class: [PlayerChatDecorateEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/player/PlayerChatDecorateEventJS.java)

```
Invoked when a player sends a chat message.

If cancelled (`PlayerEvents.chat`), the message will not be sent.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| chatComponent | ChatComponent | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getUsername |  |  | String | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getMessage |  |  | String | ✘ |
| getComponent |  |  | Component | ✘ |
| setMessage | Component |  | void | ✘ |
| setComponent | Component |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| removeGameStage | String |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `String getUsername()`
```
Gets the username of the player that sent the message.
```

- `LivingEntity getEntity()`
```
Gets the player that sent the message.
```

- `String getMessage()`
```
Gets the message that the player sent.
```

- `Component getComponent()`
```
Gets the message that the player sent.
```

- `void setMessage(Component var0)`

  Parameters:
  - var0: Component

```
Sets the message that the player sent.
```

- `void setComponent(Component var0)`

  Parameters:
  - var0: Component

```
Sets the message that the player sent.
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

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
PlayerEvents.chat((event) => {
	// This space (un)intentionally left blank
});
```

