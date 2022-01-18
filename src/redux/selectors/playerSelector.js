import { createSelector } from 'reselect'

const selectPlayerTotalStats = (state) => state.player.total_stats
const selectPlayerArmorSet = (state) => state.player.armor_set
const selectPlayerAccessoriesSet = (state) => state.player.accessories_set
const selectPlayerWeapon = (state) => state.player.weapon[0]

export const playerTotalStatsSelector = createSelector(selectPlayerTotalStats, (stats) => stats)
export const playerArmorSetSelector = createSelector(selectPlayerArmorSet, (armorSet) => armorSet)
export const playerAccessoriesSetSelector = createSelector(selectPlayerAccessoriesSet, (accessoriesSet) => accessoriesSet)
export const playerWeaponSelector = createSelector(selectPlayerWeapon, (weapon) => weapon)