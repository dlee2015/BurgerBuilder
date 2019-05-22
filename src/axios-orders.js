import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burgerbuilder-6e2c2.firebaseio.com'
});

export default instance;
