// Constants:
import {
    CHANGE_LANGUAGE
} from '../constants/action-types';

import {
    LANGUAGES
} from '../constants/languages';

const initialState = {
    global: {
        language: LANGUAGES.ENGLISH.LANGUAGE,
        font: LANGUAGES.ENGLISH.FONT
    },
    components: {
        Navbar: {},
        Introduction: {},
        HowDoesItKill: {},
        MustHaves: {},
        MustDo: {},
        WhatNext: {}
    }
};


// Functions:
function rootReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                global: {
                    ...state.global,
                    language: LANGUAGES[action.payload].LANGUAGE,
                    font: LANGUAGES[action.payload].FONT
                }
            };
        default:
            return state;
    }
}

export default rootReducer;