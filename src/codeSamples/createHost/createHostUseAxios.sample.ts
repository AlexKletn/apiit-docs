import {createHost} from 'apiit';

const axiosInstance = axios.create(/* axios config */);

const headers = {
  "Authorization": 'Barear <***>'
}

const host = createHost(axiosInstance, headers);

export default host;
