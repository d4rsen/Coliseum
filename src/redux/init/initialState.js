const initialState = () => ({
    user: null,
    mob: null,
    room: null,
    phrase: '',
    player: null,
    isAuth: false,
    evasion: false,
    idleRooms: null,
    auctionItems: [],
    traderItems: null,
    isLoading: false,
    activeRooms: null,
    enemyPlayer: null,
    watchBattle: null,
    playerInventory: [],
    chooseCharacter: null,
    mannequin: {
        hp: 10000,
        nickName: 'Манекен'
    },
    battlePlayer: {
        attackHead: false,
        attackBody: false,
        attackLegs: false,
        defendHead: false,
        defendBody: false,
        defendLegs: false,
    },
    battleEnemyPlayer: {
        attackHead: false,
        attackBody: false,
        attackLegs: false,
        defendHead: false,
        defendBody: false,
        defendLegs: false,
    },
})

export default initialState
