import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import WorkoutLoggerInstruction from "./WorkoutLoggerInstruction";
import { exampleWorkoutExercises, exampleWorkoutInstructions, exampleWorkoutSets } from '../../../mocks/workout';

const mockWorkoutInstruction = exampleWorkoutInstructions[0];
const mockWorkoutExercise = exampleWorkoutExercises.find(workoutExercise => workoutExercise.workoutInstructionId === mockWorkoutInstruction._id);
const mockWorkoutSets = exampleWorkoutSets.filter(workoutSet => workoutSet.workoutExerciseId === mockWorkoutExercise?._id);

describe("WorkoutLoggerInstruction", async () => {
    afterEach(() => { cleanup() });

    it("Should render the WorkoutLoggerDetails correctly", async () => {
        render(<WorkoutLoggerInstruction {...mockWorkoutInstruction} />);
        const workoutLoggerInstruction = screen.getByText("Ab Roller");

        expect(workoutLoggerInstruction).toBeInTheDocument();
    });

    it("Should display the correct workout instruction number", async () => {
        const { order } = mockWorkoutInstruction;
        render(<WorkoutLoggerInstruction {...mockWorkoutInstruction} />);
        const workoutLoggerInstruction = screen.getByText("Ab Roller");

        expect(workoutLoggerInstruction).toHaveTextContent(`${order + 1}. Ab Roller`);
    });

    it("Should display the correct number of workout sets", async () => {
        render(<WorkoutLoggerInstruction {...mockWorkoutInstruction} />);
        const workoutLoggerInstructionSets = screen.getAllByTestId("workoutLoggerSet");

        expect(workoutLoggerInstructionSets).toHaveLength(mockWorkoutSets.length);
    });
});