import whoJson from './data/who.json';


// initialize the reducer's state
// return the single static state
// const who = (state = whoJson) => {
//     return(state);
// };

const who = (state = whoJson, action) => {
    switch (action.type) {
        case 'fetch-all-who':
            return(action.who);
            break;

        default:
            return(state);
    }
};

export default who;
