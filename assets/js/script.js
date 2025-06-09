// Smooth Scroll to top button
   const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    // Fallback for older browsers
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0); // Instant scroll for older browsers
    }
  });



// Toggle mobile navbar
document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});

// Hero text animation
const textElement = document.getElementById("typing-text");
const text = "PCIU Business Club";
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    textElement.textContent = text.slice(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }
  } else {
    textElement.textContent = text.slice(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }
  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// Gallery Cards (Dynamic)
const galleryData = [
  {
    title: "Business Fair 2024",
    image: "gallery1.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "Workshop on Entrepreneurship",
    image: "gallery2.jpg",
    link: "event-details/entrepreneurship-workshop.html"
  },
  {
    title: "Industry Visit to BSRM",
    image: "gallery3.jpg",
    link: "event-details/bsrm-visit.html"
  }
];

const galleryContainer = document.getElementById("gallery-container");
galleryData.forEach(event => {
  const card = document.createElement("div");
  card.className = "gallery-card";
  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}" />
    <h3>${event.title}</h3>
    <button onclick="location.href='${event.link}'">View Details</button>
  `;
  galleryContainer.appendChild(card);
});
