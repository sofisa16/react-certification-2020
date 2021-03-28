export interface YouTubeResponse {
  'kind': string;
  'etag': string;
  'nextPageToken': string;
  'regionCode': string;
  'pageInfo': {
    'totalResults': number;
    'resultsPerPage': number;
  },
  'items': YouTubeResponseItems[];
}

export interface YouTubeResponseItems {
  'kind': string;
  'etag': string;
  'id': {
    'kind': string;
    'channelId': string;
  },
  'snippet': YouTubeResponseItemSnippet;
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
    }
  },
  'channelTitle': string;
  'liveBroadcastContent': string;
  'publishTime': string;
}