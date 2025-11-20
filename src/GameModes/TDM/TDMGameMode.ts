import { AGameMode } from "../../Core/GameMode/AGameMode";

export class TDMGameMode extends AGameMode {
    onGameModeStarted(): void {
        console.log("Example TDM Mod!");
    }
}
