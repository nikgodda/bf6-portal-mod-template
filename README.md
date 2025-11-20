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
Example game mode implementation stored under:

```
src/GameModes/TDM/TDMGameMode.ts
```

You place your game logic inside the class:

```ts
onGameModeStarted() {
  console.log("Great Mod")
}
```

### `main.ts`
This file bridges Portal engine events into your selected GameMode.

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

Rebuilds `__MERGED.ts` whenever files in `src/` are changed.

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

Use this when EA releases updates.

---

# ✨ Customization

Add new `.ts` files anywhere inside `src/`.

The merge tool automatically includes all source files.

You may add:

- additional game modes  
- AI utilities  
- reusable helpers  
- gameplay logic modules  
- services for managing state, UI, objectives, etc.

Everything inside `src/` is merged into `__MERGED.ts`.

---

# 📜 License

MIT
