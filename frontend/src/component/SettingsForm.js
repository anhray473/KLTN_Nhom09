import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

function SettingsForm({ onClose }) {
    return (
        <div className="fixed inset-0 bg-white z-50">
            <div className="p-4 border-b flex items-center">
                <FaArrowLeft className="text-xl cursor-pointer" onClick={onClose} />
                <span className="ml-4 text-lg">Cài đặt</span>
            </div>
            
            <div className="p-4">
                <div className="mb-4">
                    <label className="block text-sm mb-2">Tên của bạn</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm mb-2">Ngôn ngữ</label>
                    <div className="flex items-center border rounded p-2">
                        <img src="https://flagcdn.com/vn.svg" alt="Vietnam" className="w-6 h-4 mr-2" />
                        <span>VIETNAM</span>
                    </div>
                </div>

                <button className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4">
                    Lưu lại
                </button>
            </div>
        </div>
    );
}

export default SettingsForm;