import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from "./Button";

describe("Button", async () => {
    afterEach(() => { cleanup() });

    it("Should render the button correctly", async () => {
        render(<Button>Click Me</Button>);
        const button = screen.queryByText("Click Me");

        expect(button).toBeInTheDocument();
    });

    it("Should fire onClick on click when onClick prop is provided", async () => {
        const user = userEvent.setup();
        const mockOnClick = vi.fn();
        render(<Button onClick={mockOnClick}>Click Me</Button>);
        const button = screen.queryByText("Click Me");

        await user.click(button as HTMLButtonElement);

        expect(mockOnClick).toBeCalled();
    });

    it("Should be disabled if the disabled prop is provided", async () => {
        render(<Button disabled>Click Me</Button>);
        const button = screen.queryByText("Click Me");

        expect(button).toBeDisabled();
    });

});