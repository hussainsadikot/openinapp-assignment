import React from 'react'
import classNames from 'classnames'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants/info'
import { Link, useLocation } from 'react-router-dom'
import { useContextHook } from '../../provider/ContextProvider'
const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const Sidebar = () => {

    return (
        <div className='flex flex-col p-3 w-[250px] bg-appbg m-8 rounded-md items-center' >
            <div className='flex items-center px-1'>
                <p className='text-white text-4xl p-5 font-semibold'>Board.</p>
            </div>

            <div className='py-8 flex flex-1 flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}  ></SidebarLink>
                ))}

            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}

            </div>
        </div>
    )
}

export default Sidebar


function SidebarLink({ item }) {
    const { setTitle } = useContextHook()
    const { pathname } = useLocation()
    return (
        <Link
            to={item.path}
            className={classNames(pathname === item.path ? 'bg-neutral-700 text-white font-semibold' : 'text-white', linkClass)}
        >
            <span className='text-xs'>{item.icon}</span>
            <button onClick={() => setTitle(item.label)}>
                {item.label}
            </button>
        </Link>
    )
}