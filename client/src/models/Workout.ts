export type Workout = {
    _id: string;
    name: string;
};

export type WorkoutInstruction = {
    _id: string;
    workoutId: string;
    order: number;
}

export type WorkoutExercise = {
    _id: string;
    workoutId: string;
    workoutInstructionId: string;
    exerciseId: string;
    measurementFields: [WorkoutMeasurementField, WorkoutMeasurementField];
    order: number;
}

export type WorkoutMeasurementField = "reps" | "weight";

export type WorkoutSet = {
    _id: string;
    workoutId: string;
    workoutExerciseId: string;
    measurementValues: [number, number];
    order: number;
}

export type WorkoutLogItem = {
    workoutId: string;
    workoutExerciseId: string;
    workoutSetId: string;
    reps: number;
    weight: number;
}