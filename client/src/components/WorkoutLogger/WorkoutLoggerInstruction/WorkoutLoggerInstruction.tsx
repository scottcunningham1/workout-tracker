import useExerciseStore, { exerciseByIdSelector } from "../../../hooks/useExerciseStore";
import { WorkoutInstruction } from "../../../models/Workout";
import Card from "../../Card";
import useWorkoutStore, { workoutExercisesByWorkoutInstructionIdSelector, workoutSetsByWorkoutExerciseIdSelector } from "../../../hooks/useWorkoutStore";
import WorkoutLoggerSet from "../WorkoutLoggerSet";

type WorkoutLoggerInstructionProps = WorkoutInstruction;

const WorkoutLoggerInstruction = ({ _id, order }: WorkoutLoggerInstructionProps) => {
    const workoutExercises = useWorkoutStore(workoutExercisesByWorkoutInstructionIdSelector(_id));
    const workoutSets = useWorkoutStore(workoutSetsByWorkoutExerciseIdSelector(workoutExercises[0]._id));
    const exercise = useExerciseStore(exerciseByIdSelector(workoutExercises[0].exerciseId));
    return (
        <Card>
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
                <span>{order + 1}. </span>
                {exercise?.name}
            </div>
            {workoutSets.map(workoutSet =>
                <WorkoutLoggerSet {...workoutSet} key={workoutSet._id} />
            )}
        </Card>
    );
};

export default WorkoutLoggerInstruction;