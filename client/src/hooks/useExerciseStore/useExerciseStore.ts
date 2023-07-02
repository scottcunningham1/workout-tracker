import { create } from "zustand";
import { Exercise } from "../../models/Exercise";
import { exampleExercises } from "../../mocks/exercise";

type ExerciseStoreState = {
    exercises: Exercise[];
}

export const exerciseByIdSelector = (id: string) => (state: ExerciseStoreState) => state.exercises.find(exercise => exercise._id === id);

const useExerciseStore = create<ExerciseStoreState>((set) => ({
    exercises: exampleExercises
}));

export default useExerciseStore;