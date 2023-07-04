import useExerciseStore, { exerciseByIdSelector } from "../../hooks/useExerciseStore";

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

type WorkoutLoggerExerciseInfoProps = {
    exerciseId: string;
    instructionIndex: number;
    instructionAlphabeticIndex?: number;
}

const WorkoutLoggerExerciseInfo = ({ exerciseId, instructionIndex, instructionAlphabeticIndex }: WorkoutLoggerExerciseInfoProps) => {
    const exercise = useExerciseStore(exerciseByIdSelector(exerciseId));

    return (
        <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
            <span>{instructionIndex + 1}{typeof instructionAlphabeticIndex === "number" && alphabet[instructionAlphabeticIndex]}. </span>
            {exercise?.name}
        </div>
    );
};

export default WorkoutLoggerExerciseInfo;