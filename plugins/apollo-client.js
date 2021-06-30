import { createUploadLink } from 'apollo-upload-client';
import fetch from 'isomorphic-fetch'
import Cookies from 'js-cookie'

export default function (context) {
  return {
    defaultHttpLink: false,
    link: createUploadLink({
      uri: () => {
        if (process.client) {
          // return `${process.env.frontend_host_url}${process.env.frontend_api_url}`;
          return `${process.env.frontend_host_url}`;
        }
        else {
          // return `${process.env.backend_host_url}${process.env.backend_api_url}`
          return `${process.env.backend_host_url}`
        }
      },
      onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
      }
      // credentials: 'include',
      // fetch: (uri, options) => {
      //   let cookie;
      //   if (process.client) {
      //     cookie = Cookies.get('connect.sid');
      //   }
      //   else {
      //     cookie = (context.req && context.req.headers.cookie) ? context.req.headers.cookie : '';
      //   }
      //   options.headers.cookie = cookie;
      //
      //   return fetch(uri, options)
      // }
    })
  }
}
