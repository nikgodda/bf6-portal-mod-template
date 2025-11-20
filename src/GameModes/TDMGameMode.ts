import { Core } from "src/Core/AGameMode";

export namespace GameModes {
    export class TDMGameMode extends Core.AGameMode {
        onGameModeStarted(): void {
            console.log('Example TDM Mod!')
        }
    }
}
