import React from 'react'

const Footer = () => {

    function getCurrentYear(): number {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    const year = getCurrentYear()

    return (
        <div className='bg-white border-t'>
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-black">
                    &copy; {year} FakeStoreName, Inc. All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer