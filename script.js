"use strict";
const elementConstructor = function ({ tag, attribute, parent, text }) {
  let element;
  tag ? (element = document.createElement(tag)) : null;
  attribute ? (element.className = attribute) : null;
  if (text) {
    let elementText = document.createTextNode(text);
    element.appendChild(elementText);
  }
  parent ? parent.appendChild(element) : null;
  return element;
};
const figureConstructor = function (src, alt, parent) {
  const element = document.createElement("figure");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  element.appendChild(img);
  return parent.appendChild(element);
};
const navbarObj = {
  logo: "Sapphire",
  link: ["Explore", "MArketplace", "Artist", "Collection"],
};
const articleObj = {
  title: "Discover, Sell & Collect Rare NFTs",
  subtitle:
    "Digital marketplace for crypto collections and non-fungible token (NFTs)",
  analyst: [
    { h2: "35k+", p: "Artwork" },
    { h2: "15k+", p: "Auctions" },
    { h2: "15k+", p: "Artists" },
  ],
  card: {
    src: "/assets/bored-ape-nft-logo-0336141711-seeklogo.com.png",
    alt: "NFT",
    cardName: "Monkey Apes",
    circle: [
      { src: "/assets/eclipse-1.png", alt: "eclipse-1" },
      { src: "/assets/eclipse-2.png", alt: "eclipse-2" },
      { src: "/assets/eclipse-3.png", alt: "eclipse-3" },
      { src: "/assets/eclipse-4.png", alt: "eclipse-4" },
      { src: "/assets/eclipse-5.png", alt: "eclipse-5" },
    ],
    description: [
      { name: "Current Bid", price: "0.45ETH" },
      { name: "Current Bid", price: "0.45ETH" },
      { name: "Ending In", price: "10h 43m 26s" },
    ],
    sponsor: [
      { src: "/assets/coinbase.png", alt: "coinbase logo" },
      { src: "/assets/trezor.png", alt: "trezor logo" },
      { src: "/assets/exodus.png", alt: "exodus logo" },
      { src: "/assets/bitgo.png", alt: "bitgo logo" },
    ],
  },
};
const mainObj = {
  description: "NFT Marketplace",
  h4: "Super Hots Drops",
  button: [
    "Music",
    "Art",
    "Sport",
    "Photography",
    "Virtual Reality",
    "Video",
    "More",
  ],
  marketplace: [
    {
      src: "/assets/marketplace-1.png",
      alt: "marketplace-1",
      nameCard: {
        h3: "Crazy Apes",
        p: { p: "Created by", span: "Oleksandr" },
        src: "/assets/1.PNG",
        alt: "assets-1",
      },
      description: [
        { name: "Current Bid", price: "0.45ETH" },
        { name: "Ending In", price: "10h 43m 26s" },
      ],
    },
    {
      src: "/assets/marketplace-2.png",
      alt: "marketplace-2",
      nameCard: {
        h3: "Crazy Apes",
        p: { p: "Created by", span: "Oleksandr" },
        src: "/assets/1.PNG",
        alt: "assets-1",
      },
      description: [
        { name: "Current Bid", price: "0.45ETH" },
        { name: "Ending In", price: "10h 43m 26s" },
      ],
    },
    {
      src: "/assets/marketplace-3.png",
      alt: "marketplace-3",
      nameCard: {
        h3: "Crazy Apes",
        p: { p: "Created by", span: "Oleksandr" },
        src: "/assets/1.PNG",
        alt: "assets-1",
      },
      description: [
        { name: "Current Bid", price: "0.45ETH" },
        { name: "Ending In", price: "10h 43m 26s" },
      ],
    },
    {
      src: "/assets/marketplace-4.png",
      alt: "marketplace-4",
      nameCard: {
        h3: "Crazy Apes",
        p: { p: "Created by", span: "Oleksandr" },
        src: "/assets/1.PNG",
        alt: "assets-1",
      },
      description: [
        { name: "Current Bid", price: "0.45ETH" },
        { name: "Ending In", price: "10h 43m 26s" },
      ],
    },
    {
      src: "/assets/marketplace-5.png",
      alt: "marketplace-5",
      nameCard: {
        h3: "Crazy Apes",
        p: { p: "Created by", span: "Oleksandr" },
        src: "/assets/1.PNG",
        alt: "assets-1",
      },
      description: [
        { name: "Current Bid", price: "0.45ETH" },
        { name: "Ending In", price: "10h 43m 26s" },
      ],
    },
    {
      src: "/assets/marketplace-6.png",
      alt: "marketplace-6",
      nameCard: {
        h3: "Crazy Apes",
        p: { p: "Created by", span: "Oleksandr" },
        src: "/assets/1.PNG",
        alt: "assets-1",
      },
      description: [
        { name: "Current Bid", price: "0.45ETH" },
        { name: "Ending In", price: "10h 43m 26s" },
      ],
    },
  ],
};

