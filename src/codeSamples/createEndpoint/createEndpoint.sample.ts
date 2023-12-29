import host from 'path-to-host';
import type EntityType from 'path-to-domine'; // recommended imports entity types from domain area

interface Request {
  id: string
  arg1: number
}

type ItemResponseType = EntityType;

const getEndpoint = host.createEndpoint<Request, ItemResponseType /* optional */>('get', '/entity/:id', {
  /**
   * apiit itself determines which values are intended for path parameters
   *
   * for get requests, all other keys are placed in query
   */
})
export default getEndpoint;

// or

const postEndpoint = host.createEndpoint<Request, ItemResponseType /* optional */>('get', '/entity/:id', {
  queryParamsKeys: ['arg1']
  /**
   * For non-get requests, all keys that were not defined in the path and queryParamsKeys are placed in the body
   */
})

export default postEndpoint;

// or

const getEndpointOld = host.createEndpoint<Request, ItemResponseType /* optional */>('get', '/entity/:id', {
  paramsConfig: {
    id: { in: 'path' },
    arg1: { in: 'query' },
  }
})

export default getEndpointOld;
