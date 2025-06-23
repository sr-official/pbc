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
    title: "Iftar Mahfil 2018",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/iftar-mahfil-2018.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "Iftar Mahfil 2019",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/iftar-mahfil-2019.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "Business Festa 2019",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/business-festa-2019.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "The Grand Get Together 2018",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/grand-get-together.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "PBC 1st Year Token of Love",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/first-year-token-of-love.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "PBC Project Usnotha 2020",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/project-usnotha.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "PBC Soldiers Requirement-1",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/soldiers-requirement-1.jpg",
    link: "event-details/business-fair-2024.html"
  },
  {
    title: "PBC Soldiers Requirement-2",
    date: "March 15, 2024",
    description: "A showcase of student startups and innovations.",
    image: "assets/images/gallery/soldiers-requirement-2.jpg",
    link: "event-details/business-fair-2024.html"
  },

];

const galleryContainer = document.getElementById("gallery-container");

galleryData.forEach(event => {
  const card = document.createElement("div");
  card.className = "gallery-card";
  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}" />
    <div class="card-content">
      <h3>${event.title}</h3>
  
  

    </div>
  `;
  galleryContainer.appendChild(card);
});

// <p class="event-date">${event.date}</p>
// event date can be added after the title
// <p class="event-description">${event.description}</p>
// <button onclick="location.href='${event.link}'">View Details</button>
// view details button can be added after the description