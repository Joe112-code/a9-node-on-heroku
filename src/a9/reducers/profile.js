import profileJSON from './data/profile.json'


const profile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-profile':
            return( action.profile);
            break;

        case 'update-profile':
            //const newState = state.map(profile => profile._id === action.profile._id ? action.profile : profile)
            const newState = [action.profile];
            return newState;
            break;

        default:
            return state;
    }

};



export default profile;
