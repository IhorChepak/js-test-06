const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const items = ingredients.map(item=>{
  const li = document.createElement("li")
  li.classList.add('item')
  li.textContent=item
  return li

}


)

list.append(...items)
