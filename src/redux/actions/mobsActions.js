import { PUNCH_FROM_PLAYER_TO_MOB, SET_MOBS } from '../types/mobsTypes'

export const ACTION_getMobs = () => {
    return {
        type: SET_MOBS, payload: [
            {
                avatar: 'https://i.pinimg.com/originals/d4/27/11/d427113815ac85e48f847487326597d6.png',
                nickName: 'zombie',
                hp: 100,
                mp: 40,
                ap: 30,
                damage: 20,
                defence: 5,
                evasion: 25,
                loot: [{
                    id: 1, item: 'https://www.pngall.com/wp-content/uploads/2016/03/Sword-PNG-Picture.png'
                }, {
                    id: 2,
                    item: 'https://www.savepng.com/file/thumb/2020-06/5-2-shield-free-png-image-thumb.png'
                }, {
                    id: 3, item: 'https://www.pngall.com/wp-content/uploads/2016/03/Sword-PNG-Picture.png'
                }, {
                    id: 4,
                    item: 'https://www.savepng.com/file/thumb/2020-06/5-2-shield-free-png-image-thumb.png'
                },]
            },
            {
                avatar: 'https://www.pngall.com/wp-content/uploads/2016/07/Zombie-PNG-Picture.png',
                nickName: 'dog',
                hp: 100,
                mp: 40,
                ap: 30,
                damage: 20,
                defence: 5,
                evasion: 20,
                loot: [
                    {id: 1, item: 'https://clipart-best.com/img/bone/bone-clip-art-41.png'},
                    {id: 2, item: 'https://clipart-best.com/img/bone/bone-clip-art-41.png'},
                    {id: 3, item: 'https://clipart-best.com/img/bone/bone-clip-art-41.png'},
                ]
            }
        ]
    }
}
export const ACTION_punchFromPlayerToMob = (id, num) => {
    return {
        type: PUNCH_FROM_PLAYER_TO_MOB,
        payload: {id, num}
    }
}