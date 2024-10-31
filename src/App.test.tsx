import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('When the app renders', () => {
  test('2+2', () => {
    render(<App />);
    expect(2 + 2).toBe(4);
  });
});
