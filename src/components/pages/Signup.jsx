import React from 'react'
import leftSideBg from '../../assets/left-side.svg'
import bottom from '../../assets/bottom.svg'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.svg'
import { Link } from 'react-router-dom'

const Signup = () => {


    const handleSignInBtn = ()=>{
        console.log('sign in')
    }
    // const myStyle={ backgroundImage: `url(${leftSideBg})` ,}
    return (
        <div className='w-full h-screen flex items-start'>
            <div className='relative w-1/2 h-full flex flex-col ' style={{backgroundImage:`url(${leftSideBg})`}}>
                <div
                className='absolute top-[1%] left-[10%] flex flex-col'
                >
                    <h1 className='text-xl text-white font-bold my-4'>Logo</h1>
                  
                    
                    


                        </div>
                <div
                className='absolute top-[50%] left-[35%]  flex flex-col'
                >        
                    <h1 className='text-4xl text-white font-bold items-center'>Board</h1>
                        </div>
                <div
                className='absolute bottom-[15%] left-[20%] flex flex-col'
                >        
                  
                    <img src={bottom} alt="" />
                        </div>
               
                    {/* <img src={leftSideBg} className='w-full h-full
                    
                    ' /> */}
              
            </div>
            <div className='w-1/2 h-full bg-bghome flex flex-col p-20
            justify-between
            '>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-col mb-2'>
                    <h1 className='text-4xl text-[#060606] font-bold'>Sign In</h1>
                    <p className='text-base text-[#060606] mt-3'>Sign in to your account</p>
                </div>
                <div
                className='w-full flex flex-row
                p-1
                '
                >
                <div className='flex flex-row items-center rounded-md bg-white m-1'>
                    
                        <img src={google} alt=""
                        className='p-1' />
                    
                        <p className='text-xs m-2'>Sign in with Google</p>
                    
                </div>
                <div className='flex flex-row items-center rounded-md bg-white m-1 '>
                    
                        <img src={apple} alt=""
                        className='p-1' />
                    
                        <p className='text-xs m-2'>Sign in with Apple</p>
                    
                </div>
               

                </div>
                <div className='w-full flex flex-col rounded-lg bg-white
                p-5
                '>
                    <label htmlFor="email"
                    className='my-1'>Email address</label>
                    <input
                     type="email"
                    placeholder='Email'
                    className='w-full text-black
                    rounded-lg border border-white bg-bghome
                    focus:outline-none
                    p-2
                    my-2
                    
                    '
                    />
                    <label htmlFor="password"
                    className='my-1'>Password</label>
                    <input
                     type="password"
                    placeholder='******'
                    className='w-full text-black
                    rounded-lg border border-white bg-bghome
                    focus:outline-none
                    p-2
                    my-2
                    
                    '
                    />
                     <span className='font-semibold underline underline-offset-2 cursor-pointer text-tahiti px-1'>Forgot Password?</span>
                     <Link to='/dashboard' className='w-full bg-appbg rounded-md p-2
                     my-2 text-center text-white' >Sign In</Link>

                </div>
            </div>
            <div className='w-full flex item-center justify-center'>
            <p
            className='text-sm font-normal text-[#060606]'
            >Don't hav a account?  
                <span className='font-semibold underline underline-offset-2 cursor-pointer text-tahiti px-1'>Register here</span>
                
                </p>
            </div>


            </div>
        </div>
    )
}

export default Signup
