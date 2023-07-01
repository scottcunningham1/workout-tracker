import clsx from "clsx";

type InputProps = {

} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
    return (
        <input {...props} className={clsx("h-12 rounded-xl focus:outline-none focus:outline-accent px-6 disabled:opacity-75", className)} />
    );
};

export default Input;