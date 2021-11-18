const WHO_API = 'http://localhost:4000/rest/who';

export const fetchAllWho = (dispatch) =>
    fetch(WHO_API)
        .then(response => response.json())
        .then(who=>
                  dispatch({
                               type: 'fetch-all-who',
                               who
                           })
        );



export default {
    fetchAllWho
};