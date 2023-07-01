import clsx from "clsx";

type ButtonVariant = "default" | "secondary";

type ButtonProps = {
    variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = "default", className, children, ...props }: ButtonProps) => {
    return (
        <button {...props} className={clsx("h-12 flex items-center px-6 rounded-xl font-medium disabled:opacity-75", variant === "default" && "bg-accent text-accent-foreground", variant === "secondary" && "bg-foreground text-background", className)}>{children}</button>
    );
};

export default Button;