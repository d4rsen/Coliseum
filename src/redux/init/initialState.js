const initialState = () => ({
    user: null,
    mob: null,
    room: null,
    phrase: '',
    player: null,
    isAuth: false,
    evasion: false,
    idleRooms: null,
    isLoading: false,
    activeRooms: null,
    enemyPlayer: null,
    playerInventory: [],
    watchBattle: null,
    // watchBattle: {
    //     room: null,
    //     player1: null,
    //     player2: null
    // },
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
    auctionItems: [],
})

export default initialState
