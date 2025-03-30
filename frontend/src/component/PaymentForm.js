import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function PaymentForm({ onClose }) {
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleSubmit = () => {
        // Handle payment request
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md mx-4 rounded-lg">
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-medium">Gọi thanh toán</h2>
                    <button onClick={onClose} className="text-gray-400">
                        <FaTimes size={20} />
                    </button>
                </div>

                <div className="p-4">
                    <p className="mb-4">Bạn muốn thanh toán bằng?</p>
                    
                    <div className="space-y-3">
                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                checked={selectedMethod === 'cash'}
                                onChange={(e) => setSelectedMethod(e.target.value)}
                                className="mr-3"
                            />
                            <span>💵 Tiền mặt</span>
                        </label>

                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="payment"
                                value="bank"
                                checked={selectedMethod === 'bank'}
                                onChange={(e) => setSelectedMethod(e.target.value)}
                                className="mr-3"
                            />
                            <span>🏦 Thẻ ngân hàng</span>
                        </label>

                        <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="payment"
                                value="mobile"
                                checked={selectedMethod === 'mobile'}
                                onChange={(e) => setSelectedMethod(e.target.value)}
                                className="mr-3"
                            />
                            <span>📱 Ứng dụng điện thoại</span>
                        </label>
                    </div>
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedMethod}
                        className={`w-full py-3 rounded-lg font-medium ${
                            selectedMethod 
                                ? 'bg-orange-500 text-white' 
                                : 'bg-gray-100 text-gray-400'
                        }`}
                    >
                        Gửi yêu cầu
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;