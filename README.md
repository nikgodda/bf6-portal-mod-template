# BF6 Portal Mod Template

This is the official starter template for creating Battlefield 6 Portal Mods using TypeScript.

It provides:

- clean project structure  
- ready `main.ts` and base `AGameMode`  
- SDK typings included  
- automatic merging into `__SCRIPT.ts`  
- automatic string generation into `__STRINGS.json`  
- full integration with the `bf6-portal-mod-framework` build system  

Use this template to build structured BF6 Portal mods using folders, classes, and modules — the framework flattens everything into a single output script.

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

All code lives in `src/`.  
The framework merges all files into `__SCRIPT.ts`.

---

# 🚀 Installation

```bash
npm install
```

Installs TypeScript + bf6-portal-mod-framework.

---

# ⚙ Commands

### Build (merge + strings)

```bash
npm run build
```

Creates:

```
__SCRIPT.ts
__STRINGS.json
```

Paste the script into the Portal Web Editor  
and upload the strings JSON into the UI.

---

### Watch (merge only)

```bash
npm run watch
```

Re-merges automatically.  
Strings not updated — run build after editing annotations.

---

### Update SDK

```bash
npm run update-sdk
```

Downloads the latest Portal SDK typings into `SDK/`.

---

# 🎮 How the Mod Runs

main.ts:

```ts
import { MyGameMode } from './GameModes/MyGameMode'
export const gameMode = new MyGameMode()
```

Everything else is compiled and flattened into one script.

---

# 💬 Strings System (via bf6-portal-mod-framework)

All strings are written into:

```
__STRINGS.json
```

Supports:

- static keys  
- keys with parameters  
- `mod.stringkeys`  
- dynamic template literal references  
- annotation-based dynamic values  

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

Static keys always generate entries.

---

## 2️⃣ Dynamic Strings (Correct Behavior)

Dynamic message keys:

```ts
mod.Message(`ai.bots.${i}`)
```

**do NOT generate entries**.  
Only annotations do.

Example:

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

Without annotation → nothing generated.

Dynamic calls only mark namespaces as “used”.

---

## 3️⃣ @stringkeys Annotation

Examples:

```ts
// @stringkeys ui.buttons: OK, Cancel, Retry
// @stringkeys ai.state: Idle, Roam, Fight
// @stringkeys ai.bots: 0..3
// @stringkeys rank: A..F
```

Annotations ALWAYS generate all declared values.

---

## 🔥 Example

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

Results:

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

# 🧩 Framework Reference

This template is built to work with the official BF6 Portal Mod Framework:

https://github.com/nikgodda/bf6-portal-mod-framework

The framework provides:

- merging system  
- string extraction  
- annotation support  
- SDK updater  
- CLI (`bf6mod build`, `bf6mod watch`, `bf6mod update-sdk`)  

The template’s npm scripts map directly to these commands.

---

# 📜 License

MIT
