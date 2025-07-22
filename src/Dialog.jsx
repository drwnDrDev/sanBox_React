import { useState } from "react";

export function Dialog() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDialog = () => setIsOpen(!isOpen);

    return (
        <div className="dialog border p-4 rounded shadow-lg bg-white w-1/2 mx-auto mt-4">
            <h2 className="text-2xl text-indigo-500 font-bold py-4">Dialog Component</h2>
            <button onClick={toggleDialog} className="pl-4 text-green-500 inline text-xl">
                {isOpen ? "−" : "+"}
            </button>

            <div
                className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
                <p className="text-gray-700">
                    This is a dialog component that can be used to display messages or forms.
                </p>
            </div>
        </div>
    );
}