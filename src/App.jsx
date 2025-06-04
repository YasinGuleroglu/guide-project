import React, { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { IoIosMenu } from 'react-icons/io';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { IoIosPersonAdd } from 'react-icons/io';
import axios from 'axios';
import Card from './components/Card';
import Modal from './components/Modal';


const App = () => {
  // verileri aldık usState kullanarak renderlama yapmalıyız
  const [contacts, setContacts] = useState([]);

  const [editItem, setEditItem] = useState(null);

  const [isModelOpen, setIsModelOpen] = useState(false);
  
  useEffect(() => {
   axios
   .get("http://localhost:3000/contact")
   .then((res) => setContacts(res.data));
  }, []);

  //!form gonderıldıgınde calısacak fonksıyon
  const handleSubmit = (e) => {
    // sayfa yenılemısını engelleme
    e.preventDefault();

    const query = e.target[1].value;

   const params = {

    q:query,

   };

   axios
   .get("http://localhost:3000/contact",{params})
   .then((res) => setContacts(res.data));
  };

  //! sılme ıslemını gerceklestıren fonksıyon
  const handleDelete = (id) => {
    const response = confirm("Kişiyi silmek istediğinizden emin misiniz?");

    if (response) {
      axios.delete(`http://localhost:3000/contact/${id}`)
      .then(() => {
        const updatedContacts = contacts.filter((contact) =>contact.id != id);
    
        setContacts(updatedContacts);
      });
    }
  };

  // ! guncellme ıslemı yapan foksıyon

  const handleUpdate = (item) => {

    setIsModelOpen(true);

    setEditItem(item);
  };

  console.log(editItem);
   
  return (
<div className="app">
  {/*header*/}
<header>
{/*logo*/}
<h1>Rehber</h1>

<div>           
{/*form*/}

 <form onSubmit={handleSubmit}>
<button>
<RiSearchLine/>
</button>

<input type="search" placeholder='Kişi aratınız...'/>
</form>

  {/*buttons*/}

  <button className='ns'>
    <IoIosMenu/>
  </button>
  <button className='ns'>
    <HiMiniSquares2X2/>
  </button>
  <button onClick={()=>setIsModelOpen(true)} className='add'>
    <IoIosPersonAdd className='icon'/>
    <span>Yeni Kişi</span>
  </button>
              </div>
      </header>
     {/*main */}
      <main>
          
      {contacts.map((item) => (
        <Card  key={item.id} item={item}
        handleDelete={handleDelete} handleUpdate={handleUpdate} />
      ))}
      </main>

     {/*modal */}


      <Modal isModelOpen={isModelOpen} 
      setIsModelOpen={setIsModelOpen}
       setContacts={setContacts}
       editItem={editItem}
       setEditItem={setEditItem} />
    </div>
  );
};

export default App;