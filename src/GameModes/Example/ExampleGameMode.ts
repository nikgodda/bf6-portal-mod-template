import { AGameMode } from 'src/Core/AGameMode'

export class ExampleGameMode extends AGameMode {
    onGameModeStarted(): void {
        console.log('Cool Example GameMod!')
    }
}
