import axios from "axios"

function sendStatus(res, data){
        axios.post('http://localhost:3300/', {data: data}, {validateStatus: status => status < 500})
            .then(response => res.status(response.status).json(response.data))
            .catch(error => res.status(500).json(error.message));
    
}
export default sendStatus