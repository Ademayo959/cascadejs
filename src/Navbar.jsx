import logo from './assets/trans-logo.png'

const Navbar = () => {
    return (
        <div className='grid grid-cols-[20%_60%_20%] border-b border-gray-300 pb-4 items-center max-w-6xl m-auto mt-4 max-md:mx-2 max-md:flex max-md:justify-between'>
            <div className='flex gap-1 items-center'>
                <img src={logo} alt="Main transparent logo" className='w-14 h-14' />
                <p className='font-extrabold text-[25px]'>Cascade.js</p>
            </div>
            <div className='flex gap-6 justify-self-center max-md:hidden'>
                <p className='text-[17px] text-gray-600'>Features</p>
                <p className='text-[17px] text-gray-600'>Documentation</p>
                <p className='text-[17px] text-gray-600'>Blogs</p>
            </div>
            <div>
                <a href="https://github.com/Ademayo959/cascadejs">
                    <div className='h-fit w-fit p-2 border border-gray-400 shadow-md flex gap-1 rounded-4xl items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='text-gray-700'
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd" />
                        </svg>
                        <p className='text-gray-800'>Star on Github</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;