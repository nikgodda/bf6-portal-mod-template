export abstract class Core_AGameMode {
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
