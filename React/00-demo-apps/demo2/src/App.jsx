import React, { useState } from 'react';
import Modal from './Modal';

const iphoneData = {
  // Replace with actual product info including image URL
  image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg',
  name: 'iPhone 15 Pro Max',
  price: '$1,099',
  description: 'The most powerful iPhone ever, with a revolutionary new triple-lens camera system, a superfast A17 Bionic chip, and a stunning Super Retina XDR display.',
  features: [
    '6.7-inch Super Retina XDR display with ProMotion',
    'A17 Bionic chip with 6 CPU cores and 5 GPU cores',
    'Triple-lens camera system with 48MP main sensor, 12MP ultrawide sensor, and 12MP telephoto sensor',
    'Cinematic mode in 4K HDR at 24 fps, 30 fps, or 60 fps',
    'Super Retina XDR display with 120Hz refresh rate',
    'Ceramic Shield front',
    'Stainless steel surgical-grade bands',
    'Durable design with water resistance (IP68) and dust resistance (IP6X)',
  ],
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app flex flex-col gap-5">
      <h1>Welcome to my website!</h1>
      <p>This is some content on the page. Click the button below to open the modal with iPhone details.</p>
      <button onClick={handleOpenModal}>Open iPhone Modal</button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {/* Product content */}
          <div className="product-info">
            <img width={150} src={iphoneData.image} alt={iphoneData.name} />
            <h3>{iphoneData.name}</h3>
            <p className="price">{iphoneData.price}</p>
            <p className="description">{iphoneData.description}</p>
            <h4>Features</h4>
            <ul>
              {iphoneData.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
