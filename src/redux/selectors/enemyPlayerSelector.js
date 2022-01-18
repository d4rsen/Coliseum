import { createSelector } from 'reselect'

const selectEnemyPlayerTotalStats = (state) => state.enemyPlayer.total_stats
const selectEnemyPlayerArmorSet = (state) => state.enemyPlayer.armor_set
const selectEnemyPlayerAccessoriesSet = (state) => state.enemyPlayer.accessories_set
const selectEnemyPlayerWeapon = (state) => state.enemyPlayer.weapon[0]

export const enemyPlayerTotalStatsSelector = createSelector(selectEnemyPlayerTotalStats, (enemyStats) => enemyStats)
export const enemyPlayerArmorSetSelector = createSelector(selectEnemyPlayerArmorSet, (enemyArmorSet) => enemyArmorSet)
export const enemyPlayerAccessoriesSetSelector = createSelector(selectEnemyPlayerAccessoriesSet, (enemyAccessoriesSet) => enemyAccessoriesSet)
export const enemyPlayerWeaponSelector = createSelector(selectEnemyPlayerWeapon, (enemyWeapon) => enemyWeapon)