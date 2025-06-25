// Sample committee data
const committeeMembers = [
 			// { name: "Sheikh Mohammad Imran", role: "Club Coordinator", batch: "" },
 			// { name: "Atikur Rahman", role: "Club Coordinator", batch: "" },
 			// { name: "Ripan Chatterjee", role: "Club Coordinator", batch: "" },
 			// { name: "Rifat Nowshera", role: "Club Coordinator", batch: "" },
 			// { name: "Abrar Shariar Akib", role: "Founding Member", batch: "" },
 			// { name: "Ashraful Karim Chowdhury", role: "Founding Member", batch: "" },
 			// { name: "Md Sahadat Hossen", role: "Founding Member", batch: "" },
 			// { name: "Md Shahab Uddin", role: "Founding Member", batch: "" },
 			// { name: "Rebeka Khanam", role: "Founding Member", batch: "" },
 			// { name: "Md Shahin Alom", role: "Founding Member", batch: "" },
 			{ name: "Tanvir Morsalin", role: "President", batch: "BBA 15th" },
 			{ name: "Md Amanat Ullah Rokon", role: "Vice President", batch: "BBA" },
 			{ name: "Rashed Ahmed Mon", role: "General Secretary", batch: "BBA" },
 			{ name: "Syed Osiuddin Rabbany Iyad", role: "Joint Secretary", batch: "BBA" },
 			{ name: "Md Edris Uddin", role: "Organizing Secretary", batch: "BBA" },
 			{ name: "Nazrul Islam", role: "Finance Secretary", batch: "BBA" },
 			{ name: "Tahmina Jahan", role: "Branding & Promotion Secretary", batch: "BBA" },
 			{ name: "Istiyak Ahmed Akib", role: "Creative Secretary", batch: "BBA" },
 			{ name: "Jannatul Mawa", role: "Human Resources Secretary", batch: "BBA" },
 			{ name: "Hasnat Sikder", role: "Assistant Branding & Promotion Secretary", batch: "BBA" },
 			{ name: "Umme Mashraba Joynab", role: "Press & Media Secretary", batch: "BBA" },
 			{ name: "Rajya Sultana", role: "Communication Secretary", batch: "BBA" },
 			{ name: "Muntakim Mahbub Chowdhury", role: "Research & Development Secretary", batch: "BBA" },
 			{ name: "Tasmia Rahman", role: "Informatioin & Technology Secretary", batch: "BBA" },
 			{ name: "Laily Chowdhury Tumpa", role: "Assistant Information & Technology Secretary", batch: "BBA" },
 			{ name: "Afifa Sultana Emu", role: "Social Welfare Secretary", batch: "BBA" },
 			{ name: "Hafizur Rahman", role: "Assistant Social Welfare Secretary", batch: "BBA" },

];

// Dynamically load table rows
const tbody = document.querySelector("#committee-table tbody");

committeeMembers.forEach((member, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td> <!-- Auto SL No -->
    <td>${member.name}</td>
    <td>${member.role}</td>
    <td>${member.batch}</td>
  `;
  tbody.appendChild(row);
});
