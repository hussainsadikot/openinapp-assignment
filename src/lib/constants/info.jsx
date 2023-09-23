import {
	HiOutlineAnnotation,
	
} from 'react-icons/hi'
import {
	AiOutlinePieChart,
	
	AiFillSchedule,
	
	AiOutlineSetting,
	
	
} from 'react-icons/ai'
import {
	
	BsTags,

	
	
	
} from 'react-icons/bs'
import {
	
	

	BiUserCircle,
	
	
} from 'react-icons/bi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <AiOutlinePieChart />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/dashboard/transactions',
		icon: <BsTags />
	},
	{
		key: 'schedules',
		label: 'Schedules',
		path: '/dashboard/schedules',
		icon: <AiFillSchedule />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/dashboard/users',
		icon: <BiUserCircle />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/dashboard/settings',
		icon: <AiOutlineSetting />
	},
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'support',
        label: 'Help & Support',
        path: '/dashboard/support',
        
    },
	{
		key: 'contactus',
		label: 'Contact US',
		path: '/dashboard/contactus',
		
	},
]