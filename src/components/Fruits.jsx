import Fruit from './Fruit';

export default function Fruits() {
  //   const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const fruits = [
    { name: 'Apple', price: 1, emoji: '🍏' },
    { name: 'Banana', price: 4, emoji: '🍌' },
    { name: 'Cherry', price: 5, emoji: '🍒' },
    { name: 'Pine', price: 8, emoji: '🌴' },
    { name: 'Elderberry', price: 3, emoji: '🍇' },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
