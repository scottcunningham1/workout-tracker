import Card from "../../Card";
import useWorkoutStore, { workoutExercisesByWorkoutInstructionIdSelector } from "../../../hooks/useWorkoutStore";
import { WorkoutInstructionSuperset } from "../../../models/Workout";
import WorkoutLoggerExercise from "../WorkoutLoggerExercise";

type WorkoutLoggerInstructionSupersetProps = WorkoutInstructionSuperset;

const WorkoutLoggerInstructionSuperset = ({ _id, order }: WorkoutLoggerInstructionSupersetProps) => {
    const workoutExercises = useWorkoutStore(workoutExercisesByWorkoutInstructionIdSelector(_id));

    return (
        <Card data-testid="workoutLoggerInstructionSuperset" className="relative">
            <div className="absolute left-0 top-0 w-2 h-full bg-accent rounded-l-2xl" />
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
                <div className="px-4 py-2 rounded-md bg-accent text-accent-foreground font-medium text-sm">Superset</div>
            </div>
            {workoutExercises.map(workoutExercise => <WorkoutLoggerExercise workoutInstructionIndex={order} displayAlphabeticInstructionOrder {...workoutExercise} />)}
        </Card>
    );
};

export default WorkoutLoggerInstructionSuperset;