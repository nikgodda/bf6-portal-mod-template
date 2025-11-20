# BF6 Portal Mod Template

A fully featured starter template for building Battlefield 6 Portal Mods using the `bf6-portal-mod-framework`.

This template includes:

- BF6 SDK typings (`SDK/mod`, `SDK/modlib`)
- Clean project structure
- Merge + Watch tooling via `bf6mod` CLI
- Extendable GameMode architecture
- Automatic duplicate identifier checking during merge
- Manual `update-sdk` script to refresh typings

---

# 🚀 Quick Start

Copy the template into a new folder:

```bash
npx degit nikgodda/bf6-portal-mod-template my-mod
cd my-mod
npm install
```

This creates a clean mod project you fully own.

---

# 🔧 Framework Dependency

This template relies on the **bf6-portal-mod-framework**, which provides:

- the merge system  
- the file watcher  
- the CLI (`bf6mod`)  
- the SDK updater  
- project build logic  

To update the framework to the latest version:

```bash
npm update bf6-portal-mod-framework
```

Or to force the absolute newest version from npm:

```bash
npm install bf6-portal-mod-framework@latest --save-dev
```

Updating the framework does **not** modify your mod code — only the tooling.

---

# 📁 Project Structure

```txt
SDK/
│
├─ mod/
└─ modlib/

src/
│
├─ main.ts
│
├─ Core/
│   └─ GameMode/
│        └─ AGameMode.ts
│
└─ GameModes/
    └─ Example/
         └─ ExampleGameMode.ts

__MERGED.ts
```

Below is an example of a **larger, fully modular project structure** you can create:

```txt
src/
│
├─ Core/
│  ├─ AGameMode.ts
│  └─ Player/
│       ├─ APlayerBase.ts
│       ├─ APlayerManager.ts
│       ├─ PlayerHuman.ts
│       └─ AI/
│            ├─ AbstractAI.ts
│            ├─ RoamerAI.ts
│            └─ Types.ts
│
├─ GameModes/
│  └─ TDM/
│       ├─ TDMGameMode.ts
│       └─ TDMPlayerManager.ts
│
└─ main.ts
```

---

# 🧠 How It Works

### `AGameMode`
Base class providing all BF6 event callbacks, such as:

- onGameModeStarted  
- onPlayerJoinGame  
- onPlayerDeployed  
- onPlayerDied  
- and more  

### `TDMGameMode`
An example game mode implementation located in:

```txt
src/GameModes/TDM/TDMGameMode.ts
```

Example:

```ts
onGameModeStarted() {
  console.log("Great Mod")
}
```

### `main.ts`
Bridges BF6 Engine event callbacks into your active GameMode.

This file is the entry point used by the merge tool.

---

# 🔒 Merge Script Safety

The merge process includes **automatic duplicate identifier detection**.

It prevents broken merged output by stopping when two files declare the same name:

- class  
- abstract class  
- interface  
- type  
- enum  
- const  
- let  
- var  

Example error:

```txt
❌ MERGE ERROR: Duplicate top-level identifier detected!
Identifier: AGameMode
Kind: class

First found in: src/Core/AGameMode.ts
Found again in: src/GameModes/TDM/TDMGameMode.ts
```

This guarantees the final merged output is always safe for Portal.

---

# 🛠 Commands

### Build the merged output

```bash
npm run build
```

Produces:

```txt
__MERGED.ts
```

Paste the contents into the BF6 Portal Mod Editor.

---

### Watch mode (auto-merge on save)

```bash
npm run watch
```

Rebuilds `__MERGED.ts` whenever files in `src/` change.

---

### Update SDK typings

```bash
npm run update-sdk
```

Downloads the latest BF6 SDK typings into:

```txt
SDK/mod
SDK/modlib
```

---

# ✨ Customization

Add new `.ts` files anywhere under `src/`.

The merge tool automatically includes:

- new gameplay systems  
- AI helpers  
- player management  
- utilities  
- UI logic  
- any feature your mod requires  

Everything becomes part of the final merged script.

---

# 📜 License

MIT
