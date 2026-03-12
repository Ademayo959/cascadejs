const FAQs = () => {
    return (
        <div className="my-12">
            <div className="max-w-6xl m-auto">
                <p className="text-center text-4xl">Frequently asked Questions</p>
                <div className="justify-self-center mt-12 grid gap-y-4">
                    <div className="border border-gray-400 p-4 w-150 rounded-md grid gap-3">
                        <div className="flex justify-between">
                            <p>Do I need to know Regex?</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-gray-500">No! that's the main benefit! Cascade.js handles the regex for you through simple function calls </p>
                        </div>
                    </div>
                    <div className="flex border border-gray-400 p-4 w-150 justify-between rounded-md">
                        <p>Can i use Cascade.js in both Browser and Node.js Environment?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="flex border border-gray-400 p-4 w-150 justify-between rounded-md">
                        <p>Will Cascade.js work with frameworks like React or Vue?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="flex border border-gray-400 p-4 w-150 justify-between rounded-md">
                        <p>What makes Cascade.js different from other validation libraries?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQs;