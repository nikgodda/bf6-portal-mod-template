# BF6 Portal Mod Template

A fully featured starter template for building Battlefield 6 Portal Mods using the `bf6-portal-mod-framework`.

This template includes:

- BF6 SDK typings (`SDK/mod`, `SDK/modlib`)
- Clean project structure
- Merge + Watch tooling via `bf6mod` CLI
- Extendable GameMode architecture
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

```
SDK/
  mod/
  modlib/

src/
  main.ts

  Core/
    GameMode/
      AGameMode.ts

  GameModes/
    TDM/
      TDMGameMode.ts

__MERGED.ts   (generated automatically)
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
An example game mode implementation found in:

```
src/GameModes/TDM/TDMGameMode.ts
```

Add your own gameplay logic inside the class:

```ts
onGameModeStarted() {
  console.log("Great Mod")
}
```

### `main.ts`
This file bridges Battlefield Portal engine events into your selected GameMode.

This is the entry point used by the merge tool.

---

# 🛠 Commands

### Build the merged output

```
npm run build
```

Produces:

```
__MERGED.ts
```

Paste its contents into the BF6 Portal Mod Editor.

---

### Watch mode (auto-merge on save)

```
npm run watch
```

Rebuilds `__MERGED.ts` whenever files in `src/` change.

---

### Update SDK typings

```
npm run update-sdk
```

Downloads the latest official BF6 Portal SDK typings into:

```
SDK/mod
SDK/modlib
```

Use this whenever EA updates the SDK.

---

# ✨ Customization

Add new `.ts` files anywhere inside `src/`.  
The merge tool automatically includes the entire folder tree.

You can freely extend:

- new gameplay modes  
- AI utilities  
- shared helper modules  
- objectives  
- UI logic  
- any game systems your mod requires  

Everything inside `src/` becomes part of the final merged script.

---

# 📜 License

MIT
