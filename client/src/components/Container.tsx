import clsx from "clsx";

type ContainerProps = {
    className?: string;
    children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={clsx("p-4 sm:p-6 mx-auto w-full max-w-3xl", className)}>{children}</div>
    );
};

export default Container;