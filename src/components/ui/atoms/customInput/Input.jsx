function Input({ type = 'text', name, placeholder, value, onChange, onBlur, autoComplete, children, className = '', }) {
    return (
        <div >
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                // onBlur={onBlur}
                // autoComplete={autoComplete}
                className={className} />
            {children}
        </div>
    );
}

export default Input;
