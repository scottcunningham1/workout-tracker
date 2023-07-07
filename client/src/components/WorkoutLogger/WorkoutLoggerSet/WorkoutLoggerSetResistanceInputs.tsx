import useWorkoutLogStore, { workoutLogItemByWorkoutSetIdSelector } from "../../../hooks/useWorkoutLogStore";
import Input from "../../Input";

type WorkoutLoggerSetResistanceInputsProps = {
    workoutId: string;
    workoutExerciseId: string;
    workoutSetId: string;
};

const WorkoutLoggerSetResistanceInputs = ({ workoutId, workoutExerciseId, workoutSetId }: WorkoutLoggerSetResistanceInputsProps) => {
    const workoutLogItem = useWorkoutLogStore(workoutLogItemByWorkoutSetIdSelector(workoutSetId));
    const addWorkoutLogItem = useWorkoutLogStore(state => state.addWorkoutLogItem);
    const updateWorkoutLogItem = useWorkoutLogStore(state => state.updateWorkoutLogItem);

    const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if (isNaN(value)) return;

        if (!workoutLogItem) {
            addWorkoutLogItem({
                workoutId,
                workoutExerciseId,
                workoutSetId,
                weight: 0,
                reps: value,
                complete: value !== 0,
            });
        } else {
            updateWorkoutLogItem({
                ...workoutLogItem,
                workoutId,
                workoutExerciseId,
                workoutSetId,
                reps: value,
                complete: value !== 0 && workoutLogItem.reps !== 0,
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
                workoutSetId,
                weight: value,
                reps: 0,
                complete: value !== 0,
            });
        } else {
            updateWorkoutLogItem({
                ...workoutLogItem,
                weight: value,
                complete: value !== 0 && workoutLogItem.reps !== 0,
            });
        }
    };

    return (
        <div>
            <p className="opacity-80 mb-2">Achieved</p>
            <div className="flex items-center gap-6">
                <Input className="text-center" type="text" inputMode="numeric" pattern="[0-9]*" placeholder="0" value={workoutLogItem?.reps ?? ""} onChange={handleRepsChange} suffix="reps" data-testid="workoutLoggerSetRepsInput" />
                <Input className="text-center" type="text" inputMode="numeric" pattern="[0-9]*" placeholder="0" value={workoutLogItem?.weight ?? ""} onChange={handleWeightChange} suffix="kg" data-testid="workoutLoggerSetWeightInput" />
            </div>
        </div>
    );
};

export default WorkoutLoggerSetResistanceInputs;