import example from '../src/example.js';

describe('example', function () {
  it('should wrap an empty string', function () {
    expect(example('')).toBe('example: ""');
  });

  it('should wrap a string', function () {
    expect(example('hello')).toBe('example: "hello"');
  });
});
