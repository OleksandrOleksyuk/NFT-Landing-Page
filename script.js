"use strict";

// Function
const elementCostructor = function (tag, classe, parent, text) {
  let element = document.createElement(tag);
  classe ? (element.className = classe) : null;
  if (text) {
    let elementText = document.createTextNode(text);
    element.appendChild(elementText);
  }
  return parent.appendChild(element);
};
const figureConstructor = function (src, alt, parent) {
  const element = document.createElement("figure");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  element.appendChild(img);
  return parent.appendChild(element);
};
const obj = {
  navbar: {
    logo: "Sapphire",
    link: ["Explore", "MArketplace", "Artist", "Collection"],
  },
  article: {
    title: "Discover, Sell & Collect Rare NFTs",
    subtitle:
      "Digital marketplace for crypto collections and non-fungible token (NFTs)",
    analyst: [
      {
        h2: "35k+",
        p: "Artwork",
      },
      {
        h2: "15k+",
        p: "Auctions",
      },
      {
        h2: "15k+",
        p: "Artists",
      },
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
    },
  },
};
// HEADER -- NAVBAR
const header = elementCostructor("header", "", document.body);
const nav = elementCostructor("nav", "navbar", header, "");
const navLogo = elementCostructor("div", "div__logo", nav, "");
elementCostructor("p", "", navLogo, obj.navbar.logo);
const divExplore = elementCostructor("div", "navbar__explore", nav, "");
const aExplore = elementCostructor("a", "", divExplore, "");
aExplore.href = "#";
elementCostructor("p", "p-bold", aExplore, "Explore");
for (let i = 1; i < obj.navbar.link.length; i++) {
  const a = elementCostructor("a", "", divExplore, "");
  elementCostructor("p", "", a, obj.navbar.link[i]);
}
const divSearchbar = elementCostructor("div", "navbar__searchbar", nav, "");
const div1 = elementCostructor("div", "", divSearchbar, "");
const labelSearchbar = elementCostructor("label", "", div1, "");
labelSearchbar.setAttribute("for", "nft-searchbar");
const inputSearchbar = elementCostructor("input", "", div1, "");
inputSearchbar.setAttribute("type", "text");
inputSearchbar.setAttribute("name", "nft-searchbar");
inputSearchbar.id = "nft-searchbar";
inputSearchbar.setAttribute("placeholder", "Search");
elementCostructor("span", "material-icons", divSearchbar, "search");
const navbarButton = elementCostructor("div", "navbar__button", nav, "");
elementCostructor("button", "button--gradient", navbarButton, "Sign In");

// HEADER -- ARTICLE
const article = elementCostructor("article", "", header, "");
// HEADER -- SECTION TEXT
const sectionText = elementCostructor("section", "article__text", article, "");
const divTextTop = elementCostructor(
  "div",
  "article__text--top",
  sectionText,
  ""
);
elementCostructor("h1", "", divTextTop, obj.article.title);
elementCostructor("p", "", divTextTop, obj.article.subtitle);
elementCostructor("button", "button--gradient", divTextTop, "Discover Now");
const divTextBottom = elementCostructor(
  "div",
  "article__text--bottom",
  sectionText,
  ""
);
for (let i = 0; i < obj.article.analyst.length; i++) {
  const element = elementCostructor("div", "", divTextBottom, "");
  elementCostructor("h2", "", element, obj.article.analyst[i].h2);
  elementCostructor("p", "", element, obj.article.analyst[i].p);
}
// HEADER -- CARD
const articleCard = elementCostructor("section", "section__card", article, "");
const imgCard = figureConstructor(
  obj.article.card.src,
  obj.article.card.alt,
  articleCard
);
const imgCaption = elementCostructor("figcaption", "", imgCard, "");
const div2 = elementCostructor("div", "", imgCaption, "");
elementCostructor("h3", "", div2, obj.article.card.cardName);
const div3 = elementCostructor("div", "container__eclipse", imgCaption, "");
for (let i = 0; i < obj.article.card.circle.length; i++) {
  figureConstructor(
    obj.article.card.circle[i].src,
    obj.article.card.circle[i].alt,
    div3
  );
}
const descriptionCard = elementCostructor(
  "div",
  "section__car--current",
  articleCard,
  ""
);
for (let i = 0; i < obj.article.card.description.length; i++) {
  const element = elementCostructor("div", "", descriptionCard, "");
  elementCostructor("p", "", element, obj.article.card.description[i].name);

  elementCostructor("p", "", element, obj.article.card.description[i].price);

  obj.article.card.description[i];
}
