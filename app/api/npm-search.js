import axios from 'axios';

function getControls(){
    return axios.get('/controls');
}

export default function getData(){
    return axios.all([getControls()]).then( (arr) => (arr[0]));
}