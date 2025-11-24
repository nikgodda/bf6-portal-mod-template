import * as modlib from 'modlib'

import { AGameMode } from 'src/Core/AGameMode'

export class ExampleGameMode extends AGameMode {
    onGameModeStarted(): void {
        console.log('Cool Example GameMod!')

        // Example usage of modlib (optional hint)
        modlib.ParseUI()
    }
}
