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

# 📁 Project Structure (Default Template)

A minimal layout included out of the box:

```txt
SDK/
  mod/
  modlib/

src/
  main.ts

  Core/
    GameMode/
      AGameMode.ts

  GameModes/
    Example/
      ExampleGameMode.ts

__MERGED.ts   (generated automatically)
```

This structure is intentionally simple so you can learn quickly and start modding immediately.

---

# 📦 Example of a More Advanced, Scalable Structure

The merge system supports **any folder layout** you prefer.  
Here is an example of a larger architecture you *can* build:

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

This layout supports:

- Modular Core systems  
- AI behavior modules  
- Mode-specific managers  
- Clean separation of responsibilities  
- Large scale mods  

The merge tool will include **every file** under `src/` automatically.

---

# 🧠 Internal Safety: Duplicate Identifier Check

The merge system automatically prevents broken output by checking:

- class  
- abstract class  
- interface  
- enum  
- type  
- const  
- let  
- var  

across the entire project.

If two files declare the same name, the merge script stops with a **clear error**:

```txt
❌ MERGE ERROR: Duplicate top-level identifier detected!
Identifier: AGameMode
Kind: class

First found in: src/Core/AGameMode.ts
Found again in: src/GameModes/TDM/TDMGameMode.ts
```

This guarantees the final merged file is always safe for Portal.

No linter required — the merge script enforces correctness automatically.

---

# 🧠 How It Works

### `AGameMode`
Base class providing all BF6 event callbacks, such as:

- onGameModeStarted  
- onPlayerJoinGame  
- onPlayerDeployed  
- onPlayerDied  
- and more  

### `TDMGameMode` (Example)
An example game mode implementation located in:

```txt
src/GameModes/TDM/TDMGameMode.ts
```

Example usage:

```ts
onGameModeStarted() {
  console.log("Great Mod")
}
```

### `main.ts`
Bridges Battlefield Portal engine events into your active GameMode.

This is the entry point used by the merge tool.

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

Paste that file into the BF6 Portal Mod Editor.

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

Downloads the latest official BF6 Portal SDK typings into:

```txt
SDK/mod
SDK/modlib
```

Use this whenever EA updates the SDK.

---

# ✨ Customization

Add new `.ts` files anywhere inside `src/`.  
The merge tool will detect and include **everything automatically**.

You can freely extend:

- new gameplay modes  
- AI utilities  
- shared helpers  
- UI logic  
- objectives  
- any systems your mod requires  

Everything becomes part of the final merged script.

---

# 📜 License

MIT
