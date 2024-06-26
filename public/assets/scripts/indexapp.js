//PAGE STYLING (start)

const dest_sec1 = document.querySelector(".dest_sec1")
const sec1 = document.querySelector(".sec1")

dest_sec1.addEventListener("click", () => {
    sec1.classList.add("destaque")
    setTimeout(() => {
        sec1.classList.add("undestaque")
    }, 1000);
    sec1.classList.remove("undestaque")
})

const dest_sec2 = document.querySelector(".dest_sec2")
const sec2 = document.querySelector(".sec2")

dest_sec2.addEventListener("click", () => {
    sec2.classList.add("destaque")
    setTimeout(() => {
        sec2.classList.add("undestaque")
    }, 1000);
    sec2.classList.remove("undestaque")
})

const dest_sec3 = document.querySelector(".dest_sec3")
const sec3 = document.querySelector(".sec3")

dest_sec3.addEventListener("click", () => {
    sec3.classList.add("destaque")
    setTimeout(() => {
        sec3.classList.add("undestaque")
    }, 1000);
    sec3.classList.remove("undestaque")
})

const dest_sec4 = document.querySelector(".dest_sec4")
const sec4 = document.querySelector(".sec4")

dest_sec4.addEventListener("click", () => {
    sec4.classList.add("destaque")
    setTimeout(() => {
        sec4.classList.add("undestaque")
    }, 1000);
    sec4.classList.remove("undestaque")
})

//PAGE STYLING (end)

//PAGE CONTENT(start)

//GITHUB'S API manipulation'
//Getting components id's and classes
let myPicture = document.querySelector('.pfp')
let myName = document.querySelector('.nome')
let myBio = document.querySelector('.introducao')
let myPosition = document.querySelector('.location')
let myInsta = document.querySelector('.instagram')
let myLinkedin = document.querySelector('.linkedin')
let myGitLink = document.querySelector('.github')
let myFollowers = document.querySelector('.followers')
//Fetching github's API JSON informations and implementing them on my profile in the website

async function loadDataAPI(){
    //Profile Fetching
    const responseapi = await fetch("https://api.github.com/users/gmayeer");
    const dataapi = await responseapi.json();
    //Tests:
    console.log(dataapi)
    
    myPicture.innerHTML += `<img class="picture" src="${dataapi.avatar_url}">`
    myName.innerHTML += `${dataapi.name}`
    myBio.innerHTML += `${dataapi.bio}`
    myPosition.innerHTML += `📌${dataapi.location}`
    
    myInsta.innerHTML += `<a href="https://instagram.com/gmayeer" target="_blank"><img src="assets/img/instagram-logo.svg"></a>`
    myLinkedin.innerHTML += `<a href="https://www.linkedin.com/in/gabriel-clary-39b6022a5/" target="_blank"><img src="assets/img/linkedin-logo.svg"></a>`
    myGitLink.innerHTML += `<a href="https://github.com/gmayeer" target="_blank"><img src="assets/img/github-logo.svg"></a>`

    myFollowers.innerHTML += `${dataapi.followers} <i class="ph ph-user-plus"></i>`

}

//JSONServer data manipulation
//Getting components id's and classes
let friends = document.getElementById('friends')
let recommendations = document.querySelector('.carousel-inner')

//Fetching and implementing db.json for colleagues and recommendations infos 

async function loadDataJSON(){
    const responsejson = await fetch("/db/db.json");
    const datajson = await responsejson.json();
    //Tests:
    console.log(datajson)
    var indexFriends = 0;
    datajson.colegas.forEach(colega => {
        if(indexFriends != 2){
            friends.innerHTML += `
            <div class="friend">
                <img src="${colega.photo}" alt="...">
                <h6 id="friendname">
                    ${colega.name}
                </h6>
                <p id="friendinfo">
                    <a href="${colega.gitprofile}" class="friendGitLink" target="_blank">->Github</a>
                </p>
        </div>
        `
        }
        if(indexFriends == 2){
                friends.innerHTML += `
                <div class="friend">
                    <img src="${colega.photo}" alt="...">
                    <h6 id="friendname">
                        ${colega.name}
                    </h6>
                    <p id="friendinfo">
                        <a href="${colega.gitprofile}" class="friendGitLink" target="_blank">->Github</a>
                    </p>
            </div>
            `
        }
        indexFriends++;
    })

    var indexRecom = 0;
    datajson.recomendacoes.forEach(recom =>{
        if(indexRecom == 0){
        recommendations.innerHTML += `
            <div class="carousel-item active">
                <img src="${recom.imgpath}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${recom.title}</h5>
                    <p>${recom.description}</p>
                </div>
            </div>
        `
        }
        if(indexRecom != 0){
            recommendations.innerHTML += `
            <div class="carousel-item">
                <img src="${recom.imgpath}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${recom.title}</h5>
                    <p>${recom.description}</p>
                </div>
            </div>
            `
        }
        
        //Tests
        console.log(recom.title)
        console.log(recom.imgpath)
        indexRecom++;
    })
}
loadDataAPI();
loadDataJSON();
