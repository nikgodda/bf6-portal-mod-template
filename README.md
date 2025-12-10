# BF6 Portal Mod Template

This is the official starter template for creating Battlefield 6 Portal Mods using TypeScript.

It provides:

- clean project structure
- ready main.ts and base AGameMode class
- SDK typings (SDK/mod and SDK/modlib)
- automatic merging into __SCRIPT.ts
- automatic string generation into __STRINGS.json
- integration with bf6-portal-mod-framework

The framework turns your whole TypeScript project into one final script.

---

# 🧱 Project Structure

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

---

# 🚀 Installation

npm install

Installs TypeScript and bf6-portal-mod-framework.

---

# ⚙ Commands

### Build (merge + strings)

npm run build

Creates:

__SCRIPT.ts  
__STRINGS.json

Paste __SCRIPT.ts into Portal Web Editor.  
Upload __STRINGS.json into Portal UI.

---

### Watch (merge only)

npm run watch

Rebuilds __SCRIPT.ts on file change.  
Does NOT regenerate strings — run build when editing annotations.

---

### Update SDK

npm run update-sdk

Downloads latest Portal SDK typings into SDK/.

---

# 🎮 How Mods Run

main.ts is the entry point:

import { MyGameMode } from './GameModes/MyGameMode'

export const gameMode = new MyGameMode()

The framework merges all TypeScript files into a single script.

---

# 💬 Strings System (Simplified + Correct)

__STRINGS.json is generated during build.

Supports:

- static keys  
- static keys with parameters  
- mod.stringkeys  
- dynamic template literal references  
- annotation-based dynamic expansion  

---

# 1️⃣ Static Strings

### Static Message

mod.Message("hello")

→ "hello": "hello"

### With parameters

mod.Message("message.key", 1)

→ "message.key": "message.key {}"

### Static stringkey

mod.stringkeys.ui.menu.Start

→ "ui.menu.Start": "ui.menu.Start"

Static keys always generate entries.

---

# 2️⃣ Dynamic Strings (Important)

Dynamic Message() calls DO NOT generate dynamic keys.

### Dynamic Message() simply acts as a reference  
### Only annotations generate dynamic keys

Example:

// @stringkeys ai.bots: 0..3  
mod.Message(`ai.bots.${i}`)

Generated keys:

ai.bots.0  
ai.bots.1  
ai.bots.2  
ai.bots.3

If annotation is missing:

mod.Message(`ai.bots.${i}`)

→ generates nothing.

Dynamic calls only mark namespaces as “used” (for warnUnusedStrings).

Supports multi-line template literals.

---

# 3️⃣ Annotations — @stringkeys

Format:

// @stringkeys <namespace>: <values>

Supported:

- numeric ranges: 0..3  
- alphabet ranges: A..F  
- lists: Idle, Roam, Fight  
- mixed: Idle, A..C, 10..12  

Annotations ALWAYS generate their keys.

---

# 🔥 Example (Template)

Code:

mod.Message(`test`)

mod.Message(`static.message`)
mod.Message(`static.messageWithParams`, 1)

mod.stringkeys.static.stringkey

// @stringkeys dynamic.range: 1..2
for (let i = 0; i < 4; i++) {
    mod.Message(`dynamic.range.${i}`)
}

// @stringkeys dynamic.list: Idle, Roam, Fight
const state = 'Idle'
mod.Message(`dynamic.list.${state}`)

Generated:

dynamic.range.1  
dynamic.range.2  
dynamic.list.Idle  
dynamic.list.Roam  
dynamic.list.Fight  
test  
static.message  
static.messageWithParams {}  
static.stringkey

Notes:

- dynamic values come only from annotations  
- loop does not affect generated values  
- static keys always work
  
---

# ⚠ Optional: Warn About Removed Keys

Add to package.json:

{
  "bf6mod": {
    "warnUnusedStrings": true
  }
}

---

# 🧩 Suggested Folder Layout

src/
  Core/
  GameModes/
  AI/
  Utils/
  Weapons/

The framework merges everything into one script.

---

# 🪄 Build Output

npm run build produces:

__SCRIPT.ts (paste into Portal)  
__STRINGS.json (upload to Portal UI)

---

# 📜 License

MIT
