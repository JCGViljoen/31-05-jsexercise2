let games = [
    {
        name: 'Assassins Creed',
        price: 'R50',
        img: "https://i.postimg.cc/261hLTZB/Assassin-s-Creed.jpg"
        
    },
    {
        name: 'Assassins Creed 2',
        price: 'R150',
        img: "https://i.postimg.cc/8c8JJGGq/download.jpg"
    },
    {
        name: 'Assassins Creed 3',
        price: 'R250',
        img: "https://i.postimg.cc/MpZcjdkK/assassins-creed-3-button-1640894336558.jpg"
    }
]


let displayElement = document.querySelector('#content')
games.forEach((games) => {
    displayElement.innerHTML += `
    
    <td>${games.name}</td>
    <td>${games.price}</td>
    <td><img src=${games.img}></td>
    `} )