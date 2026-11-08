import './App.css';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  const [items, setItems] = useState([
          {
  
              id: 1,
              checked: false,
              item: 'item 1'
          },
          {
              id: 2,
              checked: true,
              item: 'item 2'
          },
          {
              id: 3,
              checked: false,
              item: 'item 3'
          },
          {
              id: 4,
              checked: true,
              item: 'item 4'
          }
      ])
      
      const handleChange = (id) => {
          const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
          setItems(listItems);
          localStorage.setItem("storageList", JSON.stringify(listItems))
          console.log("Clicked")
      }
  
      const handleDelete = (id) => {
          const listItems = items.filter(item => item.id !== id)
          setItems(listItems)
          localStorage.setItem("storageList", JSON.stringify(listItems));
          console.log(`Deleting ${id}!!!`)
      };

  return (
    <div className="App">
      <Header />
      <Content 
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
