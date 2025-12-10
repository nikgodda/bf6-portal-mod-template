# BF6 Portal Mod Template

This is the official starter template for creating Battlefield 6 Portal Mods using TypeScript.

It provides:

-   clean project structure
-   ready main.ts and AGameMode
-   SDK typings
-   automatic merging into \_\_SCRIPT.ts
-   automatic string generation into \_\_STRINGS.json
-   integration with bf6-portal-mod-framework

---

# 🧱 Project Structure

```
my-mod/
│   package.json
│   tsconfig.json
│   __SCRIPT.ts
│   __STRINGS.json
│
├─ SDK/
│   ├─ mod/
│   └─ modlib/
│
└─ src/
    ├─ main.ts
    ├─ Core/
    │    └─ AGameMode.ts
    └─ GameModes/
         (your modes here)
```

---

# 🚀 Installation

```bash
npm install
```

---

# ⚙ Commands

### Build (merge + strings)

```bash
npm run build
```

Produces:

```
__SCRIPT.ts
__STRINGS.json
```

---

### Watch (merge only)

```bash
npm run watch
```

---

### Update SDK

```bash
npm run update-sdk
```

---

# 🎮 How Mods Run

main.ts:

```ts
import { MyGameMode } from './GameModes/MyGameMode'
export const gameMode = new MyGameMode()
```

---

# 💬 Strings System

Generates:

```
__STRINGS.json
```

Supports:

-   static keys
-   parameters
-   mod.stringkeys
-   dynamic template literal references
-   annotation-based dynamic values

---

## 1️⃣ Static Strings

```ts
mod.Message('hello')
```

Produces:

```json
{
    "hello": "hello"
}
```

---

### With Parameters

```ts
mod.Message('static.messageWithParams', 1)
```

Produces:

```json
{
    "static": {
        "messageWithParams": "static.messageWithParams {}"
    }
}
```

---

### Static StringKey

```ts
mod.stringkeys.static.stringkey
```

Produces:

```json
{
    "static": {
        "stringkey": "static.stringkey"
    }
}
```

---

## 2️⃣ Dynamic Strings (Correct Behavior)

Dynamic strings do not produce keys:

```ts
mod.Message(`ai.bots.${i}`)
```

Only annotations do:

```ts
// @stringkeys ai.bots: 0..3
mod.Message(`ai.bots.${i}`)
```

Generates:

```json
{
    "ai": {
        "bots": {
            "0": "ai.bots.0",
            "1": "ai.bots.1",
            "2": "ai.bots.2",
            "3": "ai.bots.3"
        }
    }
}
```

---

## 3️⃣ @stringkeys Annotation

Examples:

```ts
// @stringkeys ui.buttons: OK, Cancel, Retry
// @stringkeys ai.state: Idle, Roam, Fight
// @stringkeys ai.bots: 0..3
// @stringkeys rank: A..F
```

Always generates nested output.

---

## 🔥 Full Example

Code:

```ts
mod.Message(`test`)
mod.Message(`static.message`)
mod.Message(`static.messageWithParams`, 1)
mod.stringkeys.static.stringkey

// @stringkeys dynamic.range: 1..2
mod.Message(`dynamic.range.${i}`)

// @stringkeys dynamic.list: Idle, Roam, Fight
mod.Message(`dynamic.list.${state}`)
```

Output:

```json
{
    "dynamic": {
        "range": {
            "1": "dynamic.range.1",
            "2": "dynamic.range.2"
        },
        "list": {
            "Idle": "dynamic.list.Idle",
            "Roam": "dynamic.list.Roam",
            "Fight": "dynamic.list.Fight"
        }
    },
    "test": "test",
    "static": {
        "message": "static.message",
        "messageWithParams": "static.messageWithParams {}",
        "stringkey": "static.stringkey"
    }
}
```

---

# 🧩 Framework Reference

Framework repo:

https://github.com/nikgodda/bf6-portal-mod-framework

The template maps npm scripts to the framework:

```
npm run build       → bf6mod build
npm run watch       → bf6mod watch
npm run update-sdk  → bf6mod update-sdk
```

---

# 📜 License

MIT
