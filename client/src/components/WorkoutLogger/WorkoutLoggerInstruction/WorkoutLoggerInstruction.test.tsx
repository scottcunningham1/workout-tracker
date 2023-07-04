import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import WorkoutLoggerInstruction from "./WorkoutLoggerInstruction";
import { exampleWorkoutExercises, exampleWorkoutInstructions, exampleWorkoutSets } from '../../../mocks/workout';

const mockWorkoutInstructionBasic = exampleWorkoutInstructions[0];
const mockWorkoutInstructionSuperset = exampleWorkoutInstructions[1];
const mockWorkoutExercise = (id: string) => exampleWorkoutExercises.find(workoutExercise => workoutExercise.workoutInstructionId === id);
const mockWorkoutSets = (id: string) => exampleWorkoutSets.filter(workoutSet => workoutSet.workoutExerciseId === id);

describe("WorkoutLoggerInstruction", async () => {
    afterEach(() => { cleanup() });

    it("Should render the WorkoutLoggerDetails correctly", async () => {
        render(<WorkoutLoggerInstruction {...mockWorkoutInstructionBasic} />);
        const workoutLoggerInstruction = screen.getByText("Ab Roller");

        expect(workoutLoggerInstruction).toBeInTheDocument();
    });

    it("Should display the correct workout instruction number", async () => {
        const { order } = mockWorkoutInstructionBasic;
        render(<WorkoutLoggerInstruction {...mockWorkoutInstructionBasic} />);
        const workoutLoggerInstruction = screen.getByText("Ab Roller");

        expect(workoutLoggerInstruction).toHaveTextContent(`${order + 1}. Ab Roller`);
    });

    it("Should display the correct number of workout sets", async () => {
        const workoutExercise = mockWorkoutExercise(mockWorkoutInstructionBasic._id);
        if (workoutExercise) {
            render(<WorkoutLoggerInstruction {...mockWorkoutInstructionBasic} />);
            const workoutLoggerInstructionSets = screen.getAllByTestId("workoutLoggerSet");

            expect(workoutLoggerInstructionSets).toHaveLength(mockWorkoutSets(workoutExercise._id).length);
        }
    });

    it("Should display a basic workout instruction if instruction type is basic", () => {
        render(<WorkoutLoggerInstruction {...mockWorkoutInstructionBasic} />);
        const workoutLoggerInstructionBasic = screen.getByTestId("workoutLoggerInstructionBasic");

        expect(workoutLoggerInstructionBasic).toBeInTheDocument();
    });

    it("Should display a superset workout instruction if instruction type is superset", () => {
        render(<WorkoutLoggerInstruction {...mockWorkoutInstructionSuperset} />);
        const workoutLoggerInstructionSuperset = screen.getByTestId("workoutLoggerInstructionSuperset");

        expect(workoutLoggerInstructionSuperset).toBeInTheDocument();
        expect(workoutLoggerInstructionSuperset).toHaveTextContent("Superset");
    });

    it("Should display a numberic + alphabetic ordering for superset workout instruction exercises", () => {
        render(<WorkoutLoggerInstruction {...mockWorkoutInstructionSuperset} />);
        const workoutLoggerInstructionSuperset = screen.getByTestId("workoutLoggerInstructionSuperset");

        expect(workoutLoggerInstructionSuperset).toHaveTextContent(`${mockWorkoutInstructionSuperset.order + 1}a.`);
        expect(workoutLoggerInstructionSuperset).toHaveTextContent(`${mockWorkoutInstructionSuperset.order + 1}b.`);
    });
});