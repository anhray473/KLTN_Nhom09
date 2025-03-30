import React, { useState } from 'react';
import MenuItem from './component/MenuItem';
import FoodCard from './component/FoodCard';
import Header from './component/Header';
import RestaurantInfo from './component/RestaurantInfo';
import OrderConfirmation from './component/OrderConfirmation';
import HomePage from './component/HomePage';


function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [submittedItems, setSubmittedItems] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  

  const menuItems = [
    { id: 1, name: 'Bánh bao trứng sữa', price: 39000, image: '/img/c1.png' },
    { id: 2, name: 'Bánh bao kim sa', price: 39000, image: '/img/c2.png' },
    { id: 3, name: 'Bánh bao xá xíu', price: 45000, image: '/img/c3.png' },
    { id: 4, name: 'Bánh bao phô mai xá xíu', price: 49000, image: '/img/c4.png' },
    { id: 5, name: 'Há cảo tôm thịt', price: 55000, image: '/img/r1.png' },
    { id: 6, name: 'Há cảo sò điệp', price: 55000, image: '/img/c7.png' },
    { id: 7, name: 'Xíu mai thanh cua', price: 55000, image: '/img/cu1.png' },
    { id: 8, name: 'Chân gà hấp táu xi', price: 55000, image: '/img/cu2.png' },
    { id: 9, name: 'Bánh lá hẹ chiên', price: 55000, image: '/img/cu3.png' },
    { id: 10, name: 'Tầu hủ ky tôm chiên', price: 55000, image: '/img/cu6.png' },
    { id: 11, name: 'Hoành thánh sốt tương', price: 50000, image: '/img/cu5.png' },
    { id: 12, name: 'Chân gà trộn cay Tứ Xuyên', price: 75000, image: '/img/fi1.png' },
  ];

  const addToCart = (item, setQuantity = false) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        if (setQuantity) {

          return prevCart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
        } else {
          
          return prevCart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }
      }
      return [...prevCart, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter(cartItem => cartItem.id !== item.id);
    });
  };

  const getItemQuantity = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleOrderSubmit = () => {
    setSubmittedItems([...cart]);
    setIsOrderSubmitted(true);
    setCart([]);
  };
  const handleReturnHome = () => {
    setIsOrderSubmitted(false);
  };
  if (isOrderSubmitted) {
    return (
      <OrderConfirmation orderedItems={submittedItems}
        onReturnHome={handleReturnHome} />
    );
  }

  const handleNavigateToMenu = () => {
    setShowMenu(true);
  };
  if (isOrderSubmitted) {
    return (
      <OrderConfirmation
        orderedItems={submittedItems}
        onReturnHome={() => {
          setIsOrderSubmitted(false);
          setShowMenu();
        }}
      />
    );
  }
  if (!showMenu) {
    return <HomePage onNavigateToMenu={handleNavigateToMenu}/>
  } 
  const handleBackToHome = () => {
    setShowMenu(false);
  };
  
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 pt-16">
        <Header
          onSearch={handleSearch}
          onBack={handleBackToHome}
          showBackButton={showMenu}
        />
        
        <RestaurantInfo />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12">
          {filteredMenuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
              quantity={getItemQuantity(item.id)}
            />
          ))}
        </div>
        <div className="h-20"></div>
        <FoodCard
          cartItems={cart}
          cartItemCount={cart.reduce((total, item) => total + (item.quantity || 0), 0)}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          onOrderSubmit={handleOrderSubmit}
        />
      </div>
    </div>
  );
}

export default App;