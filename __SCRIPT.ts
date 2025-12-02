import * as modlib from 'modlib'

// -------- FILE: src\Core\AGameMode.ts --------
export abstract class AGameMode {
    onGameModeStarted?(): void
    onPlayerJoinGame?(eventPlayer: mod.Player): void
    onPlayerDeployed?(eventPlayer: mod.Player): void
    onPlayerDamaged?(
        eventPlayer: mod.Player,
        eventOtherPlayer: mod.Player,
        eventDamageType: mod.DamageType,
        eventWeaponUnlock: mod.WeaponUnlock
    ): void
    onPlayerDied?(
        eventPlayer: mod.Player,
        eventOtherPlayer: mod.Player,
        eventDeathType: mod.DeathType,
        eventWeaponUnlock: mod.WeaponUnlock
    ): void
    onPlayerLeaveGame?(eventNumber: number): void
    onSpawnerSpawned?(eventPlayer: mod.Player, spawner: mod.Spawner): void
    onAIMoveToSucceeded?(eventPlayer: mod.Player): void
    onAIMoveToFailed?(eventPlayer: mod.Player): void
    ongoingPlayer?(eventPlayer: mod.Player): void
}

// -------- FILE: src\GameModes\Example\ExampleGameMode.ts --------
export class ExampleGameMode extends AGameMode {
    onGameModeStarted(): void {
        console.log('Cool Example GameMod!')

        // Example usage of modlib (optional hint)
        modlib.ParseUI()
    }
}

// -------- FILE: src\main.ts --------
// Create the active game mode instance

export const gameMode = new ExampleGameMode()

/* ------------------------------------------------------------
 *  ENGINE EVENTS -> Redirect to GameMode instance
 * ------------------------------------------------------------ */

export async function OnGameModeStarted() {
    gameMode.onGameModeStarted?.()
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

