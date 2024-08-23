import React from 'react'

export default function Userlist({userInfo}) {
    let {userData,setuserData}=userInfo
  return (
    <div>
           <div className=' bg-white mt-6 h-[200px] mx-3 rounded-lg'>
                <table border={1}>
                    

<div class="relative overflow-x-auto w-[970px]">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[lightblue] dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Message
                </th>
                <th scope="col" class="px-6 py-3">
                    <button>Delete | Edit</button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-white dark:text-black">
                <th class="px-6 py-3">
                    1.
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Jaou Souza Silpa"
                </th>
                <td class="px-6 py-4">
                    abc@gmail.com
                </td>
                <td class="px-6 py-4">
                    9289839190
                </td>
                <td class="px-6 py-4">
                    uysawoj
                </td>
                <td class="px-6 py-4">
                    Delete | Edit
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

                </table>
            </div>
        </div>
  )
}
