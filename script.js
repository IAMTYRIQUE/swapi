let baseUrl = 'https://swapi.dev/api/';
let characterUrl = baseUrl + 'people/';

const section = document.querySelector('.people-details');

const fetchCharacters = async () => {
    const result = await fetch(characterUrl);
    const data = await result.json();
    return data;
};

fetchCharacters()
    .then(data => showResults(data));

const showResults = async (json) => {

    const characters = json.results;

    for (let i = 0; i < characters.length; i++) {

        const cardDetailContainer = document.createElement('div');

        //VEHICLE

        let rowBuilder = (count) => {
            return {
                [`cardDetailTitleContainer${count}`]: document.createElement('div'), //property: value
                [`cardTitleIcon${count}`]: document.createElement('div'),
                [`cardDetailIcon${count}`]: document.createElement('img'),
                [`cardDetailTitle${count}`]: document.createElement('span'),
                [`cardDetailData${count}`]: document.createElement('span')
            }
        }
        
        let elementClassMaker = (count, elementObject) => { //elemOb is what the object being return from row builder
            elementObject[`cardDetailTitleContainer${count}`].classList.add('card-detail-title-container', 'grid-center');
            elementObject[`cardTitleIcon${count}`].classList.add('card-title-icon');
            elementObject[`cardDetailIcon${count}`].classList.add('card-detail-icon');
            elementObject[`cardDetailTitle${count}`].className = 'card-detail-title';
            elementObject[`cardDetailData${count}`].classList.add('card-detail-data', 'grid-center');
        }
        
        /**
         * 
         * @param {Array} elementObject //not an array but tells it to treat it as an array
         */
        let canvasPainter = (elementObject, data, title) => {
            let propertyArray = Object.getOwnPropertyNames(elementObject); //use this get property names of obj and store in array
            elementObject[propertyArray[2]].src = '/assets/Vehicle.svg';
            elementObject[propertyArray[3]].textContent = title;
            elementObject[propertyArray[4]].textContent = data.name;
            cardDetailContainer.appendChild(elementObject[propertyArray[0]]);
            elementObject[propertyArray[0]].appendChild(elementObject[propertyArray[1]]);
            elementObject[propertyArray[1]].appendChild(elementObject[propertyArray[2]]);
            elementObject[propertyArray[1]].appendChild(elementObject[propertyArray[3]]);
            elementObject[propertyArray[0]].appendChild(elementObject[propertyArray[4]]);
        }

        let requestData = async(url) => {
            const response = await fetch(url);
            return await response.json();
        }

        /**
         * 
         * @param {Array<String>} vehicleUrlArray 
         */
        let getTransportArray = (vehicleUrlArray) => {
            return vehicleUrlArray.map(async url=> { //map loops through an array and returns an array
                const res = await requestData(url);
                return res; //adding another index to the array
            })
        }
        
        const character = characters[i];
        let characterSpecies = 'Human'
        let characterHomeworld = "Planet";
        
        if (character.species.length > 0) {
            const speciesUrl = character.species[0];
            await fetch(speciesUrl).then(function (result) {
                return result.json();
            }).then(function (json) {
                characterSpecies = json.name;
                console.log(characterSpecies);
            }).catch(function (err) {
                console.log(err);
            });
        }

        if (character.homeworld !== null && character.homeworld !== '') {
            await fetch(character.homeworld).then(function(response) {
                return response.json();
            }).then(function (data) {
                characterHomeworld = data.name;
                console.log(characterHomeworld);
            }).catch(function (err) {
                console.log(err);
            });
        }

        const cardContainer = document.createElement('div');
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');

        const cardIcon = document.createElement('img');
        const personName = document.createElement('span');

        const cardSubHeading = document.createElement('div');
        const genderContainer = document.createElement('div');
        const genderIcon = document.createElement('img');
        const birthYear = document.createElement('span');
        const species = document.createElement('span');

        const cardDetailTitleContainer = document.createElement('div');
        const cardTitleIcon = document.createElement('div');
        const cardDetailIcon = document.createElement('img');
        const cardDetailTitle = document.createElement('span');
        const cardDetailData = document.createElement('span');

        const cardDetailTitleContainer1 = document.createElement('div');
        const cardTitleIcon1 = document.createElement('div');
        const cardDetailIcon1 = document.createElement('img');
        const cardDetailTitle1 = document.createElement('span');
        const cardDetailData1 = document.createElement('span');

        const cardDetailTitleContainer2 = document.createElement('div');
        const cardTitleIcon2 = document.createElement('div');
        const cardDetailIcon2 = document.createElement('img');
        const cardDetailTitle2 = document.createElement('span');
        const cardDetailData2 = document.createElement('span');

        cardContainer.id = `cardContainer${i}`;
        cardContainer.className = 'card-container';
        card.className = 'card';
        cardHeader.className = 'card-header';
        cardIcon.classList.add('card-icon', 'grid-center');
        personName.classList.add('person-name', 'grid-center');

        cardSubHeading.classList.add('card-sub-heading');
        genderContainer.classList.add('gender-container', 'grid-center');
        species.classList.add('species', 'grid-center');
        genderIcon.className = 'gender-icon';
        birthYear.className = 'birth-year';

        cardDetailContainer.className = 'card-detail-container';

        cardDetailTitleContainer.classList.add('card-detail-title-container', 'grid-center');
        cardTitleIcon.classList.add('card-title-icon');
        cardDetailIcon.classList.add('card-detail-icon');
        cardDetailTitle.className = 'card-detail-title';
        cardDetailData.classList.add('card-detail-data', 'grid-center');

        cardDetailTitleContainer1.classList.add('card-detail-title-container', 'grid-center');
        cardTitleIcon1.classList.add('card-title-icon');
        cardDetailIcon1.classList.add('card-detail-icon');
        cardDetailTitle1.className = 'card-detail-title';
        cardDetailData1.classList.add('card-detail-data', 'grid-center');

        cardDetailTitleContainer2.classList.add('card-detail-title-container', 'grid-center');
        cardTitleIcon2.classList.add('card-title-icon');
        cardDetailIcon2.classList.add('card-detail-icon');
        cardDetailTitle2.className = 'card-detail-title';
        cardDetailData2.classList.add('card-detail-data', 'grid-center');

        cardIcon.src = '/assets/Card.svg';

        if (character.gender === 'male') {
            genderIcon.src = '/assets/Gender-Male.svg';
        } else if (character.gender === 'female') {
            genderIcon.src = '/assets/Gender-Female.svg';
        } else {    
            genderIcon.src = '/assets/Deck.svg';
        }

        species.textContent = characterSpecies;
        birthYear.textContent = character.birth_year;
        personName.textContent = character.name;

        cardDetailIcon.src = '/assets/Homeworld.svg';
        cardDetailIcon1.src = '/assets/Vehicle.svg';
        cardDetailIcon2.src = '/assets/Starship.svg';

        cardDetailTitle.textContent = 'HOMEWORLD';
        cardDetailTitle1.textContent = 'VEHICLES';
        cardDetailTitle2.textContent = 'STARSHIPS';

        cardDetailData.textContent = characterHomeworld;
        cardDetailData1.textContent = character.vehicles.length;
        cardDetailData2.textContent = character.starships.length;

        //card & card header
        section.appendChild(cardContainer);
        cardContainer.appendChild(card);
        card.appendChild(cardHeader);
        cardHeader.appendChild(cardIcon);
        cardHeader.appendChild(personName);

        //card subheading
        card.appendChild(cardSubHeading);
        cardSubHeading.appendChild(genderContainer);
        genderContainer.appendChild(genderIcon);
        genderContainer.appendChild(birthYear);
        cardSubHeading.appendChild(species);

        //card detail
        card.appendChild(cardDetailContainer);

        cardDetailContainer.appendChild(cardDetailTitleContainer);
        cardDetailTitleContainer.appendChild(cardTitleIcon);
        cardTitleIcon.appendChild(cardDetailIcon);
        cardTitleIcon.appendChild(cardDetailTitle);
        cardDetailTitleContainer.appendChild(cardDetailData);

        cardDetailContainer.appendChild(cardDetailTitleContainer1);
        cardDetailTitleContainer1.appendChild(cardTitleIcon1);
        cardTitleIcon1.appendChild(cardDetailIcon1);
        cardTitleIcon1.appendChild(cardDetailTitle1);
        cardDetailTitleContainer1.appendChild(cardDetailData1);

        cardDetailContainer.appendChild(cardDetailTitleContainer2);
        cardDetailTitleContainer2.appendChild(cardTitleIcon2);
        cardTitleIcon2.appendChild(cardDetailIcon2);
        cardTitleIcon2.appendChild(cardDetailTitle2);
        cardDetailTitleContainer2.appendChild(cardDetailData2);

        cardContainer.addEventListener('click', function () {
            cardDetailTitleContainer1.parentNode.removeChild(cardDetailTitleContainer1);
            cardDetailTitleContainer2.parentNode.removeChild(cardDetailTitleContainer2);
            
            card.style.width = 300;
            cardContainer.style.width = 300;
            cardContainer.style.height = 450;
            card.style.height = 450;

            getTransportArray(character.vehicles).forEach((data, index) => {
                Promise.resolve(data).then(res => {
                    let elementObject = rowBuilder(index + 3) //so that things wont overlap
                    elementClassMaker(index + 3, elementObject)
                    canvasPainter(elementObject, res, "VEHICLE")
                })
            });
            getTransportArray(character.starships).forEach((data, index) => {
                Promise.resolve(data).then(res => {
                    let elementObject = rowBuilder(index+9)
                    elementClassMaker(index + 9, elementObject)
                    canvasPainter(elementObject, res, "STARSHIP")
                })
            });
            
            cardContainer.addEventListener('click', function() {
                location.reload();
            }, {once: true});

        }, {once: true}); 
    }
}


//code qual - test, comments (not every line; todo comments)
//test frameworks - jest
//communication - easy to talk with; flat hierarchy (easy communication with other emp)