import { create } from "zustand";
import { Workout, WorkoutExercise, WorkoutInstruction, WorkoutSet } from "../../models/Workout";
import { exampleWorkout, exampleWorkoutExercises, exampleWorkoutInstructions, exampleWorkoutSets } from "../../mocks/workout";

type WorkoutStoreState = {
    workout: Workout;
    workoutInstructions: WorkoutInstruction[];
    workoutExercises: WorkoutExercise[];
    workoutSets: WorkoutSet[];
}

export const workoutExercisesByWorkoutInstructionIdSelector = (workoutInstructionId: string) => (state: WorkoutStoreState) => state.workoutExercises.filter(workoutExercise => workoutExercise.workoutInstructionId === workoutInstructionId);
export const workoutSetsByWorkoutExerciseIdSelector = (workoutExerciseId: string) => (state: WorkoutStoreState) => state.workoutSets.filter(workoutSet => workoutSet.workoutExerciseId === workoutExerciseId);
export const workoutExerciseByWorkoutExerciseIdSelector = (workoutExerciseId: string) => (state: WorkoutStoreState) => state.workoutExercises.find(workoutExercise => workoutExercise._id === workoutExerciseId);

const useWorkoutStore = create<WorkoutStoreState>((set) => ({
    workout: exampleWorkout,
    workoutInstructions: exampleWorkoutInstructions,
    workoutExercises: exampleWorkoutExercises,
    workoutSets: exampleWorkoutSets,
}));

export default useWorkoutStore;