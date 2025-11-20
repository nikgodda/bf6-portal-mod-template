import * as modlib from 'modlib'
import { ExampleGameMode } from './GameModes/Example/ExampleGameMode'

// Create the active game mode instance

export const gameMode = new ExampleGameMode()

/* ------------------------------------------------------------
 *  ENGINE EVENTS -> Redirect to GameMode instance
 * ------------------------------------------------------------ */

export async function OnGameModeStarted() {
    gameMode.onGameModeStarted?.()

    // Example usage of modlib (optional hint)
    // modlib.ParseUI()
}

export function OnPlayerJoinGame(eventPlayer: mod.Player) {
    gameMode.onPlayerJoinGame?.(eventPlayer)
}

export function OnPlayerDeployed(eventPlayer: mod.Player) {
    gameMode.onPlayerDeployed?.(eventPlayer)
}

export function OnPlayerDamaged(
    eventPlayer: mod.Player,
    eventOtherPlayer: mod.Player,
    eventDamageType: mod.DamageType,
    eventWeaponUnlock: mod.WeaponUnlock
) {
    gameMode.onPlayerDamaged?.(
        eventPlayer,
        eventOtherPlayer,
        eventDamageType,
        eventWeaponUnlock
    )
}

export function OnPlayerDied(
    eventPlayer: mod.Player,
    eventOtherPlayer: mod.Player,
    eventDeathType: mod.DeathType,
    eventWeaponUnlock: mod.WeaponUnlock
) {
    gameMode.onPlayerDied?.(
        eventPlayer,
        eventOtherPlayer,
        eventDeathType,
        eventWeaponUnlock
    )
}

export async function OnPlayerLeaveGame(eventNumber: number) {
    gameMode.onPlayerLeaveGame?.(eventNumber)
}

export function OnSpawnerSpawned(
    eventPlayer: mod.Player,
    spawner: mod.Spawner
) {
    gameMode.onSpawnerSpawned?.(eventPlayer, spawner)
}

export function OnAIMoveToSucceeded(eventPlayer: mod.Player) {
    gameMode.onAIMoveToSucceeded?.(eventPlayer)
}

export function OnAIMoveToFailed(eventPlayer: mod.Player) {
    gameMode.onAIMoveToFailed?.(eventPlayer)
}

export async function OngoingPlayer(eventPlayer: mod.Player) {
    gameMode.ongoingPlayer?.(eventPlayer)
}
