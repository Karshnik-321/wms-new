import React from 'react';
import ParticleCanvas from '../Global/ParticleCanvas';
import LayoutHeader from '../Global/LayoutHeader';

const Layout =({children, noheader}) =>{
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol viewBox="0 0 334.3 119.1" id="wms">
                <polygon fill="#e21d38" strokeWidth="0px" points="132.6 12.5 115 78.2 114.8 78.2 100.9 22.3 61.2 22.5 50.5 77.8 50.1 78.2 41 12.6 6.8 3.1 28.8 116 67.8 116 81.7 57.6 82.1 57.6 97.3 116 136.3 116 165.5 5 132.6 12.5" />
                <path fill="#e21d38" strokeWidth="0px" d="M209.4,63.2L186.5,2.7h47.1l-24.2,60.4ZM214.9,116h35.7l-8.4-65.2-27.4,65.2ZM167.5,116h35.7l-26.1-65.2-9.6,65.2ZM328.5,60.2c-4.4-5.6-11.9-9.9-22.3-13-8.3-2.4-13.3-4.2-15-5.2-3.7-2.2-5.6-4.7-5.6-7.7s1.4-5.5,4.2-7.3c2.5-1.6,5.3-2.4,8.5-2.4,6.5,0,13,2.5,19.5,7.6l11.8-22.9c-11.7-6.1-23.7-9.2-35.9-9.2s-21.9,4.1-29.2,12.2c0,0,0,0,0,0l8.1,53.3c2.2.9,6.6,2.3,13.1,4.2,6,1.7,10.3,3.4,12.9,5.1,3.4,2.2,5.2,5,5.2,8.4s-1.6,6.5-4.7,8.6c-2.7,1.8-5.9,2.7-9.7,2.7s-8.5-1-12.9-3l3.7,24.5h0l.3,2.4c3.2.5,6.4.7,9.7.7,6.8,0,13.1-1,18.9-3.1,16.8-5.8,25.2-18.3,25.2-37.5s-1.9-13.6-5.7-18.4Z" />
            </symbol>
        </svg>
        <ParticleCanvas />
        <div className="min-h-full">
            <LayoutHeader noheader={noheader} />
            {children}
        </div>
        <footer className='text-center py-6 text-xs text-gray-600'>© 2024 Jagran New Media. All rights reserved.</footer>
        </>
    )
}

export default Layout;