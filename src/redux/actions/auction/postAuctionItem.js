import { POST_AUCTION_ITEM } from '../../types/auctionTypes'

export const postAuctionItem = (data) => {
    console.log('postAuctionData ============>', data)
    return {
        type: POST_AUCTION_ITEM,
        payload: {data}
    }
}

// export const postItemToAuc = (data) => {
//     console.log(11111)
//     return {
//         type: POST_SAGA_AUCTION_ITEM,
//         payload: data
//     }
// }