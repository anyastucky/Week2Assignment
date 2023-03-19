import "./styles.css";

export default function App() {
  const arr = new Array(101).fill(0).map((d, i) => {
    return i;
  });

  const today = new Date();
  const filteredArr = arr.filter((d, i) => {
    return i % 2 === 0;
  });

  const dateArr = filteredArr.map((d, i) => {
    const diff = i * 2;
    const newDate = new Date(today - diff * 24 * 60 * 60 * 1000);
    const randomVal = Math.floor(Math.random() * 51);
    return {
      date: newDate.toLocaleDateString(),
      val: randomVal
    };
  });

  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots-container");

  const middleY = window.innerHeight / 2;
  const dotSize = 10;
  const dotSpacing = 3;

  dateArr.forEach((d, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.left = `${i * (dotSize + dotSpacing)}px`;
    dot.style.top = `${middleY - d.val - dotSize / 2}px`;
    dotsContainer.appendChild(dot);
  });

  document.body.appendChild(dotsContainer);
}
