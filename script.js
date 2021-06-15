let baseUrl = 'https://swapi.dev/api/';
let peopleUrl = baseUrl + 'people/';

const section = document.querySelector('.people-details');

fetch(peopleUrl).then(function(result) {
    return result.json();
}).then(function(json) {
    showResults(json);
    //console.log(json);
});

function showResults(json) {
    const res = json.results;

    


    for (let i = 0; i < res.length; i++) {
        const cardContainer = document.createElement('div');
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');

        const cardIcon = document.createElement('img');
        const personName = document.createElement('span');

        const cardSubHeading = document.createElement('div');
        const genderContainer = document.createElement('div');
        const genderIcon = document.createElement('img');
        const gender = document.createElement('span');
        const species = document.createElement('span');

        const cardDetailContainer = document.createElement('div');
        const cardDetailTitleContainer = document.createElement('div');
        const cardDetailIcon = document.createElement('img');
        const cardDetailTitle = document.createElement('span');
        const cardDetailData = document.createElement('span');

        cardContainer.className = 'card-container';
        card.className = 'card';
        cardHeader.className = 'card-header';
        cardIcon.className = 'card-icon';
        personName.className = 'person-name';

        cardSubHeading.className = 'card-sub-heading';
        genderContainer.className = 'gender-container';
        genderIcon.className = 'gender-icon';
        gender.className = 'gender';
        species.className = 'species';

        cardDetailContainer.className = 'card-detail-container';
        cardDetailTitleContainer.className = 'card-detail-title-container';
        cardDetailIcon.className = 'card-detail-icon';
        cardDetailTitle.className = 'card-detail-title';
        cardDetailData.className = 'card-detail-data';
        
        cardIcon.src = '/assets/Card.svg';
        
        personName.textContent = res[i].name;
        
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
        genderContainer.appendChild(gender);
        cardSubHeading.appendChild(species);

        //card detail
        card.appendChild(cardDetailContainer);
        cardDetailContainer.appendChild(cardDetailTitleContainer);
        cardDetailTitleContainer.appendChild(cardDetailIcon);
        cardDetailTitleContainer.appendChild(cardDetailTitle);
        cardDetailContainer.appendChild(cardDetailData);
 
    }
}
