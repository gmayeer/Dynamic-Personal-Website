// async function carregaDados (){
//     const resPerfil = await fetch("https://api.github.com/users/gmayeer")
//     const dataPerfil = await resPerfil.json()
//     console.log(dataPerfil.name)

//     const resRepos = await fetch("https://api.github.com/users/gmayeer/repos")
//     const dataRepos = await resRepos.json()
//     dataRepos.forEach(repo => {
//         divRepos.innerHTML += `
//         <div class="col-xl-4 col-lg-6 col-md-12">
//             <div class="card" style="width: 20rem; height: 25rem">
//             <a href="repo.html?name=${repo.name}">
//                 <img src="assets/img/Logo_github-removebg-preview.png" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <p class="card-text">${repo.description}</p>
//                 <span>0 <i class="ph ph-user"></i></span> <span>5 <i class="ph ph-star"></i></span>
//                 </div>
//             </a>
//             </div>
//         </div>
//         `
//     })
// }

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('name');
// const resRepo = await fetch(`https://api.github.com/repos/gmayeer/${myParam}`)
// const dataRepo = await resRepo.json()

// npm init -y
// npm install json-server
// "scripts": {
//     "test": "asdadad",
//     "start": "json-server --watch db/db.json"
// }
// npm start
// carregaDados();
