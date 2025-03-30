import React, { useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

function FoodCard({ cartItems = [], cartItemCount, onAddToCart, onRemoveFromCart, onOrderSubmit, onBackToHome }) {
    const [showCart, setShowCart] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartItems.length === 0) {
        return null;
    }

    const handleConfirmOrder = () => {
        setShowConfirmation(false);
        onOrderSubmit();
    };

    return (
        <>
            {showCart && (
                <>
                    <div className="fixed inset-0 bg-white z-50">
                        <div className="p-4 border-b">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setShowCart(false)}
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    <FaArrowLeft size={20} />
                                </button>
                                <h2 className="text-lg">Các món đang chọn</h2>
                                <span className="bg-red-500 text-white text-sm px-2 py-0.5 rounded-full">
                                    {cartItems.length}
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 pb-40">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center justify-between py-4 border-b">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span>{item.name}</span>
                                            </div>
                                            <span className="text-orange-500">{item.price.toLocaleString()}đ</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => onRemoveFromCart(item)}
                                            className="w-8 h-8 flex items-center justify-center text-orange-500 border border-orange-500 rounded-full"
                                        >
                                            -
                                        </button>
                                        <span className="text-orange-500 font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => onAddToCart(item)}
                                            className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="h-20"></div>
                        </div>

                        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
                            <div className="container mx-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-medium">Tổng tiền</span>
                                    <span className="text-orange-500 font-medium">
                                        {total.toLocaleString()}đ
                                    </span>
                                </div>
                                <button
                                    onClick={() => setShowConfirmation(true)}
                                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium"
                                >
                                    Xác nhận gửi yêu cầu gọi món
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Confirmation Dialog */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
                        <h3 className="text-lg font-medium mb-4">Bạn có chắc muốn đặt những món đã chọn không?</h3>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowConfirmation(false)}
                                className="px-4 py-2 text-gray-600"
                            >
                                Không
                            </button>
                            <button
                                onClick={handleConfirmOrder}
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                            >
                                Đồng ý
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div
                        className="flex items-center gap-2 cursor-pointer hover:text-orange-200"
                        onClick={() => setShowCart(!showCart)}
                    >
                        <FaShoppingCart size={20} />
                        <span className="font-medium">{cartItemCount}</span>
                    </div>
                    <button
                        className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-50"
                        onClick={() => setShowCart(true)}
                    >
                        Xem và xác nhận
                    </button>
                </div>
            </div>
        </>
    );
}

export default FoodCard;