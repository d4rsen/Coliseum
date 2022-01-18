const initialState = () => ({
    user: null,
    mobs: null,
    room: null,
    phrase: '',
    player: null,
    isAuth: false,
    evasion: false,
    allRooms: null,
    isLoading: false,
    enemyPlayer: null,
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
    auctionItems: [],
})

export default initialState
