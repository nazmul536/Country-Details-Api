const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {

    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h4><strong>Name:</strong> ${country.name}</h4>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Show Details</button>
        `
        countriesDiv.appendChild(div);
    })
}
const loadCountryByName = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetails(data[0]))
}
const displayCountriesDetails = (country) => {
    console.log(country)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <img width="250px" src="${country.flag}" >
    <h4><strong>Name:</strong> ${country.name}</h4>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Region:</strong> ${country.region}</p>  
    `

}