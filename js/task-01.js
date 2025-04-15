const list = document.querySelector('#categories')
const items =list.children


[...items].forEach(item=>{   
    const categoryName=item.querySelector('h2').textContent
    const categoryItem= item.querySelectorAll('li').length
    console.log(`Number of categories:${items.length}`);
    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${categoryItem}`)
    }
    
)

