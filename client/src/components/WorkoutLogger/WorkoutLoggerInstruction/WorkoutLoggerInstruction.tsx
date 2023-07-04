import { WorkoutInstruction } from "../../../models/Workout";
import Card from "../../Card";
import WorkoutLoggerInstructionBasic from "./WorkoutLoggerInstructionBasic";
import WorkoutLoggerInstructionSuperset from "./WorkoutLoggerInstructionSuperset";

type WorkoutLoggerInstructionProps = WorkoutInstruction;

const WorkoutLoggerInstruction = ({ type, ...props }: WorkoutLoggerInstructionProps) => {
    if (type === "basic") return <WorkoutLoggerInstructionBasic type={type} {...props} />;

    if (type === "superset") return <WorkoutLoggerInstructionSuperset type={type} {...props} />

    return (
        <Card>
            Workout instruction type not implemented.
        </Card>
    );
};

export default WorkoutLoggerInstruction;