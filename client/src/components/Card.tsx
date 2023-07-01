import clsx from "clsx";

type CardProps = {
    className?: string;
    children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
    return (
        <div className={clsx("bg-surface rounded-2xl p-6", className)}>
            {children}
        </div>
    );
};

export default Card;