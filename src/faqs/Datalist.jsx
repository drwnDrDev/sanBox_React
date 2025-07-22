export function Datalist({ question, answer,index, activeIndex, toggleActive }) {
    const isActive = activeIndex === index;
    return (
        <div className="datalist border p-4 rounded shadow-lg bg-white w-1/2 mx-auto mt-4">
               
            <strong className="text-gray-800"
                        onClick={() => toggleActive(index)} style={{ cursor: 'pointer' }}
            ><span>{index + 1} </span>{question}</strong>
            { isActive &&
                <div className={`transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}>
                    <p className="text-gray-600">{answer}</p>
                </div>
            }
                       
        </div>
    );
}