import {someEndpoint} from './enpoints-path';

const result = await someEndpoint.request({
  id: 20
}).getResult();
