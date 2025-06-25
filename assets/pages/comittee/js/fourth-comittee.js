// Sample committee data
const committeeMembers = [
 			{ name: "Khandakar Md. Ehsanul Hoq Sohan", role: "President", batch: "BBA-28th" },
 			{ name: "Mustafa Mohammad Akhil", role: "Vice President", batch: "BBA-28th" },
 			{ name: "Md Minhaj Uddin", role: "General Secretary", batch: "BBA-29th" },
 			{ name: "Abdullah Al Sajid", role: "Treasurer", batch: "BBA-29th" },
 			{ name: "Robayed Hossen Jasis", role: "Join Secretary", batch: "BBA-30th"},
 			{ name: "Md Masum Rana", role: "Organizing Secretary", batch: "BBA-31th" },
 			{ name: "Md Reduanul Islam Shaikh", role: "Assistant Organizing Secretary", batch: "BBA-31th" },
 			{ name: "Ramim Al Mehedi", role: "Event Secretary", batch: "BBA-30th" },
 			{ name: "Kamrun Nissa Talukdar", role: "Publicity & Publication Secretary", batch: "BBA-31th" },
 			{ name: "Md Ajharul Hossain", role: "Assistant Publicity Secretary", batch: "BBA-29th" },
 			{ name: "Mohammad Shoaib Uddin", role: "Information & Research Secretary", batch: "BBA-34th" },
 			{ name: "Md Jahidul Islam Nafiz", role: "Sport & Cultural Secretary", batch: "BBA-29" },
 			{ name: "Rahanuma Islam", role: "Women Affairs Secretary", batch: "BBA-30th" },
 			{ name: "Nafija Elies Rashme", role: "Executive Member", batch: "BBA-27th" },
 			{ name: "Fahim Shahriar", role: "Executive Member", batch: "BBA-34th" },
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
