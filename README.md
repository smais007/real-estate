
![Logo](https://i.ibb.co/6XnttS0/Paradise-Cove.png)


# Paradice Cove: Luxury Real Estate Website

Paradice Cove is a sophisticated web platform designed to showcase exquisite properties ranging from luxurious villas and penthouses to private islands and exclusive townhouses. This project aims to provide a seamless and visually captivating experience for users looking to explore high-end real estate options.


## Features:
- **Property Listings:** Browse through an extensive collection of elite properties, each meticulously curated to represent the epitome of luxury living.
- **Immersive Visuals:** Immerse yourself in stunning imagery and captivating videos that showcase the beauty and grandeur of each property.
- **Interactive Maps:** Explore the surrounding areas of each property with interactive maps, providing valuable insights into the neighborhood and nearby attractions.
- **Expert Agents:** Connect with knowledgeable and experienced real estate agents who can provide personalized guidance and assistance throughout the buying or renting process.
- **Responsive Design:** Enjoy a seamless browsing experience across all devices, from desktops to tablets and smartphones.

## Technologies Used

- React.js
- Vite
- React Router DOM
- Firebas Authentication
- Tailwind CSS
- Tailwind UI
- Headless UI
- Heroicons
- React icons
- Sonnar Toast
- React loader Spiner
- Google Maps


## Demo
Check out the live demo of Paradice Cove [here](https://assingment-9-8f284.firebaseapp.com).

## Installation:
1. Clone the repository:
    ```bash
    git clone git@github.com:programming-hero-web-course-4/b9a9-real-estate-smais007.git
2. Navigate to the project directory:
    ```bash
    cd b9a9-real-estate-smais007-main
3. Install dependencies:
    ```bash
    npm install
## Getting Started:
1. Start the development server:
    ```bash
    npm run dev
2. Open your browser and go to `http://localhost:5173` to view the website.
## npm package name which is used for the challenges task.

>- AOS Package
>- React Hook form
>- Swiper slider


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`

`VITE_GOOGLEAPIKEY`
## Deployment

1. First initialized firebase
```bash
sudo npm install -g firebase-tools
  ```
2. Login to your firebase consol
```bash
firebase Login
  ```
3. initialized firebase in this project
```bash
firebase init
```
4. Then Press Space to select features, then Enter to confirm your choices.
>- Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`

5. Now enter foollowing command
>- What do you want to use as your public directory? `dist`
>- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `yes`
>- Set up automatic builds and deploys with GitHub? (y/N) `no`

6. Now buld the dist folder
```bash
npm run build
```
7. Finally this time to deploy website in firebase, now enter this command
```bash
firebase deploy
```



## Contact

- For any inquiries or support, please contact [Smais Shawon](https://www.github.com/smais007)

