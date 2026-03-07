import { describe, it, expect } from 'vitest';

// A very simple test to verify the testing setup.
// Once Vitest is installed you can run it with `npm test`.

describe('sanity check', () => {
  it('can perform basic arithmetic', () => {
    expect(1 + 2).toBe(3);
  });

  it('renders a simple string', () => {
    const str = 'hello';
    expect(str).toBe('hello');
  });
});
