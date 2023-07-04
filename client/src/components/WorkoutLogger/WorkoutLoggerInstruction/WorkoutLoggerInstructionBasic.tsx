import { WorkoutInstructionBasic } from "../../../models/Workout";
import Card from "../../Card";
import useWorkoutStore, { workoutExercisesByWorkoutInstructionIdSelector } from "../../../hooks/useWorkoutStore";
import WorkoutLoggerExercise from "../WorkoutLoggerExercise";

type WorkoutLoggerInstructionBasicProps = WorkoutInstructionBasic;

const WorkoutLoggerInstructionBasic = ({ _id, order }: WorkoutLoggerInstructionBasicProps) => {
    const workoutExercises = useWorkoutStore(workoutExercisesByWorkoutInstructionIdSelector(_id));

    return (
        <Card data-testid="workoutLoggerInstructionBasic">
            {workoutExercises.map(workoutExercise => <WorkoutLoggerExercise workoutInstructionIndex={order} {...workoutExercise} />)}
        </Card>
    );
};

export default WorkoutLoggerInstructionBasic;