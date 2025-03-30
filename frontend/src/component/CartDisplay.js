// import React from 'react';

// function CartDisplay({ cartItems }) {
//   const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   return (
//     <div className="fixed bottom-16 right-4 bg-white p-4 rounded-lg shadow-lg w-80">
//       {cartItems.map(item => (
//         <div key={item.id} className="flex justify-between items-center mb-2">
//           <span>{item.name}</span>
//           {/* <div className="flex items-center">
//             <span className="text-orange-500">{item.quantity}x</span>
//             <span className="ml-2">{item.price.toLocaleString()}đ</span>
//           </div> */}
//         </div>
//       ))}
//       {/* <div className="border-t mt-3 pt-2 flex justify-between font-bold">
//         <span>Total:</span>
//         <span className="text-orange-500">{total.toLocaleString()}đ</span>
//       </div> */}
//     </div>
//   );
// }

// export default CartDisplay;