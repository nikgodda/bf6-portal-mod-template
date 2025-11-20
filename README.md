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

Use **degit** to copy the template into a new folder:

```bash
npx degit nikgodda/bf6-portal-mod-template my-mod
cd my-mod
npm install
```

This creates a clean mod project you can immediately begin working with.

---

# 📁 Project Structure

```
SDK/
  mod/        Type definitions for Portal mod API
  modlib/     Utility library APIs

src/
  Core/
    GameMode/AGameMode.ts
  GameModes/
    GameMode.ts
  main.ts

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

### `GameMode`
Your gameplay logic goes here:

```ts
onGameModeStarted() {
  console.log("Great Mod")
}
```

### `main.ts`
Bridges Battlefield Portal engine events to your GameMode methods.

---

# 🛠 Commands

### Build merged output

```
npm run build
```

Generates:

```
__MERGED.ts
```

Paste this file into the Portal Mod Editor.

### Watch mode (auto-merge on file save)

```
npm run watch
```

Rebuilds `__MERGED.ts` whenever files inside `src/` change.

### Update SDK typings

```
npm run update-sdk
```

Downloads the latest official BF6 Portal SDK files into:

```
SDK/mod
SDK/modlib
```

---

# 🛠 Customization

Create new `.ts` files anywhere inside `src/`.  
The merge tool includes all files automatically.

Extend your project with:

- additional game modes  
- AI utilities  
- gameplay logic  
- shared helpers  
- services  

---

# 📜 License

MIT
