interface UseYouTubeAPI {
  getFromYouTubeAPI: (apiName: string) => Promise<Response>;
}

const useYouTubeAPI =
  (): UseYouTubeAPI => {

    async function getFromYouTubeAPI(apiName: string): Promise<Response> {
      const response = 
        await fetch(`https://youtube.googleapis.com/youtube/v3/${apiName}&key=${process.env.REACT_APP_KEY}`);
      
      return response;
    }

    return {
      getFromYouTubeAPI
    };
  };

export default useYouTubeAPI;