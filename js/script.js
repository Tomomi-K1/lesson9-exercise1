const currentlyReading = {
  title: "The Fifth Season",
  author: "N.K. Jemisin",
  series: "Broken Earth Trilogy",
  pages: 512,
  publicationDate: "August 4th, 2015",
  currentChapter: 8,
  totalChapters: 23
};

//using dot notation
console.log(currentlyReading.title);
//using bracket notation
console.log(currentlyReading["pages"]);
//adding new property to object
currentlyReading.awards = "Hugo Award for Best Novel(2016)";

console.log(currentlyReading);

//adding new property (function) to object
currentlyReading.updateChapter = function (chapterNum) {
  this.currentChapter = chapterNum;
};

//editing the property value
currentlyReading.updateChapter(11);
console.log(currentlyReading.currentChapter);