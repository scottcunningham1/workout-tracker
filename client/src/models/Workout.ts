export type Workout = {
    _id: string;
    name: string;
};

type WorkoutInstructionCore = {
    _id: string;
    workoutId: string;
    order: number;
}

export type WorkoutInstructionBasic = {
    type: "basic";
} & WorkoutInstructionCore;

export type WorkoutInstructionSuperset = {
    type: "superset";
} & WorkoutInstructionCore;

export type WorkoutInstruction = WorkoutInstructionBasic | WorkoutInstructionSuperset;

export type WorkoutExercise = {
    _id: string;
    workoutId: string;
    workoutInstructionId: string;
    exerciseId: string;
    measurementFields: WorkoutMeasurementField[];
    order: number;
}

export type WorkoutMeasurementField = "reps" | "weight" | "distance" | "pace" | "time";

export type WorkoutSet = {
    _id: string;
    workoutId: string;
    workoutExerciseId: string;
    measurementValues: number[];
    order: number;
}

export type WorkoutLogItem = {
    workoutId: string;
    workoutExerciseId: string;
    workoutSetId: string;
    reps: number;
    weight: number;
    complete: boolean;
}