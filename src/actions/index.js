// Constants:
import {
    CHANGE_LANGUAGE
} from "../constants/action-types";


// Exports:
export function changeLanguage(payload) {
    return { type: CHANGE_LANGUAGE, payload }
};