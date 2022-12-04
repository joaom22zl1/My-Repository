const ul = document.querySelector("#projects-list")
const div = document.querySelector("#projects")

function repositories() {
  const url = "https://api.github.com/users/joaom22zl1/repos"

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      mostrarTela(data)
    })
  })
}

function mostrarTela(dados) {
  for (let i = 0; i <= 5; i++) {
    var elemento = ""
    elemento += `<li><img src="assets/folder.svg">
       <span>${dados[i].name}</span>
       <a href="${dados[i].html_url}">${dados[i].html_url}</a>
       <li>`
    ul.innerHTML += elemento
    console.log(dados[i].name)
    console.log(dados[i].url)
  }
}

function RandomRepositories() {
  const url = "https://api.github.com/users/joaom22zl1/repos"

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      mostrarRamdom(data)
      console.log(data.length)
    })
  })
}

function mostrarRamdom(dados) {
  let elemento01 = document.querySelector("#random-project01")
  let elemento02 = document.querySelector("#random-project02")
  let i = Math.floor(Math.random() * dados.length)

  function getJ() {
    let j = 0

    do {
      j = Math.floor(Math.random() * dados.length)
    } while (j == i)

    return j
  }

  j = getJ()

  console.log(i)
  console.log(j)
  console.log(dados[i].name)
  console.log(dados[i].url)

  let language01 = dados[i].language
  let language02 = dados[j].language
  if (language01 == null) {
    language01 = "Linguagem Indefinida"
  } else {
    language01 = language01
  }

  if (language02 == null) {
    language02 = "Linguagem Indefinida"
  } else {
    language02 = language02
  }

  if (dados[i].description == null) {
    elemento01.innerHTML = `
 <img src="assets/folder.svg">
 <p id="project-tittle">${dados[i].name}</p
  </br>
  <a href="${dados[i].html_url}">${dados[i].html_url}</a>
   <p>No Description</p>
<p>Updated at: ${Intl.DateTimeFormat("pt-BR").format(
      new Date(dados[i].updated_at)
    )}
<span>${language01}</span>
  `
  } else {
    elemento01.innerHTML = `
 <img src="assets/folder.svg">
 <p id="project-tittle">${dados[i].name}</p>
  </br>
  <a href="${dados[i].html_url}">${dados[i].html_url}</a>
   <p>${dados[i].description}</p>
<p>Updated at: ${Intl.DateTimeFormat("pt-BR").format(
      new Date(dados[i].updated_at)
    )}   
<span>${language01}</span>
  `
  }

  if (dados[j].description == null) {
    elemento02.innerHTML = `
  <img src="assets/folder.svg">
  <p id="project-tittle">${dados[j].name}</p>
  </br>
  <a href="${dados[j].html_url}">${dados[j].html_url}</a>
  <p>No description</p>
  <p>Updated at: ${Intl.DateTimeFormat("pt-BR").format(
    new Date(dados[j].updated_at)
  )}   
  <span>${language02}</span>
  `
  } else {
    elemento02.innerHTML = `
  <img src="assets/folder.svg">
  <p id="project-tittle">${dados[j].name}</p>
  </br>
  <a href="${dados[j].html_url}">${dados[j].html_url}</a>
  <p>${dados[j].description}</p>
  <p>Updated at: ${Intl.DateTimeFormat("pt-BR").format(
    new Date(dados[j].updated_at)
  )}   
  <span>${language02}</span>
  `
  }
}

function recentsRepositories() {
  const url = "https://api.github.com/users/joaom22zl1/repos"

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      mostrarRecentes(data)
    })
  })
}

function mostrarRecentes(dados) {
  let elemento = document.querySelector("#recents-projects")
  let array = []
  dados.map(elementos => {
    array.push(elementos.created_at)
    array.sort()
  })
  let lastDate = array[array.length - 1]
  console.log(lastDate)

  for (let i = 0; i < dados.length; i++) {
    if (dados[i].created_at == lastDate) {
      let description = dados[i].description
      if (description == null) {
        description = "No description"
      } else {
        description = description
      }

      let language = dados[i].language
      if (language == null) {
        language = "Linguagem Indefinida"
      } else {
        language = language
      }
      elemento.innerHTML = `
      <p>${dados[i].name}</p>
      <a href="${dados[i].html_url}">${dados[i].html_url}</a>
      <p>${description}
      <p>Updated at: ${Intl.DateTimeFormat("pt-BR").format(
        new Date(dados[i].updated_at)
      )}
      <span>${language}</span>
      `
    }
  }
}

repositories()
RandomRepositories()
recentsRepositories()
