import * as types from '../action-types'
//G2中的所有信息
let initState={
    data:[
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter2', sold: 350 },
        { genre: 'Other', sold: 150 },

        { genre: 'Sports1', sold: 275 },
        { genre: 'Strategy1', sold: 115 },
        { genre: 'Action1', sold: 120 },
        { genre: 'Shooter1', sold: 350 },
        { genre: 'Other1', sold: 150 },
        { genre: 'Sports2', sold: 275 },
        { genre: 'Strategy2', sold: 115 },
        { genre: 'Action2', sold: 120 },
        { genre: 'Shooter0', sold: 350 },
        { genre: 'Other2', sold: 150 },
        { genre: 'Sports3', sold: 275 },
        { genre: 'Strategy3', sold: 115 },
        { genre: 'Action3', sold: 120 },
        { genre: 'Shooter3', sold: 350 },
        { genre: 'Other3', sold: 150 },
        { genre: 'Sports4', sold: 275 },
        { genre: 'Strategy4', sold: 115 },
        { genre: 'Action4', sold: 120 },
        { genre: 'Shooter4', sold: 350 },
        { genre: 'Other4', sold: 150 },
        { genre: 'Sports5', sold: 275 },
        { genre: 'Strategy6', sold: 115 },
        { genre: 'Action6', sold: 120 },
        { genre: 'Shooter6', sold: 350 },
        { genre: 'Other6', sold: 150 },
    ]
};
export default function (state = initState, action) {
    switch (action.type) {
        case types.ADD_FORM_DATA:
            return {...state,data:[...state.data,action.val]};
        default :
            return state
    }
}
