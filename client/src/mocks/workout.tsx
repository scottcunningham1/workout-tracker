import { Workout, WorkoutExercise, WorkoutInstruction, WorkoutSet } from "../models/Workout";

const workoutId = "abcd1234";

export const exampleWorkout: Workout = {
    _id: workoutId,
    name: "Legs A",
}

export const exampleWorkoutInstructions: WorkoutInstruction[] = [
    {
        _id: "inst1",
        workoutId: workoutId,
        order: 0,
        type: "basic",
    },
    {
        _id: "inst2",
        workoutId: workoutId,
        order: 1,
        type: "superset",
    },
    {
        _id: "inst3",
        workoutId: workoutId,
        order: 2,
        type: "basic",
    },
    {
        _id: "inst4",
        workoutId: workoutId,
        order: 3,
        type: "basic",
    },
];

export const exampleWorkoutExercises: WorkoutExercise[] = [
    {
        _id: "exer1",
        workoutId: workoutId,
        workoutInstructionId: "inst1",
        exerciseId: "63fa0c83a6fdea19fc749a98",
        order: 0,
        measurementFields: ["reps", "weight"],
    },
    {
        _id: "exer2",
        workoutId: workoutId,
        workoutInstructionId: "inst2",
        exerciseId: "63fa0c83a6fdea19fc749a9e",
        order: 0,
        measurementFields: ["reps", "weight"],
    },
    {
        _id: "exer2b",
        workoutId: workoutId,
        workoutInstructionId: "inst2",
        exerciseId: "63fa0c83a6fdea19fc749aae",
        order: 1,
        measurementFields: ["reps", "weight"],
    },
    {
        _id: "exer3",
        workoutId: workoutId,
        workoutInstructionId: "inst3",
        exerciseId: "63fa0c83a6fdea19fc749aa3",
        order: 0,
        measurementFields: ["reps", "weight"],
    },
    {
        _id: "exer4",
        workoutId: workoutId,
        workoutInstructionId: "inst4",
        exerciseId: "63fa0c83a6fdea19fc749aae",
        order: 0,
        measurementFields: ["reps", "weight"],
    },
];

export const exampleWorkoutSets: WorkoutSet[] = [
    {
        _id: "setA1",
        workoutId: workoutId,
        workoutExerciseId: "exer1",
        measurementValues: [12, 40],
        order: 0,
    },
    {
        _id: "setA2",
        workoutId: workoutId,
        workoutExerciseId: "exer1",
        measurementValues: [12, 40],
        order: 1,
    },
    {
        _id: "setA3",
        workoutId: workoutId,
        workoutExerciseId: "exer1",
        measurementValues: [12, 40],
        order: 2,
    },
    {
        _id: "setB1",
        workoutId: workoutId,
        workoutExerciseId: "exer2",
        measurementValues: [12, 40],
        order: 0,
    },
    {
        _id: "setB2",
        workoutId: workoutId,
        workoutExerciseId: "exer2",
        measurementValues: [12, 40],
        order: 1,
    },
    {
        _id: "setB3",
        workoutId: workoutId,
        workoutExerciseId: "exer2",
        measurementValues: [12, 40],
        order: 2,
    },
    {
        _id: "setB1a",
        workoutId: workoutId,
        workoutExerciseId: "exer2b",
        measurementValues: [12, 40],
        order: 0,
    },
    {
        _id: "setB2a",
        workoutId: workoutId,
        workoutExerciseId: "exer2b",
        measurementValues: [12, 40],
        order: 1,
    },
    {
        _id: "setB3a",
        workoutId: workoutId,
        workoutExerciseId: "exer2b",
        measurementValues: [12, 40],
        order: 2,
    },
    {
        _id: "setC1",
        workoutId: workoutId,
        workoutExerciseId: "exer3",
        measurementValues: [12, 40],
        order: 0,
    },
    {
        _id: "setC2",
        workoutId: workoutId,
        workoutExerciseId: "exer3",
        measurementValues: [12, 40],
        order: 1,
    },
    {
        _id: "setC3",
        workoutId: workoutId,
        workoutExerciseId: "exer3",
        measurementValues: [12, 40],
        order: 2,
    },
    {
        _id: "setD1",
        workoutId: workoutId,
        workoutExerciseId: "exer4",
        measurementValues: [12, 40],
        order: 0,
    },
    {
        _id: "setD2",
        workoutId: workoutId,
        workoutExerciseId: "exer4",
        measurementValues: [12, 40],
        order: 1,
    },
    {
        _id: "setD3",
        workoutId: workoutId,
        workoutExerciseId: "exer4",
        measurementValues: [12, 40],
        order: 2,
    },
];