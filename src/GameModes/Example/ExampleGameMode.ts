import * as modlib from 'modlib'

import { Core_AGameMode } from 'src/Core/AGameMode'

export class ExampleGameMode extends Core_AGameMode {
    onGameModeStarted(): void {
        console.log('Cool Example GameMod!')

        // Example usage of modlib (optional hint)
        modlib.ParseUI()

        // Example usages of strings
        
        mod.Message(`static.message`)
        mod.Message(`static.messageWithParams`, 1)

        mod.stringkeys.static.stringkey

        // @stringkeys dynamic.range: 1..2
        for (let i = 0; i < 4; i++) {
            mod.Message(`dynamic.range.${i}`)
        }

        // @stringkeys dynamic.list: Idle, Roam, Fight
        const state = 'Idle'
        mod.Message(`dynamic.list.${state}`)
    }
}
