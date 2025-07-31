const books = {
  fiction: ["1984", "The Great Gatsby", "To Kill a Mockingbird"],
  science: ["A Brief History of Time", "Sapiens", "The Selfish Gene"],
};

function recommendBooks() {
  const input = document.getElementById("genreInput").value.toLowerCase();
  const outputList = document.getElementById("output");

  // Clear previous output
  outputList.innerHTML = "";

  const recommendations = books[input];

  if (recommendations) {
    recommendations.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = book;
      outputList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No recommendations found";
    outputList.appendChild(li);
  }
}
