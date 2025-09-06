import React from 'react';

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img 
        src="https://a0.muscache.com/im/pictures/e4558186-27cc-49ba-a44c-6c5e4b1eaadf.jpg?im_w=960"
        alt="Imagem do lugar"
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-500">
          Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.
          Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.
          Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.Texto descritivo sobre o lugar.
        </p>
      </div>
      <p><span className="font-semibold">R$ 550</span> por noite</p>
    </a>
  );
}

export default Item;
