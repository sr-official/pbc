// Sample committee data
const committeeMembers = [
 			{ name: "Sheikh Mohammad Imran", role: "Club Coordinator", batch: "-" },
 			{ name: "Atikur Rahman", role: "Club Coordinator", batch: "-" },
 			{ name: "Ripan Chatterjee", role: "Club Coordinator", batch: "-" },
 			{ name: "Rifat Nowshera", role: "Club Coordinator", batch: "-" },
 			{ name: "Ashraful Karim Chowdhury", role: "Founding Member", batch: "-" },
 			{ name: "Md Sahadat Hossen", role: "Founding Member", batch: "-" },
 			{ name: "Abdur Rahim Arif", role: "Founding Member", batch: "-" },
 			{ name: "Rebeka Khanam", role: "Founding Member", batch: "-" },
 			{ name: "Md Shahabuddin Sam", role: "President", batch: "BBA 12th" },
      { name: "Shahin Alam", role: "Vice President", batch: "BBA -" },
      { name: "Abrar Shariar Akib", role: "General Secretary", batch: "BBA 12th" },
      { name: "Rahima Akter Ruhy", role: "Wing Head - P&RB", batch: "BBA -"},
      { name: "Nusrat Sultana Riha" , role: "Co-Wing Head - P&RB", batch: "BBA -" },
      { name: "Urme Akther" , role: "Member - P&RB", batch: "BBA -" },
      { name: "Afifa Sultana" , role: "Member - P&RB", batch: "BBA -" },
      { name: "Md Shariar" , role: "Member - P&RB", batch: "BBA -" },
      { name: "Tahmina Jahan" , role: "Member - P&RB", batch: "BBA -" },
      { name: "Sabrina Akther Akhi" , role: "Member - P&RB", batch: "BBA -" },
      { name: "Hasnat Sikder Rana" , role: "Member - P&RB", batch: "BBA -" },
      { name: "Mafizur Rahman" , role: "Member - P&RB", batch: "BBA -" },
      { name: "Raisa Hasan" , role: "Wing Head - Content Writer", batch: "BBA -" },
      { name: "Syed Iyad" , role: "Co-Wing Head - Content Writer", batch: "BBA -" },
      { name: "Umme Mashraba Joynab" , role: "Member - Content Writer", batch: "BBA -" },
      { name: "Md Haidar Ali" , role: "Member - Content Writer", batch: "BBA -" },
      { name: "Mustakim Mahbub" , role: "Member - Content Writer", batch: "BBA -" },
      { name: "Laily Chowdhury" , role: "Member - Content Writer", batch: "BBA -" },
      { name: "Md Ziauddin" , role: "Wing Head - Designer", batch: "BBA -" },
      { name: "Md Amanat Ullah" , role: "Co-Wing Head - Designer", batch: "BBA -" },
      { name: "Md Ziaul Hoque" , role: "Member - Designer", batch: "BBA -" },
      { name: "Rakibul Alam" , role: "Member - Designer", batch: "BBA -" },
      { name: "Fahim Uddin" , role: "Member - Designer", batch: "BBA -" },
      { name: "Md Anamul Hasan" , role: "Member - Designer", batch: "BBA -" },
      { name: "Md Faisal Bin Azim" , role: "Wing Head - Socail Welfare", batch: "BBA -" },
      { name: "Pranta Saha" , role: "Co-Wing Head - Socail Welfare", batch: "BBA -" },
      { name: "Md Shoaib Hasan" , role: "Member - Socail Welfare", batch: "BBA -" },
      { name: "Md Edris Uddin" , role: "Member - Socail Welfare", batch: "BBA -" },
      { name: "Aminul Islam" , role: "Wing Head - Photographer", batch: "BBA -" },
      { name: "Md Nesar Ashrafi" , role: "Co-Wing Head - Photographer", batch: "BBA -" },
      { name: "Istiak Ahmed Akib" , role: "Member - Photographer", batch: "BBA -" },
      { name: "Shaheda Afrin" , role: "Wing Head - Tresurer", batch: "BBA -" },
      { name: "Nazmul Islam" , role: "Co-Wing Head - Tresurer", batch: "BBA -" },
      { name: "Md Faisal Alam" , role: "Member - Tresurer", batch: "BBA -" },
      { name: "Tasmia Rahman" , role: "Member - Tresurer", batch: "BBA -" },
      { name: "Tonmoy Dhar" , role: "Wing Head - Volunteer", batch: "BBA -" },
      { name: "Rajib Kanty Dey" , role: "Co-Wing Head - Volunteer", batch: "BBA -" },
      { name: "Tanvir Morsalin" , role: "Member - Volunteer", batch: "BBA -" },
      { name: "Rajiya Sultana" , role: "Member - Volunteer", batch: "BBA -" },
      { name: "Jannatul Mawa" , role: "Member - Volunteer", batch: "BBA -" },
      { name: "Abdullah Al Mamun" , role: "Executive Member", batch: "BBA -" },
      { name: "Taskiya Tabassum" , role: "Executive Member", batch: "BBA -" },
      { name: "Nishi Rani Pal" , role: "Executive Member", batch: "BBA -" },
      { name: "Shankar Dey" , role: "Executive Member", batch: "BBA -" },
      { name: "Tamjedul Islam" , role: "Executive Member", batch: "BBA -" },
      { name: "Fahmida Nasrin Prama" , role: "Executive Member", batch: "BBA -" },
      { name: "Kazi Mahmudul Hasan" , role: "Executive Member", batch: "BBA -" },
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
