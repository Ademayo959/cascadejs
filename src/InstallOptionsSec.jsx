const InstallOptionSec = () => {
    return (
        <div className="bg-white py-8">
            <div className="bg-white max-w-6xl m-auto justify-self-center">
                <p className="text-4xl font-extrabold text-center">Start validating in Seconds</p>
                <div className="flex mt-12 gap-x-12 m-auto">
                    <div className="grid grid-rows-3 gap-y-4 py-4 px-8 border border-gray-200 shadow-lg w-fit rounded-2xl">
                        <div className="flex gap-2 items-center">
                            <div className="h-10 w-10 bg-blue-200 text-blue-900 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xl m-0">Package Manager</p>
                                <p className="text-gray-500 mt-0">Best for modern apps & bundlers</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[14px] text-gray-500">Ideal for React, Vue, Svelte or Node.js projects with <br /> dependency management.</p>
                        </div>
                        <div className="flex justify-between bg-blue-50 h-12 w-90 items-center rounded-xl px-4">
                            <div className="flex gap-1 font-sans text-[14px]">
                                <p>$</p>
                                <p>npm install cascadejs</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-black cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                            </svg>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-y-4 py-4 px-8 border border-gray-200 shadow-lg w-fit rounded-2xl">
                        <div className="flex gap-2 items-center">
                            <div className="h-10 w-10 bg-blue-200 text-blue-900 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xl m-0">Browser CDN</p>
                                <p className="text-gray-500 mt-0">Quick Setup for static sites</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[14px] text-gray-500">Perfet for simple HTML pages, prototyping or drop-in <br /> usage without build tools.</p>
                        </div>
                        <div className="flex justify-between bg-blue-50 h-12 w-90 items-center rounded-xl px-4">
                            <div className="flex gap-2 font-sans text-[14px]">
                                <p>{"<>"}</p>
                                <p>{"<script src='https://cdn...'>"}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-black cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstallOptionSec;