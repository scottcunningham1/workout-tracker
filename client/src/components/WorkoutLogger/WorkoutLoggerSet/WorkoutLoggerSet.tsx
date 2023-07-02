import useWorkoutLogStore, { workoutLogItemByWorkoutSetIdSelector } from "../../../hooks/useWorkoutLogStore";
import useWorkoutStore, { workoutExerciseByWorkoutExerciseIdSelector } from "../../../hooks/useWorkoutStore/useWorkoutStore";
import { WorkoutMeasurementField, WorkoutSet } from "../../../models/Workout";
import Input from "../../Input";

type WorkoutSetProps = WorkoutSet;

const mapMeasurementFieldToLabel: Record<WorkoutMeasurementField, string> = {
    "reps": "Reps",
    "weight": "Weight",
};

const mapMeasurementFieldToValueSuffix: Record<WorkoutMeasurementField, string> = {
    "reps": "",
    "weight": "KG",
};

const WorkoutLoggerSet = ({ _id, order, measurementValues, workoutExerciseId, workoutId }: WorkoutSetProps) => {
    const workoutExercise = useWorkoutStore(workoutExerciseByWorkoutExerciseIdSelector(workoutExerciseId));
    const workoutLogItem = useWorkoutLogStore(workoutLogItemByWorkoutSetIdSelector(_id));
    const addWorkoutLogItem = useWorkoutLogStore(state => state.addWorkoutLogItem);
    const updateWorkoutLogItem = useWorkoutLogStore(state => state.updateWorkoutLogItem);

    const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if (isNaN(value)) return;

        if (!workoutLogItem) {
            addWorkoutLogItem({
                workoutId,
                workoutExerciseId,
                workoutSetId: _id,
                weight: 0,
                reps: value
            });
        } else {
            updateWorkoutLogItem({
                ...workoutLogItem,
                reps: value,
            });
        }
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if (isNaN(value)) return;

        if (!workoutLogItem) {
            addWorkoutLogItem({
                workoutId,
                workoutExerciseId,
                workoutSetId: _id,
                weight: value,
                reps: 0
            });
        } else {
            updateWorkoutLogItem({
                ...workoutLogItem,
                weight: value,
            });
        }
    };

    if (!workoutExercise) return null;

    return (
        <div className="space-y-2 pb-6 border-b border-white/10 mb-4" data-testid="workoutLoggerSet">
            <div className="font-semibold">Set {order + 1}</div>
            <div>
                <p className="opacity-80">Target</p>
                <div className="flex items-center gap-6">
                    {measurementValues.map((measurementValue, i) =>
                        <div className="flex items-center gap-4" key={`measurementTarget-${_id}-${workoutExercise.measurementFields[i]}`}>
                            {mapMeasurementFieldToLabel[workoutExercise.measurementFields[i]]}
                            <div className="bg-background py-1 px-2 rounded-sm flex gap-1"><span>{measurementValue}</span>{mapMeasurementFieldToValueSuffix[workoutExercise.measurementFields[i]]}</div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <p className="opacity-80 mb-2">Achieved</p>
                <div className="flex items-center gap-6">
                    <Input className="text-center" type="text" inputMode="numeric" pattern="[0-9]*" value={workoutLogItem?.reps ?? 0} onChange={handleRepsChange} suffix="reps" data-testid="workoutLoggerSetRepsInput" />
                    <Input className="text-center" type="text" inputMode="numeric" pattern="[0-9]*" value={workoutLogItem?.weight ?? 0} onChange={handleWeightChange} suffix="kg" data-testid="workoutLoggerSetWeightInput" />
                </div>
            </div>
        </div>
    );
};

export default WorkoutLoggerSet;