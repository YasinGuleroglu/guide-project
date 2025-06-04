 📒 Guide - Contact Management App

**Guide** is a simple and elegant React-based contact management application that allows users to **add**, **edit**, and **delete** contact information. It is built using modern React practices and integrates with a local API (via JSON Server or mock REST endpoint) for data persistence.

---
<img width="1428" alt="Image" src="https://github.com/user-attachments/assets/86b5e471-79d3-46dd-b2a8-8ee3fbd12408" />

<img width="1428" alt="Image" src="https://github.com/user-attachments/assets/9efdd4ed-27a3-4ba8-bf7f-de644b2e56a8" />

## 🚀 Features



- 🧑‍💻 Add new contacts with name, surname, phone, email, and position fields
- ✏️ Edit existing contacts via dynamic modal form
- 🗑️ Delete contacts from the list
- 📋 Real-time contact list rendering
- ✅ Responsive design
- 🧠 Clear separation of components and logic
- 📦 Axios-based API integration

  
---

  ## 🛠️ Technologies Used

- **React** (Hooks, JSX)
- **Axios** (API communication)
- **JSON Server** (Mock API)
- **React Icons**
- **Modular CSS**

---


🔮 Future Improvements
🔍 Search and filter functionality

🌗 Dark mode toggle

🧱 Pagination or infinite scroll

🌐 Backend integration with authentication

📝 Form validation improvements

src/
├── components/
│   ├── Card.jsx
│   ├── Field.jsx
│   └── Modal.jsx
├── styles/
│   ├── _variables.scss
│   ├── reset.scss
│   ├── style.scss
│   └── header.scss
├── App.jsx
└── index.js

 👀 components =>

😇 Card.jsx → Component that displays contact cards.

😇 Field.jsx → Reusable component that creates form fields.

😇 Modal.jsx → Form modal used for adding/updating new contacts.

 👀 styles =>

😇 variables.scss → Global variables such as colors, fonts, spacing.

😇 reset.scss → CSS reset styles (browser compatibility).

😇 style.scss → Main style file (general layout and page styles).

😇 header.scss → Special style file for the header of the application.
