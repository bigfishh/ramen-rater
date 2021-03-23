// write your code here
const API = "http://localhost:3000/ramens"

// 1. get the `ramen-menu` div: querySelector
const ramenMenu = document.querySelector('div#ramen-menu')
const raForm = document.querySelector("form#ramen-rating")
const raRating = raForm.querySelector("input#rating")
const raComment = raForm.querySelector("textarea#comment")
// 2. write a function to get all of the ramens data: use a fetch get request 
function getAllRamens() {
    fetch(API)
    .then(resp => resp.json())
    .then(allRamens => {
        // 3. iterate through the ramens data and...
        allRamens.forEach((singleRamen) => {
            renderSingleRamenImg(singleRamen)
        })
    })
}

// helper function to render single ramen to ramen menu div
function renderSingleRamenImg(singleRamen) {
    // 4. display each ramen data using a img tag 
    // - create an img tag + add info that's needed 
    const image = document.createElement('img')
        image.src = singleRamen.image
        image.dataset.id = singleRamen.id
    // 5. append to DOM using `append`
    ramenMenu.append(image)
}

// 1. add an event listener to the parent element, `#ramen-menu` div, to listen for a "click"
ramenMenu.addEventListener("click", event => {
    // 2. check to see if element that is click is an image
    if (event.target.matches("img")) {
        // 3. get clicked on ramen info: fetch get request 
        renderRamenToMainDiv(event.target.dataset.id)
    }
})

function renderRamenToMainDiv(datasetId) {
    fetch(`${API}/${datasetId}`)
        .then(resp => resp.json())
        .then(singleRamen => {
            // 4. display clicked on ramen to the `#ramen-detail` div and to the `#ramen-rating` form. 
                // - get the tags needed 
                // - assign those tags to the values pulled out from the singleRamen 
            let {image, name, id, restaurant, rating, comment} = singleRamen
            const imageDetail = document.querySelector("img.detail-image")
                imageDetail.src = image
            const raName = document.querySelector("h2.name")    
                raName.textContent = name
            const raRestaurant = document.querySelector("h3.restaurant")
                raRestaurant.textContent = restaurant
                raForm.dataset.id = id 
                raRating.value = rating
                raComment.value = comment

        })
}

// 1. get the form, rating input value, comment value
// 2. add an event listener to the form for a submit event 
raForm.addEventListener("submit", function(event) {
    event.preventDefault()
    // 3. when a submit event happens, we want to update the backend/server with updated rating/comment 
    fetch(`${API}/${event.target.dataset.id}`, {
        method: "PATCH", 
        headers: {
            "content-type": "application/json",
            accept: "application/json"
        }, 
        body: JSON.stringify({
            rating: raRating.value,
            comment: raComment.value
        })
    })
    .then(resp => resp.json())
    .then(updatedRamen => {
        // 4. update the frontend w/ upated rating/comment 
        let {rating, comment} = updatedRamen
        raRating.value = rating 
        raComment.value = comment
    })
})

getAllRamens()
