import host from 'path-to-host';

interface Request {
  value1: string
}

const getEndpoint = host.createEndpoint<Request>('post', '/file-storage', {
  dataFormat: "form-data"
})

export default getEndpoint;
