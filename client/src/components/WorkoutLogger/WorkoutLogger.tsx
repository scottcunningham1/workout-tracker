import WorkoutLoggerDetails from "./WorkoutLoggerDetails/WorkoutLoggerDetails";
import WorkoutLoggerInstruction from "./WorkoutLoggerInstruction/WorkoutLoggerInstruction";
import useWorkoutStore from "../../hooks/useWorkoutStore";
import useWorkoutLogStore from "../../hooks/useWorkoutLogStore";
import { useEffect } from "react";

const WorkoutLogger = () => {
    const workoutInstructions = useWorkoutStore(state => state.workoutInstructions);

    const initializeWorkoutLog = useWorkoutLogStore(state => state.initializeWorkoutLog);

    useEffect(() => {
        initializeWorkoutLog(new Date());
    }, [initializeWorkoutLog]);

    return (
        <>
            <WorkoutLoggerDetails />
            {workoutInstructions.map(workoutInstruction =>
                <WorkoutLoggerInstruction {...workoutInstruction} key={workoutInstruction._id} />
            )}
        </>
    );
};

export default WorkoutLogger;
