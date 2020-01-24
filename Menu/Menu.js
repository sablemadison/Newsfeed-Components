/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const createMenu = (arr) => {
  //create  menu element
const menuDiv = document.createElement('div')
const list = document.createElement('ul')

// iterate over array to create list items
arr.forEach( li => {  
  let listItem =  document.createElement('li');
  listItem.textContent = li;
  list.appendChild(listItem);
  
})

// append list to menu div
menuDiv.appendChild(list)

// add class name
menuDiv.classList.add('menu')

//add event listener to menu button
menuButton.addEventListener('click', () => {
  menuDiv.classList.toggle('menu--open') 
})
return menuDiv;
}

//select menu button
const menuButton = document.querySelector('.menu-button')


//select parent element already on DOM(the header)
const header = document.querySelector('.header')

// use function to create compoment and add it to DOM by appending to parent
const newMenu = createMenu(menuItems)

header.appendChild(newMenu)

console.log(newMenu)