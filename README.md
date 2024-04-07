# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Structure

project-root/
│
├── public/
│ ├── index.html
│ └── favicon.ico
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── styles/
│ │ └── (CSS, SCSS, or other styling files)
│ │
│ ├── components/
│ │ ├── Navbar/
│ │ │ ├── Navbar.js
│ │ │ └── Navbar.css
│ │ │
│ │ ├── Slider/
│ │ │ ├── Slider.js
│ │ │ └── Slider.css
│ │ │
│ │ ├── EstateCard/
│ │ │ ├── EstateCard.js
│ │ │ └── EstateCard.css
│ │ │
│ │ ├── EstateDetails/
│ │ │ ├── EstateDetails.js
│ │ │ └── EstateDetails.css
│ │ │
│ │ ├── Footer/
│ │ │ ├── Footer.js
│ │ │ └── Footer.css
│ │ │
│ │ ├── Login/
│ │ │ ├── Login.js
│ │ │ └── Login.css
│ │ │
│ │ ├── Register/
│ │ │ ├── Register.js
│ │ │ └── Register.css
│ │ │
│ │ ├── UserProfile/
│ │ │ ├── UserProfile.js
│ │ │ └── UserProfile.css
│ │ │
│ │ ├── EditProfile/
│ │ │ ├── EditProfile.js
│ │ │ └── EditProfile.css
│ │ │
│ │ └── NotFound/
│ │ ├── NotFound.js
│ │ └── NotFound.css
│ │
│ ├── pages/
│ │ ├── Home/
│ │ │ ├── Home.js
│ │ │ └── Home.css
│ │ │
│ │ ├── LoginPage/
│ │ │ ├── LoginPage.js
│ │ │ └── LoginPage.css
│ │ │
│ │ ├── RegisterPage/
│ │ │ ├── RegisterPage.js
│ │ │ └── RegisterPage.css
│ │ │
│ │ ├── EstateDetailsPage/
│ │ │ ├── EstateDetailsPage.js
│ │ │ └── EstateDetailsPage.css
│ │ │
│ │ ├── UserProfilePage/
│ │ │ ├── UserProfilePage.js
│ │ │ └── UserProfilePage.css
│ │ │
│ │ ├── EditProfilePage/
│ │ │ ├── EditProfilePage.js
│ │ │ └── EditProfilePage.css
│ │ │
│ │ ├── NotFoundPage/
│ │ │ ├── NotFoundPage.js
│ │ │ └── NotFoundPage.css
│ │ │
│ │ └── ExtraPage/
│ │ ├── ExtraPage.js
│ │ └── ExtraPage.css
│ │
│ ├── services/
│ │ ├── firebase.js
│ │ └── api.js
│ │
│ ├── utils/
│ │ ├── validation.js
│ │ └── constants.js
│ │
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...
