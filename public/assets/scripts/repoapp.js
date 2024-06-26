let repoBox = document.querySelector('.repositorio-box')

function getParams(){
    let params = {};
    let search = window.location.search.substring(1);
    if(search){
        search.split("&").forEach(param => {
            let[key, value] = param.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value);
        });
    }
    return params;
}

async function loadData(){
    const actualParams = getParams();
    const repoName = actualParams.repo;
    
    
    const response = await fetch('https://api.github.com/users/gmayeer/repos')  
    const data = await response.json()
    console.log(data)
    
    const repo = data.find(r => r.name === repoName);
    
    repoBox.innerHTML += `
        <h4>
            ${repo.name}
        </h4>
      <div class="descricao">
        <h6>
          Descrição:
        </h6>
        <p>${repo.description}</p>
        <h6>
          Data de criação:
        </h6>
        <p>${new Date(repo.created_at).toLocaleDateString()}</p>
        <h6>
          Linguagem:
        </h6>
        <p>${repo.language}</p>
        <h6>
          Link para acesso: 
        </h6>
        <p><a href="${repo.html_url}" target="_blank">Clique aqui</a></p>
      </div>
    `;
}

loadData();