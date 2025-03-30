import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function StaffCallForm({ onClose }) {
    const [request, setRequest] = useState('');

    const handleSubmit = () => {
        // Handle staff call request
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md mx-4 rounded-lg">
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-medium">Gọi nhân viên</h2>
                    <button onClick={onClose} className="text-gray-400">
                        <FaTimes size={20} />
                    </button>
                </div>

                <div className="p-4">
                    <p className="mb-4">Bạn muốn yêu cầu nhân viên làm gì?</p>
                    <textarea
                        className="w-full border rounded-lg p-3 h-32 resize-none"
                        placeholder="Nhập yêu cầu của bạn..."
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                    />
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={handleSubmit}
                        disabled={!request.trim()}
                        className={`w-full py-3 rounded-lg font-medium ${
                            request.trim() 
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

export default StaffCallForm;