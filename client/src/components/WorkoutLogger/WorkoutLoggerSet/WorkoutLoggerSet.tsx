import useExerciseStore, { exerciseByIdSelector } from "../../../hooks/useExerciseStore/useExerciseStore";
import useWorkoutStore, { workoutExerciseByWorkoutExerciseIdSelector } from "../../../hooks/useWorkoutStore/useWorkoutStore";
import { Category, ExerciseType } from "../../../models/Exercise";
import { WorkoutMeasurementField, WorkoutSet } from "../../../models/Workout";
import WorkoutLoggerSetCardioInputs from "./WorkoutLoggerSetCardioInput";
import WorkoutLoggerSetResistanceInputs from "./WorkoutLoggerSetResistanceInputs";

type WorkoutSetProps = WorkoutSet;

const mapMeasurementFieldToLabel: Record<WorkoutMeasurementField, string> = {
    "reps": "Reps",
    "weight": "Weight",
    "distance": "Distance",
    "pace": "Pace",
    "time": "Time",
};

const mapMeasurementFieldToValueSuffix: Record<WorkoutMeasurementField, string> = {
    "reps": "",
    "weight": "KG",
    "distance": "KM",
    "pace": "min/KM",
    "time": ""
};

const exerciseCategoryToTypeMap: Record<Category, ExerciseType> = {
    "assisted bodyweight": "resistance",
    "cardio": "cardio",
    "crossfit": "resistance",
    "olympic weightlifting": "resistance",
    "plyometrics": "cardio",
    "powerlifting": "resistance",
    "strength": "resistance",
    "stretching": "cardio",
    "strongman": "resistance",
    "weighted bodyweight": "resistance",
}

const WorkoutLoggerSet = ({ _id, order, measurementValues, workoutExerciseId, workoutId }: WorkoutSetProps) => {
    const workoutExercise = useWorkoutStore(workoutExerciseByWorkoutExerciseIdSelector(workoutExerciseId));
    const exercise = useExerciseStore(exerciseByIdSelector(workoutExercise?.exerciseId ?? ""));

    if (!exercise) return null;

    const exerciseType = exerciseCategoryToTypeMap[exercise.category];

    if (!workoutExercise) return null;

    return (
        <div className="relative space-y-2 pb-6 border-b border-white/10 mb-4" data-testid="workoutLoggerSet">
            <div className="font-semibold">Set {order + 1}</div>
            <div>
                <p className="opacity-80">Target</p>
                <div className="flex items-center gap-6">
                    {measurementValues.map((measurementValue, i) =>
                        <div className="flex items-center gap-4" key={`measurementTarget-${_id}-${workoutExercise.measurementFields[i]}`}>
                            {mapMeasurementFieldToLabel[workoutExercise.measurementFields[i]]}
                            <div className="bg-background py-1 px-2 rounded-md flex gap-1"><span>{measurementValue}</span>{mapMeasurementFieldToValueSuffix[workoutExercise.measurementFields[i]]}</div>
                        </div>
                    )}
                </div>
            </div>
            {exerciseType === "resistance" &&
                <WorkoutLoggerSetResistanceInputs workoutId={workoutId} workoutExerciseId={workoutExerciseId} workoutSetId={_id} />
            }
            {exerciseType === "cardio" &&
                <WorkoutLoggerSetCardioInputs workoutId={workoutId} workoutExerciseId={workoutExerciseId} workoutSetId={_id} />
            }
        </div>
    );
};

export default WorkoutLoggerSet;