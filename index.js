const setOfWords = [
  "A paragraph is a component of fictional prose and non-fiction writings.",
  "The purpose of a paragraph is to express a speaker’s thoughts on a particular point in a clear way that is unique and specific to that paragraph.",
  "In other words, paragraphs shouldn’t be mixing thoughts or ideas. When a new idea is introduced, generally, a writer will introduce a new paragraph.",
  "A topic sentence is the first sentence of the body paragraph.",
  "Simply put, the topic sentence introduces the topic of the paragraph.",
  "The supporting sentences of a paragraph are the sentences between the topic sentence and the concluding sentence.",
  "The concluding sentence is the last sentence in the paragraph.",
  "Good paragraphs have transitions between preceding and proceeding paragraphs.",
  "One paragraph should logically flow to the next. ",
];
const msg = document.getElementById("msg");
const typeWords = document.getElementById("typeWords");
const btn = document.getElementById("btn");
let startTime, endTime;

const start = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  // console.log(date.getTime());
  startTime = date.getTime();
  btn.innerText = "Done";
};

const end = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.floor((wordCount / totalTime) * 60);
  let finalMsg = "You typed total at " + speed + " words per minutes. ";
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
  document.getElementById("typeWords").value = "";
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str1.split(" ");
  let cnt = 0;

  words1.forEach((item, index) => {
    if (item == words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;
  return (
    cnt +
    " correct out of " +
    words1.length +
    " words and the total number of error are " +
    errorWords +
    "."
  );
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};

btn.addEventListener("click", () => {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    start();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    end();
  }
});
