/* eslint-disable @typescript-eslint/no-unsafe-call */
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
