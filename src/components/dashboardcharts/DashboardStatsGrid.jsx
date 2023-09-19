import React from 'react'
import{ HiOutlineBanknotes,} from 'react-icons/hi2'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import transactionpic from '../../assets/transaction.svg'
import likes from '../../assets/likes.svg'
import ravenue from '../../assets/ravenue.svg'
import user from '../../assets/user.svg'

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full justify-between">
			<div className="bg-white rounded-2xl p-4 w-full  items-center">
			<div className='m-2'>
				<div className='rounded-full w-8 h-8 bg-bermuda p-1 ' >
				
						<div>
							<img src={ravenue} alt="" className='w-6 h-6 p-1 ' /></div>
					</div>
			</div>
				<div className="flex-1 m-2">
					<span className="text-sm  font-light">Total Revanues</span>
					<div className="flex flex-row justify-between items-center">
						<strong className="text-xl text-gray-700 font-semibold">$54232</strong>
						<span className="text-sm text-[#78dc35] pl-2">+343</span>
					</div>
				</div>
			</div>
			<div className="bg-white rounded-2xl w-full p-4  items-center">
				<div className='m-2'>
					<div className='rounded-full w-8 h-8 bg-[#debf85] p-1' >
					
						<div>
							<img src={transactionpic} alt="" className='w-6 h-6 p-1 ' />
							</div>
					</div>
				</div>
				<div className="flex-1 m-2">
					<span className="text-sm text-gray-500 font-light">Total Transactions</span>
					<div className="flex flex-row justify-between items-center">
						<strong className="text-xl text-gray-700 font-semibold">54232</strong>
						<span className="text-sm text-[#78dc35] pl-2">+1.7%</span>
					</div>
				</div>
			</div>
			<div className="bg-white rounded-2xl  p-4  items-center w-full">
			<div className='m-2'>
				<div className='rounded-full w-8 h-8 bg-[#eca4a4] p-1' >
				
						<div>
							<img src={likes} alt="" className='w-6 h-6 p-1 ' /></div>
					</div>
			</div>
				<div className="flex-1 m-2">
					<span className="text-sm text-gray-500 font-light">Total Likes</span>
					<div className="flex flex-row justify-between items-center">
						<strong className="text-xl text-gray-700 font-semibold">54232</strong>
						<span className="text-sm text-[#78dc35] pl-2">+343</span>
					</div>
				</div>
			</div>
			<div className="bg-white rounded-2xl p-4  items-center w-full">
			<div className='m-2'>
				<div className='rounded-full w-8 h-8 bg-[#a9b0e5] p-1' >
				
						<div>
							<img src={user} alt="" className='w-6 h-6 p-1 ' /></div>
					</div>
			</div>
				<div className="flex-1 m-2">
					<span className="text-sm text-gray-500 font-light">Total Users</span>
					<div className="flex flex-row justify-between items-center">
						<strong className="text-xl text-gray-700 font-semibold">54232</strong>
						<span className="text-sm text-[#78dc35] pl-2">+343</span>
					</div>
				</div>
			</div>
			
		</div>
  )
}

export default DashboardStatsGrid
function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4  border border-gray-200 flex items-center">{children}</div>
}

// function BoxWrapper({children}){
//    return(
//     <div  className='bg-white rounded-sm p-4 flex-1 item-center'>{children}</div>
//    )
// }

function MyBoxWrapper({children})
{
    return(
        <>
        <BoxWrapper >
        <div className='rounded-full h-16 w-16 flex items-center justify-center'>
        <HiOutlineBanknotes fontSize={30}  />
        </div>
        <div className="pl-4">
					<span className=" text-gray-500 font-semibold ">Total Revenues</span>
					<div className="flex items-center">
						<strong className="text-2xl text-gray-700 font-bold">$54232</strong>
						<span className="text-sm text-green-500 pl-2">+2.4%</span>
					</div>
				</div>
     </BoxWrapper>
        
        
        
        </>
    )
}