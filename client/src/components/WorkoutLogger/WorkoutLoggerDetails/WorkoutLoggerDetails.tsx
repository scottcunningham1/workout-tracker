import useWorkoutStore from "../../../hooks/useWorkoutStore";

const WorkoutLoggerDetails = () => {
    const workout = useWorkoutStore(state => state.workout);
    return (
        <div data-testid="workoutLoggerDetails">
            <h1 className="text-xl font-semibold">{workout.name}</h1>
        </div>
    );
};

export default WorkoutLoggerDetails;