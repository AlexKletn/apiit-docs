import {createHost} from 'apiit';

const headers = {
  "Authorization": 'Barear <***>'
}

const host = createHost("http://host.com", headers);

export default host;
