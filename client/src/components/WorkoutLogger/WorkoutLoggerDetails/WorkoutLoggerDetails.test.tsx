import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import WorkoutLoggerDetails from "./WorkoutLoggerDetails";

describe("WorkoutLoggerDetails", async () => {
    afterEach(() => { cleanup() });

    it("Should render the WorkoutLoggerDetails correctly", async () => {
        render(<WorkoutLoggerDetails />);
        const workoutLoggerDetails = screen.getByTestId("workoutLoggerDetails");

        expect(workoutLoggerDetails).toBeInTheDocument();
    });

    it("Should display the current workout name", async () => {
        render(<WorkoutLoggerDetails />);
        const workoutLoggerDetails = screen.getByTestId("workoutLoggerDetails");

        expect(workoutLoggerDetails).toHaveTextContent("Legs A");
    });

});