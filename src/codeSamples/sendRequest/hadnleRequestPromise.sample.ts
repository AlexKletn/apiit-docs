import {someEndpoint} from './enpoints-path';
import type {ResponseFailed, ResponseSuccessful} from "apiit";

someEndpoint.request({}).getResult()
  .then((response: ResponseSuccessful<ResponseType>) => {})
  .catch(({ error }: ResponseFailed) => {});
