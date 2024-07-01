// import React from "react";

// export default function Button({
//     children,
//     type = "button",
//     bgColor = "bg-blue-600",
//     textColor = "text-white",
//     className = "",
//     ...props
// }) {
//     return (
//         <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
//             {children}
//         </button>
//     );
// }

// Button.jsx
import React from 'react';

const Button = ({ loading, children, className, bgColor = "bg-blue-600", ...props }) => {
    return (
        <button
            className={`relative flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : `${bgColor} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} ${className}`}
            disabled={loading}
            {...props}
        >
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                </div>
            )}
            <span className={loading ? 'opacity-0' : 'opacity-100'}>
                {children}
            </span>
        </button>
    );
};

export default Button;
