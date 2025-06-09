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

// Committee Section (Dynamic)
const committees = [
  {
    title: "Executive Committee",
    members: [
      { name: "Saif Rahman", role: "President", batch: "BBA 21st" },
      { name: "Tania Akter", role: "Vice President", batch: "BBA 22nd" },
      { name: "Rakib Hasan", role: "General Secretary", batch: "BBA 21st" },
      { name: "Nusrat Jahan", role: "Treasurer", batch: "BBA 23rd" },
      { name: "Tanvir Islam", role: "Coordinator", batch: "BBA 22nd" }
    ]
  },
  {
    title: "Event Management Committee",
    members: [
      { name: "Aminul Islam", role: "Head", batch: "BBA 23rd" },
      { name: "Shorna Akter", role: "Member", batch: "BBA 24th" },
      { name: "Sajib Hossain", role: "Member", batch: "BBA 24th" },
      { name: "Puja Das", role: "Member", batch: "BBA 22nd" },
      { name: "Sajid Ahmed", role: "Member", batch: "BBA 23rd" }
    ]
  }
];

const committeeContainer = document.getElementById("committee-container");
committees.forEach(committee => {
  const box = document.createElement("div");
  box.className = "committee-box";
  box.innerHTML = `<h3>${committee.title}</h3>`;

  const table = document.createElement("table");
  table.innerHTML = `
    <tr><th>Name</th><th>Designation</th><th>Batch</th></tr>
    ${committee.members.map(member => `
      <tr>
        <td>${member.name}</td>
        <td>${member.role}</td>
        <td>${member.batch}</td>
      </tr>
    `).join('')}
  `;

  box.appendChild(table);
  committeeContainer.appendChild(box);
});
