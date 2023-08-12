const Button = ({ name, className, onClickHandler, icon }) => {
    const defaultHandler = () => {};
    return (
        <button
            className={`text-2xl text-white p-2 rounded-full bg-primary px-12 ${className}`}
            onClick={onClickHandler ?? defaultHandler}
        >
            <div className="text-2xl">{icon}</div>
            {name}
        </button>
    );
};
export default Button;
