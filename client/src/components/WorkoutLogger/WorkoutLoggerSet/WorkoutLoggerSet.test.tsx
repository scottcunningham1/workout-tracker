import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import WorkoutLoggerSet from "./WorkoutLoggerSet";
import { exampleWorkoutSets } from '../../../mocks/workout';

const mockWorkoutSet = exampleWorkoutSets[0];
const mockWorkoutSetCardio = exampleWorkoutSets[exampleWorkoutSets.length - 1];

describe("WorkoutLoggerSet", async () => {
    afterEach(() => { cleanup() });

    it("Should render the WorkoutLoggerDetails correctly", async () => {
        render(<WorkoutLoggerSet {...mockWorkoutSet} />);
        const workoutLoggerSet = screen.getByTestId("workoutLoggerSet");

        expect(workoutLoggerSet).toBeInTheDocument();
    });

    it("Should display the correct workout set number", async () => {
        const { order } = mockWorkoutSet;
        render(<WorkoutLoggerSet {...mockWorkoutSet} />);
        const workoutLoggerSet = screen.getByTestId("workoutLoggerSet");

        expect(workoutLoggerSet).toHaveTextContent("Set " + (order + 1));
    });

    it("Should display the correct workout set target fields and values", async () => {
        const { measurementValues } = mockWorkoutSet;
        render(<WorkoutLoggerSet {...mockWorkoutSet} />);
        const workoutLoggerSet = screen.getByTestId("workoutLoggerSet");

        expect(workoutLoggerSet).toHaveTextContent("Reps");
        expect(workoutLoggerSet).toHaveTextContent(measurementValues[0].toString());
        expect(workoutLoggerSet).toHaveTextContent("Weight");
        expect(workoutLoggerSet).toHaveTextContent(measurementValues[1].toString() + "KG");
    });

    it("Should render reps and weight log inputs for exercise of resistance type", () => {
        render(<WorkoutLoggerSet {...mockWorkoutSet} />);
        const workoutLoggerSetRepsInput = screen.getByTestId("workoutLoggerSetRepsInput");
        const workoutLoggerSetWeightInput = screen.getByTestId("workoutLoggerSetWeightInput");

        expect(workoutLoggerSetRepsInput).toBeInTheDocument();
        expect(workoutLoggerSetWeightInput).toBeInTheDocument();
    });

    it("Should render complete check input for exercise of cardiovascular type", async () => {
        render(<WorkoutLoggerSet {...mockWorkoutSetCardio} />);
        const workoutLoggerSetCompleteInput = screen.getByTestId("workoutLoggerSetCompleteInput");

        expect(workoutLoggerSetCompleteInput).toBeInTheDocument();
    });

    it("Should allow a user to input their achieved reps", async () => {
        const userInputValue = "2";
        const user = userEvent.setup();
        render(<WorkoutLoggerSet {...mockWorkoutSet} />);
        const workoutLoggerSetRepsInput = screen.getByTestId("workoutLoggerSetRepsInput");

        await user.click(workoutLoggerSetRepsInput);
        await user.type(workoutLoggerSetRepsInput, userInputValue, {});

        expect(workoutLoggerSetRepsInput).toHaveValue(userInputValue);
    });

    it("Should allow a user to input their achieved weight", async () => {
        const userInputValue = "100";
        const user = userEvent.setup();
        render(<WorkoutLoggerSet {...mockWorkoutSet} />);
        const workoutLoggerSetWeightInput = screen.getByTestId("workoutLoggerSetWeightInput");

        await user.click(workoutLoggerSetWeightInput);
        await user.type(workoutLoggerSetWeightInput, userInputValue, {});

        expect(workoutLoggerSetWeightInput).toHaveValue(userInputValue);
    });

    it("should allow a user to toggle complete state of cardiovascular exercise type", async () => {
        const user = userEvent.setup();
        render(<WorkoutLoggerSet {...mockWorkoutSetCardio} />);
        const workoutLoggerSetCompleteInput = screen.getByTestId("workoutLoggerSetCompleteInput");

        await user.click(workoutLoggerSetCompleteInput);
        expect(workoutLoggerSetCompleteInput).toHaveAttribute("data-state", "on");
        await user.click(workoutLoggerSetCompleteInput);
        expect(workoutLoggerSetCompleteInput).toHaveAttribute("data-state", "off");
    });
});