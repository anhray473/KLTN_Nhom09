import React, { useState } from 'react';
import { FaPhone, FaChevronRight } from 'react-icons/fa';
import PaymentForm from './PaymentForm';
import StaffCallForm from './StaffCallForm';
import ReviewForm from './ReviewForm';
import banner from '../img/Banner.png';
import PhoneForm from './PhoneForm';
import SettingsForm from './SettingsForm';

function HomePage({ onNavigateToMenu }) {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [showStaffForm, setShowStaffForm] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [showPhoneForm, setShowPhoneForm] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Banner Section */}
            <div className="p-4 bg-white">
                <div className="text-lg font-medium">Mì Kung Fu - 123/86 cù chính lan</div>
                <div className="text-sm text-gray-600">
                    123/86, Cù Chính Lan, Hòa Khê, Thanh Khê, Đà Nẵng
                </div>
            </div>

            {/* Banner Section */}
            <div className="relative flex justify-center w-full">
                <div className="w-[1200px] h-[600px]">
                    <img
                        src={banner}
                        alt="Mì Kung Fu Banner"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Welcome Section */}
            <div className="p-4 cursor-pointer" onClick={() => setShowSettings(true)}>
                <div className="flex justify-center items-center mb-2">
                    <span className="text-center">Chào buổi tối <span className="text-blue-500">Quý khách</span></span>
                </div>
                <div className="text-sm text-gray-600 text-center">
                    Chúng tôi sẽ trả lời cho bạn tại bàn:
                    <span className="bg-gray-100 px-2 py-1 rounded ml-1">C2</span>
                </div>
            </div>

            {/* Phone Input Section */}
            <div
                className="bg-blue-50 p-4 flex items-center gap-2 border-b cursor-pointer hover:bg-blue-100"
                onClick={() => setShowPhoneForm(true)}
            >
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <div>
                            <div>Nhập số điện thoại để tích điểm</div>
                        </div>
                    </div>
                </div>
                <FaChevronRight className="text-gray-400" />
            </div>

            {/* Action Buttons */}
            <div className="flex-1 grid grid-cols-3 gap-7 p-9 bg-gray-50">
                <div className="text-center">
                    <div
                        className={`p-4 rounded-lg shadow-sm mb-2 flex items-center justify-start cursor-pointer transition-colors duration-200 ${showPaymentForm ? 'bg-red-300' : 'bg-orange-200 hover:bg-teal-300'
                            }`}
                        onClick={() => setShowPaymentForm(true)}>
                        <div className="text-sm pr-2 h-12">Gọi thanh toán</div>
                    </div>
                </div>

                <div className="text-center">
                    <div
                        className={`p-4 rounded-lg shadow-sm mb-2 flex items-center justify-start cursor-pointer transition-colors duration-200 ${showStaffForm ? 'bg-red-300' : 'bg-orange-200 hover:bg-teal-300'
                            }`}
                        onClick={() => setShowStaffForm(true)}>
                        <div className="text-sm pr-2 h-12">Gọi nhân viên</div>
                    </div>
                </div>

                <div className="text-center">
                    <div
                        className={`p-4 rounded-lg shadow-sm mb-2 flex items-center justify-start cursor-pointer transition-colors duration-200 ${showReviewForm ? 'bg-red-300' : 'bg-orange-200 hover:bg-teal-300'
                            }`}
                        onClick={() => setShowReviewForm(true)}>
                        <div className="text-sm pr-2 h-12">Đánh giá</div>
                    </div>
                </div>
            </div>

            {/* Menu Button */}
            <div className="p-4 bg-orange-500 cursor-pointer" onClick={onNavigateToMenu}>
                <div className="flex items-center justify-between gap-2">
                    <span className="text-white font-medium">Xem Menu - Gọi món</span>
                    
                    <FaChevronRight className="text-white" />
                </div>
            </div>

            {/* Modal Forms */}
            {showSettings && <SettingsForm onClose={() => setShowSettings(false)} />}
            {showPhoneForm && <PhoneForm onClose={() => setShowPhoneForm(false)} />}
            {showPaymentForm && <PaymentForm onClose={() => setShowPaymentForm(false)} />}
            {showStaffForm && <StaffCallForm onClose={() => setShowStaffForm(false)} />}
            {showReviewForm && <ReviewForm onClose={() => setShowReviewForm(false)} />}
        </div>
    );
}

export default HomePage;