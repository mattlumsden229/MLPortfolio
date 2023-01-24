//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = `Spell Name: ${data.name}`
        document.querySelector('h3').innerText = `Class: ${data.classes[0].name}`
        const ul = document.querySelector('ul')
        ul.innerText = ''
        if(data.subclasses[0] === undefined){
            const li = document.createElement('li')
            document.querySelector('ul').appendChild(li)
            li.textContent = 'Subclasses: None'
        }else{
            document.getElementsByClassName('hidden')[0].style.display = 'block'
            data.subclasses.forEach(obj => {
                const li = document.createElement('li')
                const ul = document.querySelector('ul')
                li.textContent = obj.name
                document.querySelector('ul').appendChild(li)
            })
        }
    })
      .catch(err => {
          console.log(`error ${err}`)
      })
}