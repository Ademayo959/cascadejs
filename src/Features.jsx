const Features = () => {
    return (
        <div className="bg-white max-w-6xl m-auto">
            <div className="my-4">
                <div className="text-center">
                    <p className='font-sans text-blue-900 font-semibold my-2'>FEATURES</p>
                    <p className="text-4xl font-bold">Everything you need</p>
                    <p className="m-2 text-gray-500">Comprehensive validation for the most common use cases, split into <br /> logical categories</p>
                </div>
                <div className="grid grid-cols-3 my-12">
                    <div className="w-90 p-4 border rounded-xl shadow-xl border-gray-200">
                        <div className="w-11 h-11 bg-blue-100 flex items-center justify-center rounded-lg">
                            <p className="font-serif text-xl text-blue-900">T</p>
                        </div>
                        <p className="my-3 text-xl">Text & Strings</p>
                        <p className="text-gray-500 text-[14px]">Validate emails, URLs, and alphanumeric strings reliably without worrying about edges cases</p>
                        <div className="flex gap-3 my-4">
                            <div className="w-fit bg-gray-100 text-gray-700 px-3 py-0.5 rounded-xl">
                                <p>isEmail()</p>
                            </div>
                            <div className="w-fit bg-gray-100 text-gray-700 px-3 py-0.5 rounded-xl">
                                <p>isURL()</p>
                            </div>
                            <div className="w-fit bg-gray-100 text-gray-700 px-3 py-0.5 rounded-xl">
                                <p>isText()</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-90 p-4 border rounded-xl shadow-xl border-gray-200">
                        <div className="w-11 h-11 bg-blue-100 flex items-center justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                            </svg>
                        </div>
                        <p className="my-3 text-xl">Numbers & Math</p>
                        <p className="text-gray-500 text-[14px]">Check for integers, floats, ranges, and even numbers. Perfect for pricing and quantity inputs.</p>
                        <div className="flex gap-3 my-4">
                            <div className="w-fit bg-gray-100 text-gray-700 px-3 py-0.5 rounded-xl">
                                <p>isInteger()</p>
                            </div>
                            <div className="w-fit bg-gray-100 text-gray-700 px-3 py-0.5 rounded-xl">
                                <p>isFloat()</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-90 p-4 border rounded-xl shadow-xl border-gray-200">
                        <div className="w-11 h-11 bg-blue-100 flex items-center justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                        </div>
                        <p className="my-3 text-xl">Security & Forms</p>
                        <p className="text-gray-500 text-[14px]">Specialized validators to test the strength of passwords, Phone Numbers and forms.</p>
                        <div className="flex gap-3 my-4">
                            <div className="w-fit bg-gray-100 text-gray-700 px-3 py-0.5 rounded-xl">
                                <p>isStrongPassword()</p>
                            </div>
                            <div className="w-fit bg-gray-100 text-gray-700 px-3 py-0.5 rounded-xl">
                                <p>isPhoneNumber()</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;