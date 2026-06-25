const brandRail = document.getElementById("brandRail");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
  brandRail.classList.toggle("open");
});

document.querySelectorAll(".drawer-menu a").forEach(link => {
  link.addEventListener("click", () => {
    brandRail.classList.remove("open");
  });
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

const visualSets = document.querySelectorAll(".visual-set");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));
    visualSets.forEach(visual => visual.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(target).classList.add("active");

    const matchingVisual = document.querySelector(`.visual-set[data-visual="${target}"]`);
    if (matchingVisual) {
      matchingVisual.classList.add("active");
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});