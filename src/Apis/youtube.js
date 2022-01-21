
//This file is used to add in confirguagations for axios(third party data retriver)
import axios from "axios";
const KEY = "AIzaSyAgpWaR-6M-lpOu2wCG1gv9gQO5LPXPpEo";

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        type : 'video',
        maxResults: 5,
        key:KEY
    }

})