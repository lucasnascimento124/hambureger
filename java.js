const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector ('.filter-all')


function ShowAll(productArray) {
    let myLi = ''
    productArray.forEach((product) => {
        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">${product.price}</p> 
                </li >
          `
    })

    list.innerHTML = myLi

}

function mapAllIntes() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,



    }))


    ShowAll(newPrices)




}
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `

       <li>
         <p> o valor total dos intes é R$ ${totalValue}</p>
       </li>

      `
    console.log(totalValue)

}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan )

    ShowAll(filterJustVegan)
}






buttonShowAll.addEventListener('click', () => ShowAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllIntes)
sumAll.addEventListener('click',sumAllItems)
filterAll.addEventListener('click', filterAllItems)



