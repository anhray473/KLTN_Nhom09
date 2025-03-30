import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function PhoneForm({ onClose }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white min-h-screen">
                <div className="p-4 border-b">
                    <div className="flex items-center">
                        <FaArrowLeft className="text-xl cursor-pointer" onClick={onClose} />
                        <span className="ml-4 text-lg">Đăng nhập</span>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Số điện thoại *</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm mb-1">Tên của bạn</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-orange-200 text-black py-3 rounded-lg mt-4"
                    >
                        Tiếp tục
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PhoneForm;