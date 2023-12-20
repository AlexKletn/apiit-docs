import host from 'path-to-host';

interface Request {
  file: File
}

const getEndpoint = host.createEndpoint<Request>('post', '/file-storage/:id', /* options */)

export default getEndpoint;
