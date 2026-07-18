// All photos are sourced from Unsplash (unsplash.com) and used under the
// Unsplash License — free for commercial use, no attribution required.
// https://unsplash.com/license
//
// Swap any of these for your own product photography at any time by
// replacing the URL (or pointing it at a local file in /public/images/).

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  // Cluster of fresh oyster mushrooms — hero, main image
  heroMain: u("photo-1770884844724-ac9e36b599e9"),
  // Close-up of king oyster mushrooms — hero, floating accent image
  heroAccent: u("photo-1760108273033-0d789ef53d70", 800),
  // Oyster mushrooms growing on a log — About page / farming story
  farming: u("photo-1652359804247-18cbe25ebdf1"),
  // Mushroom growing outdoors on wood — Training / workshop page
  training: u("photo-1663181431776-29a9d29edcd9"),
  // Bunch of fresh mushrooms in a bowl — Featured Products
  product: u("photo-1472024600210-31360ee97719"),
};