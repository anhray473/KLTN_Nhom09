import React, { useState } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

function ReviewForm({ onClose }) {
    const [rating, setRating] = useState(0);
    const [issues, setIssues] = useState([]);
    const [comment, setComment] = useState('');
    const [phone, setPhone] = useState('');

    const issueOptions = [
        'Vệ sinh không sạch sẽ',
        'Nhân viên không nhiệt tình',
        'Món ăn không ngon',
        'Món ăn phục vụ lâu',
        'Giá không phù hợp với chất lượng',
        'Không gian bất tiện',
        'Không gian ồn'
    ];

    const handleSubmit = () => {
        // Handle review submission
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md mx-4 rounded-lg max-h-[90vh] overflow-y-auto">
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-medium">Trải nghiệm của bạn ở nhà hàng hôm nay thế nào?</h2>
                    <button onClick={onClose} className="text-gray-400">
                        <FaTimes size={20} />
                    </button>
                </div>

                <div className="p-4">
                    {/* Star Rating */}
                    <div className="flex gap-2 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`text-2xl cursor-pointer ${
                                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                onClick={() => setRating(star)}
                            />
                        ))}
                    </div>

                    {/* Issues Selection */}
                    <p className="mb-3">Bạn có điều gì chưa hài lòng phải không?</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {issueOptions.map((issue) => (
                            <button
                                key={issue}
                                className={`px-3 py-1 rounded-full text-sm ${
                                    issues.includes(issue)
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-600'
                                }`}
                                onClick={() => {
                                    setIssues(prev =>
                                        prev.includes(issue)
                                            ? prev.filter(i => i !== issue)
                                            : [...prev, issue]
                                    );
                                }}
                            >
                                {issue}
                            </button>
                        ))}
                    </div>

                    {/* Comment */}
                    <textarea
                        className="w-full border rounded-lg p-3 h-32 resize-none mb-4"
                        placeholder="Viết góp ý cho nhà hàng..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    {/* Phone Number */}
                    <p className="text-sm mb-2">Nhà hàng rất trân trọng và mong muốn phản hồi tới đánh giá trên, bạn vui lòng để lại số điện thoại nhé</p>
                    <input
                        type="tel"
                        className="w-full border rounded-lg p-3 mb-4"
                        placeholder="Số điện thoại của bạn"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={handleSubmit}
                        className="w-full py-3 rounded-lg font-medium bg-orange-500 text-white"
                    >
                        Gửi đánh giá
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;