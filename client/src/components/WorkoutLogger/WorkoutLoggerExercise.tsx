import useWorkoutStore, { workoutSetsByWorkoutExerciseIdSelector } from "../../hooks/useWorkoutStore";
import { WorkoutExercise } from "../../models/Workout";
import WorkoutLoggerExerciseInfo from "./WorkoutLoggerExerciseInfo";
import WorkoutLoggerSet from "./WorkoutLoggerSet";

type WorkoutLoggerExerciseProps = {
    workoutInstructionIndex: number;
    displayAlphabeticInstructionOrder?: boolean;
} & WorkoutExercise;

const WorkoutLoggerExercise = ({
    workoutInstructionIndex,
    displayAlphabeticInstructionOrder,
    _id,
    exerciseId,
    order,
}: WorkoutLoggerExerciseProps) => {
    const workoutSets = useWorkoutStore(workoutSetsByWorkoutExerciseIdSelector(_id));

    return (
        <>
            <WorkoutLoggerExerciseInfo exerciseId={exerciseId} instructionIndex={workoutInstructionIndex} instructionAlphabeticIndex={displayAlphabeticInstructionOrder ? order : undefined} />
            {workoutSets.map(workoutSet =>
                <WorkoutLoggerSet {...workoutSet} key={workoutSet._id} />
            )}
        </>
    );
};

export default WorkoutLoggerExercise;