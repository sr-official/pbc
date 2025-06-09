// Sample committee data
const committeeMembers = [
 			{ name: "Sheikh Mohammad Imran", role: "Club Coordinator", batch: "" },
 			{ name: "Atikur Rahman", role: "Club Coordinator", batch: "" },
 			{ name: "Ripan Chatterjee", role: "Club Coordinator", batch: "" },
 			{ name: "Rifat Nowshera", role: "Club Coordinator", batch: "" },
 			{ name: "Abrar Shariar Akib", role: "Founding Member", batch: "" },
 			{ name: "Ashraful Karim Chowdhury", role: "Founding Member", batch: "" },
 			{ name: "Md Sahadat Hossen", role: "Founding Member", batch: "" },
 			{ name: "Md Shahab Uddin", role: "Founding Member", batch: "" },
 			{ name: "Rebeka Khanam", role: "Founding Member", batch: "" },
 			{ name: "Md Shahin Alom", role: "Founding Member", batch: "" },
 			{ name: "Tanvir Morsalin", role: "President", batch: "BBA-15th" },
 			{ name: "Md Amanat Ullah Rokon", role: "Vice President", batch: "" },
 			{ name: "Rashed Ahmed Mon", role: "General Secretary", batch: "" },
 			{ name: "Syed Osiuddin Rabbany Iyad", role: "Joint Secretary", batch: "" },
 			{ name: "Md Edris Uddin", role: "Organizing Secretary", batch: "" },
 			{ name: "Nazrul Islam", role: "Finance Secretary", batch: "" },
 			{ name: "Tahmina Jahan", role: "Branding & Promotion Secretary", batch: "" },
 			{ name: "Istiyak Ahmed Akib", role: "Creative Secretary", batch: "" },
 			{ name: "Jannatul Mawa", role: "Human Resources Secretary", batch: "" },
 			{ name: "Hasnat Sikder", role: "Assistant Branding & Promotion Secretary", batch: "" },
 			{ name: "Umme Mashraba Joynab", role: "Press & Media Secretary", batch: "" },
 			{ name: "Rajya Sultana", role: "Communication Secretary", batch: "" },
 			{ name: "Muntakim Mahbub Chowdhury", role: "Research & Development Secretary", batch: "" },
 			{ name: "Tasmia Rahman", role: "Informatioin & Technology Secretary", batch: "" },
 			{ name: "Laily Chowdhury Tumpa", role: "Assistant Information & Technology Secretary", batch: "" },
 			{ name: "Afifa Sultana Emu", role: "Social Welfare Secretary", batch: "" },
 			{ name: "Hafizur Rahman", role: "Assistant Social Welfare Secretary", batch: "" },

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
