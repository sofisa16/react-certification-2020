export interface YouTubeResponse {
  'kind': string;
  'etag': string;
  'nextPageToken'?: string;
  'regionCode'?: string;
  'pageInfo': {
    'totalResults': number;
    'resultsPerPage': number;
  },
  'items': YouTubeResponseItems[];
}

export interface YouTubeResponseItems {
  'kind': string;
  'etag': string;
  'id': string | {
    'kind': string;
    'channelId': string;
  },
  'snippet': YouTubeResponseItemSnippet;
  'contentDetails'?: {	
    'duration': string;
    'dimension': string;
    'definition': string;
    'caption': string;
    'licensedContent': boolean;	
    'contentRating': any;	
    'projection': string;	
  },	
  'statistics'?: {	
    'viewCount': string;
    'likeCount': string;
    'dislikeCount': string;
    'favoriteCount': string;
  },	
  'player': {	
    'embedHtml': string;
  }
}

export interface YouTubeResponseItemSnippet {
  'publishedAt': string;
  'channelId': string;
  'title': string;
  'description': string;
  'thumbnails': {
    'default': {
      'url': string;
    },
    'medium': {
      'url': string;
    },
    'high': {
      'url': string;
    },	
    'standard'?: {	
      'url': string;
      'width': number;
      'height': number;
    },	
    'maxres'?: {	
      'url': string;
      'width': number;
      'height': number;
    }
  },
  'channelTitle': string;
  'tags'?: string[];	
  'categoryId'?: string;
  'liveBroadcastContent': string;
  'localized'?: {	
    'title': string;
    'description': string;
  },
  'publishTime'?: string;
}