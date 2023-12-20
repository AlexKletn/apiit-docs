import {someEndpoint} from './enpoints-path';

const request = someEndpoint.request({});

request.on("load", (response) => {
  /* manipulations with response response */
})

// other events

request.on("cancel", () => {}) // request cancelled

request.on("progress", (progressEvent: ProgressEvent) => {}) // request progress
request.on("progress:upload", (progressEvent: ProgressEvent) => {}) // request upload progress
request.on("progress:download", (progressEvent: ProgressEvent) => {}) // request download progress

request.on("error", (error) => {}) // request error
