import React from "react";

function InputField({label,name,type,value,onChange,onBlur,error,touched,disabled,className = "w-[514px]"}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-1 font-medium">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                className={`
          h-[49px] rounded-[12px] px-3 border border-gray-300
          focus:outline-none focus:border-[#5C73DB] 
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error && touched ? "border-red-500" : ""}
          ${className}
        `} />
            {error && touched && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
}

export default InputField;
