import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoQrCodeOutline } from "react-icons/io5";

const Header = ({ onSearch, onBack, showBackButton }) => {
    const [filter, setFilter] = useState('tất cả');
    useEffect(() => { }, [filter]);

    return (
        <div className="fixed top-0 left-0 right-0 bg-white z-50 w-full">
            <div className='flex flex-col'>
                <div className="flex items-center p-4 gap-4 bg-white">
                    {showBackButton && (
                        <button
                            onClick={() => onBack(false)}
                            className="text-gray-600 hover:text-gray-800">
                            <FaArrowLeft size={20} />
                        </button>
                    )}
                    <input
                        type="text"
                        placeholder="Bạn đang cần tìm món gì?"
                        className="flex-1 bg-gray-100 p-2 rounded-lg"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none justify-center">
                    <button
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === 'all' ? 'bg-red-500 text-white' : 'border border-gray-300'}`}
                        onClick={() => setFilter('all')}>
                        Tất cả
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === 'hotpot' ? 'bg-red-500 text-white' : 'border border-gray-300'}`}
                        onClick={() => setFilter('hotpot')}>
                        Lẩu Thái
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === 'salad' ? 'bg-red-500 text-white' : 'border border-gray-300'}`}
                        onClick={() => setFilter('salad')}>
                        Gỏi, trộn
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === 'more' ? 'bg-red-500 text-white' : 'border border-gray-300'}`}
                        onClick={() => setFilter('more')}>
                        Mỳ cay
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === 'banh' ? 'bg-red-500 text-white' : 'border border-gray-300'}`}
                        onClick={() => setFilter('banh')}>
                        Bánh bao
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === 'ngot' ? 'bg-red-500 text-white' : 'border border-gray-300'}`}
                        onClick={() => setFilter('ngot')}>
                        Bánh ngọt
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === 'nuoc' ? 'bg-red-500 text-white' : 'border border-gray-300'}`}
                        onClick={() => setFilter('nuoc')}>
                        Nước uống
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;