// HEADER -- NAVBAR
const header = elementConstructor({ tag: "header", parent: document.body });
const nav = elementConstructor({
  tag: "nav",
  attribute: "navbar",
  parent: header,
});
const navLogo = elementConstructor({
  tag: "div",
  attribute: "div__logo",
  parent: nav,
});
elementConstructor({ tag: "p", parent: navLogo, text: navbarObj.logo });
const divExplore = elementConstructor({
  tag: "div",
  attribute: "navbar__explore",
  parent: nav,
});
const aExplore = elementConstructor({ tag: "a", parent: divExplore });
aExplore.href = "#";
elementConstructor({
  tag: "p",
  attribute: "p-bold",
  parent: aExplore,
  text: "Explore",
});
for (let i = 1; i < navbarObj.link.length; i++) {
  const a = elementConstructor({ tag: "a", parent: divExplore });
  a.href = "#";
  elementConstructor({ tag: "p", parent: a, text: navbarObj.link[i] });
}
const divSearchbar = elementConstructor({
  tag: "div",
  attribute: "navbar__searchbar",
  parent: nav,
});
const div1 = elementConstructor({ tag: "div", parent: divSearchbar });
const labelSearchbar = elementConstructor({ tag: "label", parent: div1 });
labelSearchbar.setAttribute("for", "nft-searchbar");
const inputSearchbar = elementConstructor({ tag: "input", parent: div1 });
inputSearchbar.setAttribute("type", "text");
inputSearchbar.setAttribute("name", "nft-searchbar");
inputSearchbar.id = "nft-searchbar";
inputSearchbar.setAttribute("placeholder", "Search");
elementConstructor({
  tag: "span",
  attribute: "material-icons",
  parent: divSearchbar,
  text: "search",
});
const navbarButton = elementConstructor({
  tag: "div",
  attribute: "navbar__button",
  parent: nav,
});
elementConstructor({
  tag: "button",
  attribute: "button--gradient",
  parent: navbarButton,
  text: "Sign In",
});

