
import { CALL_API } from 'redux-api-middleware';

export function fetch() {
  return {
    [CALL_API]: {
      endpoint: 'http://www.example.com/',
      method: 'GET',
      types: ['async request', 'async success', 'async failure'],
    },
  };
}
