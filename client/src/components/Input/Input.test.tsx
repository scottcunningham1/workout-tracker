import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from "./Input";

describe("Input", async () => {
    afterEach(() => { cleanup() });

    it("Should render the Input correctly", async () => {
        render(<Input data-testid="myInput" />);
        const input = screen.queryByTestId("myInput");

        expect(input).toBeInTheDocument();
    });

    it("Should call onChange event handler when user inputs a value", async () => {
        const user = userEvent.setup();
        const mockOnChange = vi.fn();
        render(<Input data-testid="myInput" onChange={mockOnChange} />);
        const input = screen.queryByTestId("myInput") as HTMLInputElement;

        await user.click(input);
        await user.type(input, "a", {});

        expect(mockOnChange).toBeCalled();
    });

    it("Should be disabled if the disabled prop is provided", async () => {
        render(<Input disabled data-testid="myInput" />);
        const input = screen.queryByTestId("myInput") as HTMLInputElement;

        expect(input).toBeDisabled();
    });

    it("Should display a suffix if the suffix prop is provided", async () => {
        render(<Input disabled data-testid="myInput" suffix="kg" />);
        const input = screen.queryByTestId("myInput") as HTMLInputElement;

        expect(input.nextSibling).toHaveTextContent("kg");
    });

});