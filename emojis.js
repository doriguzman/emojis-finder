

document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    fetch('https://s3.amazonaws.com/c4q/emojis.json')
        .then((res) => {
            return res.json();
        }).then((object) => {

            var objKeys = Object.keys(object)//gives back an array of the keys 
            console.log(objKeys)
            var insideList = document.querySelector('ul')
            var searchBar = document.querySelector('#search')


            for (var i = 0; i < objKeys.length; i++) {
                var newElement = document.createElement('h3')
                var imageElement = document.createElement('img')
              

                imageElement.src = object[objKeys[i]]
                console.log(imageElement)
                newElement.innerText = objKeys[i] + '\n'

                insideList.appendChild(newElement).appendChild(imageElement)
            }


            searchBar.addEventListener('input', function (event) {
                var input = searchBar.value
                insideList.innerText = ''

                var filteredKeys = objKeys.filter(function (elem) {
                    return elem.includes(input)
                })//returns an array with the  keys that are found with the input 

                for (var i = 0; i < filteredKeys.length; i++) {
                    var newElement = document.createElement('h3')
                    var imageElement = document.createElement('img')
                    var br = document.createElement('br')
                    imageElement.src = object[filteredKeys[i]]
                    console.log(imageElement)
                    newElement.innerText = filteredKeys[i] + '\n'

                    insideList.appendChild(newElement).appendChild(imageElement)
                }
            })
            })
})
//getting the img link we would just have to key into the object object['objKeys']
