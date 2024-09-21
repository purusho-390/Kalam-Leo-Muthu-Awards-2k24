import React, { useState } from 'react';

const Faq = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (item) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <div className="p-10 md:p-20 flex flex-col md:flex-row h-full bg-[#FBF6F0]">
            <div className="flex-1 md:m-10 w-[80vw] md:w-[50vw]">
                <h1 className="text-5xl mb-5 font-bold">FAQs</h1>
                <p className="text-xl my-5 w-[90%]">
                    Find answers to common questions about the nomination process, event details, and participation guidelines.
                </p>
            </div>
            <div className="flex-1 md:m-10 w-[80vw] md:w-[50vw] rounded-2xl">
                <div className="w-full pt-2 pd-2 ">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-2 pt-3 pb-3 mb-3 hover:shadow-lg rounded-2xl ">
                            <button
                                className="w-full text-left px-3 py-2 text-[18px] focus:outline-none"
                                onClick={() => toggleItem(index)}
                            >
                                {faq.question}
                            </button>
                            {openItem === index && (
                                <div className="px-3 pb-3 pt-3 pb-3 text-[15px]">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "How do I nominate?",
        answer: "To nominate, simply fill out the nomination form on our website with the required information."
    },
    {
        question: "What are the event details?",
        answer: "The event details, including the date, time, and location, will be provided on our website and communicated to registered participants."
    },
    {
        question: "How can I participate?",
        answer: "To participate, you need to register on our website and follow the guidelines provided."
    },
    {
        question: "What are the guidelines?",
        answer: "The guidelines for participation can be found on our website. Please make sure to read them carefully before registering."
    },
    {
        question: "Can I nominate multiple candidates?",
        answer: "Yes, you can nominate multiple candidates by submitting separate nomination forms for each individual."
    }
];

export default Faq;
