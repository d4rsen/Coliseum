import {GET_ALL_AUC_ITEMS} from "../../types/auctionTypes";

export const getAllAuctionItems = () => {
    return {
        type: GET_ALL_AUC_ITEMS,
        payload: 'TEST'
    }
}