import React, { useState, useEffect } from 'react';
import Chat from './Chat';

function OrderConfirmation({ orderedItems, onReturnHome }) {
    const [showSuccessModal, setShowSuccessModal] = useState(true);
    const [showChat, setShowChat] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        setIsLoading(true);
        
        // Simulate loading delay
        setTimeout(() => {
            setIsLoading(false);
            setShowChat(true);
        }, 2000); // 2 seconds delay
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {showChat && (
                <div className="mt-16">
                    <Chat orderedItems={orderedItems} 
                    onReturnHome={onReturnHome} />
                </div>
            )}

            {isLoading && (
                <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
                        <div className="text-center">
                            <h2 className="text-xl font-medium mb-2">
                                Gọi món thành công, vui lòng chờ nhân viên ra xác nhận!
                            </h2>
                            <p className="text-gray-600 text-sm mb-6">
                                Lưu ý: Nếu đợi quá lâu hoặc có thay đổi về món đã gọi bạn có thể dùng chức năng Gọi nhân viên ở màn hình chính
                            </p>
                            <button
                                onClick={handleCloseModal}
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium">
                                Đồng ý
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderConfirmation;