# BF6 Portal Mod Template

This is the official starter template for creating Battlefield 6 Portal Mods using TypeScript.

It provides:

- clean project structure  
- ready main.ts and AGameMode  
- SDK typings  
- automatic merging into __SCRIPT.ts  
- automatic string generation into __STRINGS.json  
- integration with bf6-portal-mod-framework  

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

All strings go into:

```
__STRINGS.json
```

Supports:

- static keys  
- parameters  
- mod.stringkeys  
- dynamic template literals (as references)  
- annotation-based dynamic strings  

---

## 1️⃣ Static Strings

```ts
mod.Message("hello")
```

With parameters:

```ts
mod.Message("x.y", 1, 2)
```

Stringkeys:

```ts
mod.stringkeys.ui.menu.Start
```

---

## 2️⃣ Dynamic Strings (Correct Behavior)

Dynamic calls:

```ts
mod.Message(`ai.bots.${i}`)
```

**do NOT generate dynamic keys.**

Only annotations generate:

```ts
// @stringkeys ai.bots: 0..3
mod.Message(`ai.bots.${i}`)
```

Generates:

```
ai.bots.0
ai.bots.1
ai.bots.2
ai.bots.3
```

Without annotation → nothing is generated.

---

## 3️⃣ @stringkeys Annotation

Format:

```ts
// @stringkeys <namespace>: <values>
```

Examples:

```ts
// @stringkeys ui.buttons: OK, Cancel, Retry
// @stringkeys ai.state: Idle, Roam, Fight
// @stringkeys ai.bots: 0..3
```

Annotations ALWAYS generate keys.

---

## 🔥 Example

### Code

```ts
mod.Message(`test`)
mod.Message(`static.message`)
mod.Message(`static.messageWithParams`, 1)
mod.stringkeys.static.stringkey

// @stringkeys dynamic.range: 1..2
for (let i = 0; i < 4; i++)
    mod.Message(`dynamic.range.${i}`)

// @stringkeys dynamic.list: Idle, Roam, Fight
mod.Message(`dynamic.list.${state}`)
```

### Result

```
dynamic.range.1
dynamic.range.2
dynamic.list.Idle
dynamic.list.Roam
dynamic.list.Fight
static.stringkey
static.message
static.messageWithParams {}
test
```

---

# 📜 License

MIT
