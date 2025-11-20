# 🚀 BF6 Portal Mod Template

![SDK Update](https://github.com/nikgodda/bf6-portal-mod-template/actions/workflows/check-sdk-update.yml/badge.svg)


A starter template for building Battlefield 6 Portal mods using the bf6-portal-mod-framework.

This template provides:

- 📁 Clean TypeScript structure
- 🧠 GameMode class system
- 🔧 Auto merge into single __MERGED.ts
- 📦 Portal SDK and modlib support
- 🛠 Simple CLI commands for building and updating SDK

---

## ⚡ Quick Start

```bash
git clone https://github.com/<you>/bf6-portal-mod-template my-mod
cd my-mod
npm install
npm run update-sdk
npm run build
```

Paste __MERGED.ts into the BF6 Portal Rules Editor.

---

## 📁 Structure

```
src/
  main.ts
  Core/GameMode/AGameMode.ts
  GameModes/GameMode.ts

SDK/
  mod/
  modlib/

__MERGED.ts
```

---

## 🧠 How It Works

### AGameMode
Defines all event hooks

### GameMode
Your mod logic lives here

```ts
onGameModeStarted() {
  console.log("Great Mod")
}
```

### main.ts
Connects BF6 engine events to GameMode

Also includes modlib example:

```ts
import * as modlib from "modlib"
// modlib.ParseUI()
```

---

## 🔧 Scripts

```bash
npm run build
npm run update-sdk
npm run watch
```

---

## 🔄 Updating Framework

```bash
npm update bf6-portal-mod-framework
```

---

## 🛠 Customization

- Add new .ts files under src
- Merge tool automatically includes them
- Do not edit __MERGED.ts manually

---

## 📄 License

MIT
