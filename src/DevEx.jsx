import CodeBlock from './assets/CodeBlock.png'

const DevEx = () => {
    return (
        <div className='bg-gray-100 py-18 my-16 border-t border-gray-300'>
            <div className='max-w-6xl m-auto flex justify-between'>
                <div>
                    <p className='font-sans text-blue-900 font-semibold my-2'>DEVELOPER EXPERIENCE</p>
                    <p className='font-extrabold text-5xl'>Write code humans can <br /> understand</p>
                    <p className='my-4 text-gray-600'>Cascade.js replaces cryptic regex strings with named, descriptive functions. <br /> It's self documenting validation that makes your codebase cleaner and <br /> easier to maintain</p>
                    <div className='grid gap-3'>
                        <div className='flex items-start gap-2'>
                            <div className='text-green-700 bg-green-200 p-1 w-fit h-fit rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <p className='font-extrabold text-md'>Zero Configuration</p>
                                <p className='text-gray-500 text-[14px]'>Import and start validating immediately. No setup files.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <div className='text-green-700 bg-green-200 p-1 w-fit h-fit rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                            <div>
                                <p className='font-extrabold text-md'>Tree-Shakeable</p>
                                <p className='text-gray-500 text-[14px]'>Only pay for the functions you actually import.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={CodeBlock} alt="An example of the code Block" className='rounded-xl h-80 w-120' />
                </div>
            </div>
        </div>
    );
}

export default DevEx;