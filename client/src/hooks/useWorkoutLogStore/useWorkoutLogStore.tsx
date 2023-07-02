import { create } from "zustand";
import { WorkoutLogItem } from "../../models/Workout";

type WorkoutLogState = {
    workoutStartTime?: Date;
    workoutLogItems: WorkoutLogItem[];
    initializeWorkoutLog: (date: Date) => void;
    addWorkoutLogItem: (workoutLogItem: WorkoutLogItem) => void;
    updateWorkoutLogItem: (workoutLogItem: WorkoutLogItem) => void;
}

export const workoutLogItemByWorkoutSetIdSelector = (id: string) => (state: WorkoutLogState) => state.workoutLogItems.find(workoutLogItem => workoutLogItem.workoutSetId === id);

const useWorkoutLogStore = create<WorkoutLogState>((set) => ({
    workoutLogItems: [],
    initializeWorkoutLog: (date) => set(state => ({ ...state, workoutStartTime: date })),
    addWorkoutLogItem: (workoutLogItem) => set(state => ({ ...state, workoutLogItems: [...state.workoutLogItems, workoutLogItem] })),
    updateWorkoutLogItem: (workoutLogItem) => set(state => ({ ...state, workoutLogItems: [...state.workoutLogItems.filter(workoutLogItemExisting => workoutLogItemExisting.workoutSetId !== workoutLogItem.workoutSetId), workoutLogItem] }))
}));

export default useWorkoutLogStore;