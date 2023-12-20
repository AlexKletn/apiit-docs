import host from 'path-to-host';
import type EntityType from 'path-to-domine'; // recommended imports entity types from domain area

interface Request {
  id: string
  arg1: number
}

type ItemResponseType = EntityType;

const getEndpoint = host.createEndpoint<Request, ItemResponseType /* optional */>('get', '/entity/:id', /* options */)

export default getEndpoint;
