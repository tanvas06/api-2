let button = document.getElementById(`btn`)

const clicked = (evt) => {
    axios.get(`https://swapi.dev/api/planets/?search=Alderaan`).then(res => {
        const data = res.data.results[0].residents
        for(let i = 0; i < data.length; i++){
            axios.get(data[i]).then(res => {
                let newSection = document.createElement(`h2`)
                newSection.textContent = res.data['name']
                document.querySelector(`body`).appendChild(newSection)
            })
        }
    })
}
button.addEventListener(`click`, clicked)