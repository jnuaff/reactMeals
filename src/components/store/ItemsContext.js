import React, {useState, createContext} from "react";

export  const ItemsContext = createContext();

export const ItemsProvider = (props) => {
  const [items, setItems] = useState([
    {
      id: "m1",
      name: "Margharita",
      type: 'meals',
      amount: 0,
      description: "Finest fish and veggies",
      price: 10,
      onCart: false,
      
    },
    {
      id: "m2",
      name: "Salami",
      type: 'meals',
      amount: 0,
      description: "A german specialty!",
      price: 16.5,
      onCart: false,
      
    },
    {
      id: "m3",
      name: "Salami",
      type: 'meals',
      amount: 0,
      description: "A german specialty!",
      price: 12.5,
      onCart: false,
      
    },
    {
      id: "m4",
      name: "Tuna",
      type: 'meals',
      amount: 0,
      description: "Healthy...and green...",
      price: 18.50,
      onCart: false,
      
    },
    {
      id: "d1",
      name: "Coca Cola",
      type: 'drinks',
      amount: 0,
      price: 1,
      onCart: false,
      
    },
    {
      id: "d2",
      name: "Fanta",
      type: 'drinks',
      amount: 0,
      price: 1,
      onCart: false,
      
    },
    {
      id: "d3",
      name: "Bier",
      type: "drinks",
      amount: 0,
      price: 2,
      onCart: false,
      
    },
    {
      id: "d4",
      name: "Juice",
      type: "drinks",
      amount: 0,
      price: 1.5,
      onCart: false,
      
    },
  ]);


  return (
      <ItemsContext.Provider value={[items, setItems]}>
          {props.children}
      </ItemsContext.Provider>
  )
};


