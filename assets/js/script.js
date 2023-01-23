const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function () {

    document.querySelector('.dropdown-content').style.display = 'block'
    document.querySelector('.dropdown-content').style.backgroundColor = 'black'
    document.querySelector('.dropdown-content').style.borderRadius = '15px'
    document.querySelector('.dropdown-content').style.padding = '10px'
    
})

dropdown.addEventListener('dblclick', function () {
    document.querySelector('.dropdown-content').style.display = 'none'
})


