export const initialState={
    user:null,
    // remove after finished devloping 
    // token:"BjQCIWSz2Eb4441mAynn3pUKvUO7XiaQnHhGr62Vmq_s6U7vfMbuT1XA1F8SuIxCoUf2PgcG3lOrZ825RN1FVVcxlBHhzFp3LtJmUza-txZ5dtZZXFekRZ-EXEIOR6DvLGwYPfn9fC7ITckDMwergXNeB1GpxVn3lA-NvM_p5xXa50UxSHR5U",
    playlist:[], 
    playing:false,
    item:null,
    episode:null,
    artists:null,
    albums:null,
    episodes:null,
  

}

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlist:action.playlist
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }

        case 'SET_PLAYING':
            return {
                ...state,
                playing:action.playing
            }

            case 'SET_EPISODE':
                return {
                    ...state,
                    
                    episode:action.episode
                }

            case 'SET_EPISODES':
                return {

                    ...state,
                    episodes:action.episodes
                }

            case 'SET_ARTISTS':
                return {
                    ...state,
                    artists:action.artists
                }


            case 'SET_ALBUMS':
                return {
                    ...state,
                    albums:action.albums
                }

                case 'SET_DEVICE':
                    return {
                        ...state,
                        device:action.device
                    }

        //case 'SET_CURRENT_PLAYING':
            // return {
            //     ...state,
            //     item:action.item
            // }
            // case 'SET_CURRENT_ITEM':
            // return {
            //     ...state,
            //     item:action.item
            // }

        default:
            return state;
    }
}

export default reducer;

