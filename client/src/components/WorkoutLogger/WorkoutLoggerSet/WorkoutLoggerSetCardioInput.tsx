import clsx from "clsx";
import useWorkoutLogStore, { workoutLogItemByWorkoutSetIdSelector } from "../../../hooks/useWorkoutLogStore";
import { CheckCircle2 } from "lucide-react";
import { Root } from "@radix-ui/react-toggle";

type WorkoutLoggerSetCardioInputsProps = {
    workoutId: string;
    workoutExerciseId: string;
    workoutSetId: string;
};

const WorkoutLoggerSetCardioInputs = ({ workoutId, workoutExerciseId, workoutSetId }: WorkoutLoggerSetCardioInputsProps) => {
    const workoutLogItem = useWorkoutLogStore(workoutLogItemByWorkoutSetIdSelector(workoutSetId));
    const addWorkoutLogItem = useWorkoutLogStore(state => state.addWorkoutLogItem);
    const updateWorkoutLogItem = useWorkoutLogStore(state => state.updateWorkoutLogItem);

    const handleCompletedToggleChange = () => {
        if (!workoutLogItem) {
            addWorkoutLogItem({
                workoutId,
                workoutExerciseId,
                workoutSetId,
                weight: 0,
                reps: 0,
                complete: true,
            });
        } else {
            updateWorkoutLogItem({
                ...workoutLogItem,
                weight: 0,
                complete: !workoutLogItem.complete,
            });
        }
    };

    return (
        <div className="pt-2">
            <Root asChild pressed={workoutLogItem?.complete} onPressedChange={handleCompletedToggleChange}>
                <button
                    className={clsx("w-full h-12 flex items-center justify-center px-6 border-2 rounded-xl text-medium transition-colors", workoutLogItem?.complete ? "bg-accent text-white border-accent" : "text-white/20 border-white/10 hover:border-white/30 hover:text-white/40")}
                    data-testid="workoutLoggerSetCompleteInput"
                >
                    {workoutLogItem?.complete ? <CheckCircle2 aria-label="Completed" /> : "Complete"}
                </button>
            </Root>
        </div>
    );
};

export default WorkoutLoggerSetCardioInputs;