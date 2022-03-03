const URL_DOG = 'https://api.thedogapi.com/v1/images/search';
const listLike = [];
const listDislike = [];




const generateDogImage = () => {
    fetch(`${URL_DOG}`)
.then(
    (req) => {
        //console.log(req.json());
        return req.json();
    }
)
.then(
    data => {
       let containerDogs = document.querySelector('#dog-card');
       containerDogs.innerHTML = '';
       //console.log(data);
       containerDogs.innerHTML += `
       <div class="card-content white-text">
            <img src="${data[0].url}" alt="dog">  
        </div>
       `
    }
 )
.catch(
    err => {
        console.log(err);
    }
)
}

generateDogImage();

document.querySelector('#btn-like-dislike').addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName === "A"){
        generateDogImage();
    }
});


let countLike = () => {
    let imageURL = document.querySelector('img');
    listLike.push(imageURL.getAttribute('src'));
    return listLike;
}


document.querySelector('#btn-like').addEventListener('click', countLike);
console.log(listLike);


let countDislike = () => {
    let imageURL = document.querySelector('img');
    listDislike.push(imageURL.getAttribute('src'));
    return listDislike;
}


document.querySelector('#btn-dislike').addEventListener('click', countDislike);
console.log(listDislike);

document.querySelector('#complete-survey').addEventListener('click', () => {
    document.querySelector('.dogs-container').style.display = 'none';
    let likesInfo = document.querySelector('#likes-info');
    let dislikesInfo = document.querySelector('#dislikes-info');
    likesInfo.innerHTML += `
    Количество лайков: ${listLike.length}`;
    listLike.forEach(item =>{
        likesInfo.innerHTML += `
        <div class="card-content white-text">
            <img src="${item}" alt="dog" class="img-miniature">  
        </div>
        `
    });

    dislikesInfo.innerHTML += `
    Количество дизлайков: ${listDislike.length}`;
    listDislike.forEach(item =>{
        dislikesInfo.innerHTML += `
        <div class="card-content white-text">
            <img src="${item}" alt="dog" class="img-miniature">  
        </div>
        `
    });

})