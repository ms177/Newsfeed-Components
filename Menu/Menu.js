/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// /* Step 1: Write a function that will create a menu component as seen below:

//   <div class="menu">
//     <ul>
//       {each menu item as a list item}
//     </ul>
//   </div>

//   The function takes an array as its only argument. 
  


// Add those items to the <ul> 






const createMenu = (array) => {
  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  array.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  menu.appendChild(ul);

  menu.classList.add('menu');

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM. 
  const menuButton = document.querySelector('.menu-button');
  let pushed = false;
// Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!pushed) {
      showMenu();
      pushed = true;
    } else {
      hideMenu();
      pushed = false;
    }
  });

  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  window.addEventListener('click', () => {
    if (pushed) {
      hideMenu();
      pushed = false;
    }
  })
// Step 5: return the menu component. */
  return menu;
}

const showMenu = () => {
  gsap.to('.menu', {
    duration: 1,
    left: 0
  });
}

const hideMenu = () => {
  gsap.to('.menu', {
    duration: 1,
    left: '-350px'
  });
}

/* Step 6: add the menu component to the DOM. */
const menu = createMenu(menuItems);
const header = document.querySelector('.header');

header.prepend(menu);
