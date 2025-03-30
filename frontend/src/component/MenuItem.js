import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

function MenuItem({ item, onAddToCart, onRemoveFromCart, quantity = 0 }) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <>
            <div className="bg-white rounded-lg p-2 relative mt-8">
                <div className="cursor-pointer p-7" onClick={() => setShowDetail(true)}>
                    <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-lg mb-2" />
                    <h3 className="font-medium mb-1">{item.name}</h3>
                    <p className="text-orange-500">{item.price.toLocaleString()}đ</p>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    {quantity > 0 ? (
                        <>
                            <button onClick={(e) => { e.stopPropagation(); onRemoveFromCart(item); }}
                                className="w-8 h-8 flex items-center justify-center border border-orange-500 text-orange-500 rounded-full"> -
                            </button>
                            <span className="text-orange-500 font-medium">{quantity}</span>
                        </>
                    ) : null}
                    <button onClick={(e) => { e.stopPropagation(); onAddToCart(item, false); }}
                        className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full"> +
                    </button>
                </div>
            </div>

            {showDetail && (
                <ProductDetail product={item}
                    onClose={() => setShowDetail(false)}
                    onAddToCart={onAddToCart}
                />
            )}
        </>
    );
}

export default MenuItem;