import React, { useEffect, useState } from 'react'
import { IoQrCodeOutline } from "react-icons/io5";


const RestaurantInfo = () => {
    const [filter, setFilter] = useState('tất cả');
    useEffect(() => { }, [filter]);


    return (
        <div className="px-4 py-2">
            {/* <div className='bg-white mt-7 p-2 rounded-lg'>
                <div className='flex justify-between'>
                    <p className="text-lg font-medium text-left">Gọi món tại bàn</p>
                    <p className="text-lg font-medium text-right">0987654321</p>
                </div>
                <div className="flex items-center">
                    <IoQrCodeOutline className="size-12" />
                    <div className="ml-2">
                        <p className="text-lg font-bold text-red-600 text-left">
                            Scan2dine <span className="text-black">B2</span>
                        </p>
                        <p className="text-sm text-gray-600">
                            123/86 Cù chính lan, Hòa Khê, Thanh Khê, Đà Nẵng
                        </p>
                    </div>
                </div>
            </div> */}
           
        </div>
    );
};

export default RestaurantInfo;