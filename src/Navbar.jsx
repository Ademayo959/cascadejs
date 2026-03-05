import logo from './assets/trans-logo.png'

const Navbar = () => {
    return ( 
        <div>
            <div className='flex gap-1 items-center'>
                <img src={logo} alt="Main transparent logo" className='w-14 h-14' />
                <p className='font-extrabold text-[25px]'>Cascade.js</p>
            </div>
            <div>
                <p>Features</p>
                <p>Documentation</p>
                <p>Blogs</p>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;