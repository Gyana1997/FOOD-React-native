import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 
            'Bearer xOOEhVaRlMY5snUc2EZUpFFGVInvD-ecWl-CLz9VjDM39JNX4Iyb84_c6p9XnxpDcJEFr1V8NTp-qpwIzYNE9qTKb_mQTkCJxJjPJlmV-bUyBXxLqnglOoFaCDgtYXYx'
    }
})

 