import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';

export interface FavoriteVideos {
  [id: string]: YouTubeResponseItems;
}

export const initialState: FavoriteVideos = {};

export interface Action {
  type: string;
  payload: YouTubeResponseItems;
}

export function reducer(state: FavoriteVideos, action: Action): FavoriteVideos {
  const id = typeof(action.payload.id) === 'string' ? action.payload.id : action?.payload?.id?.videoId;
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        [`${id}`]: action.payload,
      };
    }
    case 'remove': {
      return {
        ...state,
        [`${id}`]: {},
      };
    }
    default:
      throw new Error();
  }
}