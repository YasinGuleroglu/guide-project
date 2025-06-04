import React from 'react'
import { IoMdClose } from 'react-icons/io';
import Field from './Field';
import axios from 'axios';

const Modal = ({ isModelOpen,
  setIsModelOpen,
  setContacts,
  editItem,
  setEditItem, }) => {

    const handleSubmit = async (e)=> {

        e.preventDefault();

        const formData = new FormData(e.target);

       const newContact = Object.fromEntries(formData.entries());

       if(!editItem){
       //!kısı ekleme
      const response = await axios.
      post("http://localhost:3000/contact",newContact);

      setContacts((contacts) => [...contacts, response.data]);
       } else {
      //! guncelleme
      const response = await axios.put(`http://localhost:3000/contact/${editItem.id}`,

        newContact);


          setContacts((contacts) =>
             contacts.map((contact) => 
          contact.id === editItem.id ? response.data : contact));
        

        setEditItem(null);

       }


     setIsModelOpen(false)
    };
  return (
   isModelOpen && (
    <div className='modal'>
    {/*Modal inner */}
  <div className="modal-inner">
        {/*Head */}
        <div className='modal-head'>
        <h1>{editItem ? "kişiyi güncelle" : "Yeni Kişi Ekle"}</h1>

        <button onClick={() =>{
          setIsModelOpen(false);
          setEditItem(null);
        }}
        >
          <IoMdClose/>
          </button>
        </div>
        
      {/*Form */}
      <form onSubmit={handleSubmit}>
         <Field value={editItem?.name} label="İsim" name ="name"/>
         <Field value={editItem?.surname}  label="Soyisim" name ="surname"/>
         <Field value={editItem?.company}  label="Şirket" name ="company"/>
         <Field value={editItem?.phone}  label="Telefon" name ="phone"/>
         <Field value={editItem?.email} label="Email" name ="email"/>
         <Field value={editItem?.position}  label="Position" name ="position"/>

         <div className='buttons'>
          <button onClick={() => {
           setIsModelOpen(false);

            setEditItem(null);

          }}
          >
            Vazgeç</button>
          <button type='submit'>{editItem ? "Güncelle" : "Kayıt et"}</button>
         </div>
      </form>
  </div>
</div>
   )
  );
};
export default Modal;