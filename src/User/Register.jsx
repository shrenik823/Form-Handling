import React from 'react'

export default function Register({userInfo}) {
    console.log(userInfo)
    let {userData,setuserData}=userInfo
  return (
    <div>
        <div className=' bg-white mt-6 h-[500px] mx-3 rounded-lg'>
                <h2 className='p-[10px_20px] text-[30px] font-bold'>Enquire Now</h2>
                <div class="sm:col-span-3 m-[12px_15px]">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                    <div class="mt-2">
                        <input type="text" name="Uname" id="first-name" autocomplete="given-name" placeholder='Jane' class=" block w-[270px] px-2 bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div class="sm:col-span-3 m-[12px_15px]">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                    <div class="mt-2">
                        <input type="text" name="Uemail" id="first-name" autocomplete="given-name" placeholder='*****@*****' class=" block w-[270px] px-2 bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div class="sm:col-span-3 m-[12px_15px]">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                    <div class="mt-2">
                        <input type="text" name="Uphone" id="first-name" autocomplete="given-name" placeholder='Enter Your Phone Number' class=" block w-[270px] px-2 bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div class="sm:col-span-3 m-[12px_15px]">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                    <div class="mt-2">
                        <input type="text" name="Umessage" id="first-name" autocomplete="given-name" class=" block w-[270px] bg-slate-300 h-[80px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <button className='bg-blue-700 w-[70px] h-[30px] text-white m-[12px_15px] rounded-lg'>Save</button>
            </div>
    </div>
  )
}
