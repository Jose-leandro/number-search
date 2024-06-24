let uniquesId = [];
let idCounter = 0;

const createUniqueIdGenerator = () => {

    idCounter += 1;
    return idCounter;
};

function wichElementNow(numbesItems) {
    let idCounter = 0;

    for (let index = 0; index < numbesItems.length; index++) {
        idCounter += 1;
    }

    return idCounter
}

function ShowNumbers() {
    
    const idSectionNumbers = document.getElementById("items");
    const idSectionInput = document.getElementById("input").value;
    wichElementNow(idSectionInput)

    for (let index = 0; index < idSectionInput; index++) {

        const newElementDiv = document.createElement('div');
        newElementDiv.style.color = '#AFABAB';
        newElementDiv.style.border = "2px solid #8F8F8F";
        newElementDiv.style.backgroundColor = "#AFABAB"
        newElementDiv.style.display = 'flex'
        newElementDiv.style.alignItems = 'center'

        const wichId = createUniqueIdGenerator()
        newElementDiv.id = wichId
        newElementDiv.classList = "main__items--scroll-snap"

        idSectionNumbers.appendChild(newElementDiv);
        uniquesId.push(wichId)
    }

    uniquesId.forEach((elementId) => {
        const newElementH1 = document.createElement('h1');

        newElementH1.innerText = elementId
        newElementH1.style.backgroundColor = '#D0CECE';
        newElementH1.style.display = 'flex'
        newElementH1.style.justifyContent = 'center';
        newElementH1.style.alignItems = 'center'
        newElementH1.style.marginLeft = "1em"
        newElementH1.style.borderRadius = "50%";
        newElementH1.style.fontSize = "18px";
        newElementH1.style.color = "#000"
        newElementH1.classList = "main__items-h"

        const elementIds = document.getElementById(elementId);
        if (elementIds) {
            elementIds.appendChild(newElementH1);
        } 
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const idSectionInput = document.getElementById("input");

    if (idSectionInput) {
        idSectionInput.addEventListener('input', function () {
            
            idCounter = 0;
            uniquesId.forEach(element => {
                const elementH1 = document.getElementById(element);
                elementH1.remove()
            });

            uniquesId.length = 0
            if (input.value > 0) {
                
                ShowNumbers()
            }
        });
    } 
})
