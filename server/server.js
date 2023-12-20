import {createHost} from "apiit";
import Koa from 'koa';
import cors from '@koa/cors';

const getDocsEndpoint = createHost('https://raw.githubusercontent.com/AlexKletn/apiit/main/docs').createEndpoint('get', 'api.json');

const app = new Koa();
app.use(cors());


app.use(async ctx => {
  if(ctx.request.url === '/api/docs.json') {
    ctx.response.body = await getDocsEndpoint.request().getResult().then(({data}) => data);
  } else {
    ctx.response.status = 404;
  }
});

app.listen(9090)

