const cards = [
    {
        name: "Custom video player",
        link: "./custom-video-player/index.html"
    },
    {
        name: "Highlight Search",
        link: "./highlight-search/index.html"
    },
    {
        name: "Digital And Analog Clock",
        link: "./digital-and-analog-clock/index.html"
    },
    {
        name: "Changing css variables",
        link: "./changing-css-variables/index.html"
    },
    {
        name: "Drum kit",
        link: "./drum-kit/index.html"
    },
]

const cardsContainer = document.querySelector(".cards-container");

function createCard(cardData) {
    const card = document.createElement("div");
    card.className = "card";

    const heading = document.createElement("h2");
    heading.textContent = cardData.name;

    const link = document.createElement("a");
    link.href = cardData.link;
    link.textContent = "View";

    card.append(heading, link);

    return card;
}

function showCards() {
    for(let i = 0; i < cards.length; i++) {
        const currentCardsData = cards[i];

        cardsContainer.appendChild(createCard(currentCardsData));
    }
}

showCards();