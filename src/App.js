import { useState } from "react";
import { faqs } from "./faqs/faqs";
import { Datalist } from "./faqs/Datalist";

export default function App() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);  
    }

    return (
        <>
            {faqs.map((faq, index) => (

                <Datalist key={index}
                    index={index}
                    question={faq.question}
                    answer={faq.answer} 
                    activeIndex={activeIndex}
                    toggleActive={toggleActive}
                />

            ))}
        
        </>
    );
}