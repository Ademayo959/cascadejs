import logo from './assets/trans-logo.png'


const Footer = () => {
    return (
        <div className="bg-white py-6">
            <div className="max-w-6xl m-auto">
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <img src={logo} alt="Main transparent logo" className='w-14 h-14' />
                        <p className='font-extrabold text-[25px]'>Cascade.js</p>
                    </div>
                    <div className="flex gap-3 text-gray-500">
                        <p className='hover:-mt-1 transition-all cursor-pointer'>Github</p>
                        <p className='hover:-mt-1 transition-all cursor-pointer'>Twitter</p>
                        <p className='hover:-mt-1 transition-all cursor-pointer'>Contact</p>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='text-gray-400 text-[14px]'>© 2026 Cascade.js Realeased under MIT Licence</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;