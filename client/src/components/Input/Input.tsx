import clsx from "clsx";

type InputProps = {
    suffix?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, suffix, ...props }: InputProps) => {
    return (
        <div className="relative">
            <input {...props} className={clsx("h-12 w-full rounded-xl bg-input-background text-input-foreground focus:outline-none focus:outline-accent px-6 disabled:opacity-75", suffix && "pr-6", className)} />
            {suffix &&
                <span className="absolute top-0 right-0 h-full flex items-center font-semibold text-sm text-input-foreground pr-4">{suffix}</span>
            }
        </div>
    );
};

export default Input;