import { IS_LOADING, IS_NOT_LOADING } from '../types/loaderTypes'

export const setLoader = () => {
    return {
        type: IS_LOADING,
    }
}
export const unSetLoader = () => {
    return {
        type: IS_NOT_LOADING,
    }
}