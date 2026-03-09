const HeroSection = () => {
    return (
        <div className="">
            <div className="absolute rounded-full justify-self-center mt-12"
                style={{
                    width: "1000px",
                    height: "600px",
                    background: "radial-gradient(circle at center, #2dd3ee 0%, transparent 70%)",
                    filter: "blur(200px)",
                    opacity: 0.25,
                }}
            />
            <div className="justify-self-center mt-20">
                <div className="justify-self-center flex items-center gap-1 py-1 px-3 w-fit h-fit border border-gray-400 shadow-sm bg-white rounded-4xl">
                    <div className="h-3 w-3 bg-blue-200 rounded-full flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                    </div>
                    <p className="text-[13px] text-gray-500">v1.0.0 is now available</p>
                </div>
                <div className="my-4">
                    <p className="text-8xl font-extrabold">Validation without</p>
                    <p className="text-8xl font-extrabold text-[#1d3989]">regex headaches</p>
                </div>
                <div className="mb-4">
                    <p className="text-center text-gray-500">A lightweight, human-readable Javascript library focused on 16 <br /> essential validation functions. Stop wrestling with patterns <br /> and start shipping</p>
                </div>
                <div className="flex gap-6 justify-self-center my-8"> 
                    <div className="shadow-md flex gap-2 items-center bg-[#1d3989] w-fit h-fit py-2 px-3 rounded-4xl text-white">
                        <p className="text-[16px]">Get Started</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                    <div className="shadow-md w-fit h-fit py-2 px-3 rounded-4xl bg-white border border-gray-300">
                        <p className="text-[16px] bg-white">Read the Docs</p>
                    </div>
                </div>
                <hr className="text-gray-200" />
                <div className="flex gap-10 my-8 justify-self-center">
                    <div className="text-center">
                        <p className="text-2xl">12kb</p>
                        <p className="text-[12px] text-gray-400">Minified Size</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl">20k+</p>
                        <p className="text-[12px] text-gray-400">Monthly Downloads</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl">0</p>
                        <p className="text-[12px] text-gray-400">Dependecies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;