import React, { useState, useEffect } from 'react';
import { FaHome,  } from 'react-icons/fa';
import { FaArrowLeft } from'react-icons/fa';

function Chat({ orderedItems, onReturnHome, onBack }) {
    const [messages, setMessages] = useState([]);
    const timestamp = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        // Simulate restaurant response after 1 second
        const restaurantTimer = setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: 'restaurant',
                time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
                content: 'Yêu cầu đã được gửi tới nhân viên.'
            }]);
        }, 1000);

        // Simulate staff confirmation after 2 seconds
        const staffTimer = setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: 'staff',
                time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
                content: 'Các món bạn gọi đã được nhân viên xác nhận và chuyển qua bộ phận làm đồ.'
            }]);
        }, 2000);

        return () => {
            clearTimeout(restaurantTimer);
            clearTimeout(staffTimer);
        };
    }, []);

    return (
        <div className="flex flex-col h-full">
            <div className="bg-white shadow-sm p-3">
                <div className="flex items-center gap-2">
                <button 
                        onClick={() => onBack(false)} 
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <FaHome
                        className="text-2xl text-orange-500 cursor-pointer hover:text-orange-600"
                        onClick={onReturnHome}
                        aria-label="Return to home"
                    />
                    <div>
                        <h1 className="text-lg font-medium">Phản hồi từ nhà hàng</h1>
                        <div className="text-blue-500 text-sm">Các món đã gọi</div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
                {/* Customer's order */}
                <div className="bg-blue-100 p-4 rounded-lg mb-4 ml-auto max-w-[80%]">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Bạn {timestamp} | Gọi món</span>
                    </div>
                    {orderedItems.map(item => (
                        <div key={item.id} className="mb-1">
                            - {item.quantity}x {item.name}
                        </div>
                    ))}
                </div>

                {/* Dynamic messages */}
                {messages.map((message, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm mb-4 max-w-[80%]">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">
                                {message.sender === 'restaurant' ? 'Nhà hàng' : 'Hiệp'} {message.time}
                            </span>
                        </div>
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chat;