// HEADER -- ARTICLE
const article = elementConstructor({ tag: "article", parent: header });
// HEADER -- SECTION TEXT
const sectionText = elementConstructor({
  tag: "section",
  attribute: "article__text",
  parent: article,
});
const divTextTop = elementConstructor({
  tag: "div",
  attribute: "article__text--top",
  parent: sectionText,
});
elementConstructor({ tag: "h1", parent: divTextTop, text: articleObj.title });
elementConstructor({ tag: "p", parent: divTextTop, text: articleObj.subtitle });
elementConstructor({
  tag: "button",
  attribute: "button--gradient",
  parent: divTextTop,
  text: "Discover Now",
});
const divTextBottom = elementConstructor({
  tag: "div",
  attribute: "article__text--bottom",
  parent: sectionText,
});
for (let i = 0; i < articleObj.analyst.length; i++) {
  const element = elementConstructor({ tag: "div", parent: divTextBottom });
  elementConstructor({
    tag: "h2",
    parent: element,
    text: articleObj.analyst[i].h2,
  });
  elementConstructor({
    tag: "p",
    parent: element,
    text: articleObj.analyst[i].p,
  });
}
// HEADER -- CARD
const articleCard = elementConstructor({
  tag: "section",
  attribute: "section__card",
  parent: article,
});
const imgCard = figureConstructor(
  articleObj.card.src,
  articleObj.card.alt,
  articleCard
);
const imgCaption = elementConstructor({ tag: "figcaption", parent: imgCard });
const div2 = elementConstructor({ tag: "div", parent: imgCaption });
elementConstructor({ tag: "h3", parent: div2, text: articleObj.card.cardName });
const div3 = elementConstructor({
  tag: "div",
  attribute: "container__eclipse",
  parent: imgCaption,
});
for (let i = 0; i < articleObj.card.circle.length; i++) {
  figureConstructor(
    articleObj.card.circle[i].src,
    articleObj.card.circle[i].alt,
    div3
  );
}
const descriptionCard = elementConstructor({
  tag: "div",
  attribute: "section__car--current",
  parent: articleCard,
});
for (let i = 0; i < articleObj.card.description.length; i++) {
  const element = elementConstructor({ tag: "div", parent: descriptionCard });
  elementConstructor({
    tag: "p",
    parent: element,
    text: articleObj.card.description[i].name,
  });
  elementConstructor({
    tag: "p",
    parent: element,
    text: articleObj.card.description[i].price,
  });
}
// HEADER -- SPONSOR
const sectionSponsor = elementConstructor({
  tag: "section",
  attribute: "sponsorship__logo",
  parent: header,
});
for (let i = 0; i < articleObj.card.sponsor.length; i++) {
  figureConstructor(
    articleObj.card.sponsor[i].src,
    articleObj.card.sponsor[i].alt,
    sectionSponsor
  );
}

// Main
const main = elementConstructor({ tag: "main", parent: document.body });
elementConstructor({
  tag: "p",
  attribute: "p-gradient",
  parent: main,
  text: mainObj.description,
});
elementConstructor({ tag: "p", parent: main, text: mainObj.h4 });
const mainButton = elementConstructor({
  tag: "div",
  attribute: "main__button",
  parent: main,
});
for (let i = 0; i < mainObj.button.length; i++) {
  elementConstructor({
    tag: "button",
    parent: mainButton,
    text: mainObj.button[i],
  });
}
const mainCard = elementConstructor({
  tag: "div",
  attribute: "main__card",
  parent: main,
});
// repeat
for (let index = 0; index < mainObj.marketplace.length; index++) {
  const mainCardMarketplace = elementConstructor({
    tag: "div",
    attribute: "main__card--marketplace",
    parent: mainCard,
  });
  const imgMarketplace = figureConstructor(
    mainObj.marketplace[index].src,
    mainObj.marketplace[index].alt,
    mainCardMarketplace
  );
  const marketplaceCaption = elementConstructor({
    tag: "figcaption",
    parent: imgMarketplace,
  });
  const div4 = elementConstructor({ tag: "div", parent: marketplaceCaption });
  elementConstructor({
    tag: "h3",
    parent: div4,
    text: mainObj.marketplace[index].nameCard.h3,
  });
  const pMarketplace = elementConstructor({
    tag: "p",
    parent: div4,
    text: mainObj.marketplace[index].nameCard.p.p,
  });
  elementConstructor({
    tag: "span",
    parent: pMarketplace,
    text: mainObj.marketplace[index].nameCard.p.span,
  });
  const creatorLogoMarketplace = figureConstructor(
    mainObj.marketplace[index].nameCard.src,
    mainObj.marketplace[index].nameCard.src,
    marketplaceCaption
  );
  creatorLogoMarketplace.className = "logo-creator";
  const element = elementConstructor({
    tag: "div",
    parent: mainCardMarketplace,
  });
  for (let i = 0; i < mainObj.marketplace[index].description.length; i++) {
    const xxx = elementConstructor({ tag: "div", parent: element });
    elementConstructor({
      tag: "p",
      parent: xxx,
      text: articleObj.card.description[i].name,
    });
    elementConstructor({
      tag: "p",
      parent: xxx,
      text: articleObj.card.description[i].price,
    });
  }
}
