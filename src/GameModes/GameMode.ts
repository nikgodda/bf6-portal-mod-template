import { AGameMode } from "../Core/GameMode/AGameMode";

export class GameMode extends AGameMode {
    onGameModeStarted(): void {
        console.log("Great Mod!");
    }
}
