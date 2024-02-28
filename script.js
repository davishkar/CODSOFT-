
const loaderContainer = document.querySelector('.loader-container');

   loaderContainer.style.display = 'block';


   setTimeout(() => {
       loaderContainer.style.display = 'none';
   }, 3000);