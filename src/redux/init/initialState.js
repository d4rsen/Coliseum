const initialState = () => ({
    chat: [],
    mob: null,
    user: null,
    phrase: '',
    room: null,
    player: null,
    isAuth: false,
    evasion: false,
    idleRooms: null,
    auctionItems: [],
    isLoading: false,
    traderItems: null,
    activeRooms: null,
    enemyPlayer: null,
    watchBattle: null,
    playerInventory: [],
    chooseCharacter: null,
    mannequin: {
        hp: 10000,
        nickName: 'Mannequin'
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
