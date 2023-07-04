import clsx from "clsx";

type CardProps = {
    className?: string;
    children: React.ReactNode;
    "data-testid"?: string;
}

const Card = ({ className, children, ...props }: CardProps) => {
    return (
        <div className={clsx("bg-surface rounded-2xl p-6", className)} {...props}>
            {children}
        </div>
    );
};

export default Card;