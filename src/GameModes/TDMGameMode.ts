import { AGameMode } from 'src/Core/AGameMode'

export class TDMGameMode extends AGameMode {
    onGameModeStarted(): void {
        console.log('Example TDM Mod!')
    }
}
