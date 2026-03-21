import logo from './assets/trans-logo.png'


const Footer = () => {
    return (
        <div className="bg-white py-6">
            <div className="max-w-6xl m-auto max-md:grid max-md:gap-y-4 max-md:px-1">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <img src={logo} alt="Main transparent logo" className='w-14 h-14 max-md:w-10 max-md:h-10' />
                        <p className='font-extrabold text-[25px] max-md:text[18px]'>Cascade.js</p>
                    </div>
                    <div className="flex gap-3 text-gray-500 max-md:mx-1 max-md:gap-1.5">
                        <p className='hover:-mt-1 transition-all cursor-pointer max-md:text-[12px]'>Github</p>
                        <p className='hover:-mt-1 transition-all cursor-pointer max-md:text-[12px]'>Twitter</p>
                        <p className='hover:-mt-1 transition-all cursor-pointer max-md:text-[12px]'>Contact</p>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='text-gray-400 text-[14px] max-md:text-[12px]'>© 2026 Cascade.js Realeased under MIT Licence</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;