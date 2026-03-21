import { useState } from "react";

const FAQs = () => {
    const faqs = [
        {
            question: "Do I need to know Regex?",
            answer: "Not at all. That's exactly why Cascade.js exists. Just call simple readable functions like isEmail() or isStrongPassword() — no regex knowledge required."
        },
        {
            question: "Can I use Cascade.js in both Browser and Node.js environments?",
            answer: "Yes! Cascade.js is environment agnostic. It works seamlessly in both the browser and Node.js with zero configuration needed."
        },
        {
            question: "Will Cascade.js work with frameworks like React or Vue?",
            answer: "Absolutely. Cascade.js is framework agnostic — drop it into any React, Vue, Angular, or vanilla JS project without any extra setup."
        },
        {
            question: "What makes Cascade.js different from other validation libraries?",
            answer: "Cascade.js is built for readability first. Instead of cryptic regex patterns, you write validation logic that reads like plain English. Zero dependencies, lightweight, and beginner friendly."
        },
    ]

     const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className="my-12">
            <div className="max-w-6xl m-auto">
                <p className="text-center text-4xl">Frequently asked Questions</p>
                <div className="justify-self-center mt-12 grid gap-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-400 rounded-md w-150 max-md:w-80">
                            <div
                                className="flex justify-between  p-4 w-150 items-center cursor-pointer max-md:w-80"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <p>{faq.question}</p>
                                <span className="ml-4">{openIndex === index ? "-" : "+"}</span>
                            </div>
                            <div className={` overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                <p className="p-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQs;