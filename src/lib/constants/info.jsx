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
		path: '/',
		icon: <AiOutlinePieChart />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <BsTags />
	},
	{
		key: 'schedules',
		label: 'Schedules',
		path: '/schedules',
		icon: <AiFillSchedule />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/users',
		icon: <BiUserCircle />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <AiOutlineSetting />
	},
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        
    },
	{
		key: 'contactus',
		label: 'Contact US',
		path: '/contactus',
		
	},
]