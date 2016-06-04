/* global define, it, describe */

import expect from 'expect';
import reducer from '../../reducers/reducer';

describe('the reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({});
  });

  it('should handle action', () => {
    expect(
      reducer({}, {
        type: 'action',
      })
    ).toEqual({});
  });
});
