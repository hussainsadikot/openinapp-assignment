import React from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useContextHook } from '../../provider/ContextProvider'

const Header = () => {

    const { title } = useContextHook()

    return (
        <div className=' h-16 px-4 flex flex-row items-center  justify-between'>
            <div className='font-bold text-xl'>{title}</div>
            <div className='gap-20'>
                <div className='flex items-center gap-2 mr-2 ml-2 ' >
                    <div className="relative   ">

                        <input
                            type="text"
                            placeholder="Search..."
                            className="text-sm focus:outline-none active:outline-none  border-double   h-10 pl-4 pr-11 rounded-md bg-white"
                        />
                        <HiOutlineSearch fontSize={20} className="text-[#858585]  absolute top-1/2 right-3 -translate-y-1/2" />
                    </div>
                    <HiOutlineBell fontSize={24} className='h-10' />
                    <div
                        className="h-8 w-8
                        ml-4
                        rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center
                        
                        "
                        style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                    >
                        <span className="sr-only">Marc Backes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
