

const searchInput = document.getElementById('search');
const results = document.getElementById('results');
let countries;
let searchTerm = '';



// API REQUEST

const fetchCountries = async() => {
    countries = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag;capital').then(res => res.json());

};



const showCountries = async() => {
    await fetchCountries();

    results.innerHTML = (

        countries
            .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(country => (

                `
                    <li class="country-item">
                        <img class="country-flag" src="${country.flag}"/>
                        <h2 class="country-name">${country.name}</h2>
                        <div class="country-info">
                            <div class="capital-part">
                                <h3 class="country-capital-text">Capital :&nbsp;</h3>
                                <h5 class="country-capital">${country.capital}</h5>
                            </div>
                            <div class="population-part">
                                <h3 class="country-population">Population :&nbsp;</h3>
                                <h5 class="country-population-text">${numberWithSpaces(country.population)}</h5>
                            </div>
                        </div>
                    </li>

                `


            )).join('')

    )
};


showCountries();


// INPUT SETUP


searchInput.addEventListener('input', e => {
    searchTerm = e.target.value
    showCountries()
 
})


function numberWithSpaces(x){

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}