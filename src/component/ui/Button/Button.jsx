import './Button.css';

const Button = ({ name, children, onClick, type = 'button', ...props }) => {
    const variant = name === 'login' ? 'login' : 'signup';

    return (
        <button
            className={`btn btn--${variant}`}
            type={type}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
