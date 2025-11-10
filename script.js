const form = document.getElementById('portfolioForm');
const addRowBtn = document.getElementById('addRow');
const eduTable = document.getElementById('eduTable').querySelector('tbody');
const nameTitle = document.getElementById('studentNameTitle');

document.getElementById('name').addEventListener('input', e => {
  nameTitle.textContent = e.target.value || "Your Name Here";
});

addRowBtn.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `<td><input type="text" placeholder="Course" /></td>
  <td><input type="text" placeholder="Institute / College" /></td>
  <td><input type="text" placeholder="Board / University" /></td>
  <td><input type="text" placeholder="Year" /></td>
  <td><input type="text" placeholder="Percentage" /></td>
  <td><button type="button" class="btn secondary removeRow">❌</button></td>`;
  eduTable.appendChild(newRow);
});

eduTable.addEventListener('click', e => {
  if (e.target.classList.contains('removeRow')) e.target.closest('tr').remove();
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    class: document.getElementById('class').value,
    roll: document.getElementById('roll').value,
    email: document.getElementById('email').value,
    skills: document.getElementById('skills').value,
    education: [],
  };

  eduTable.querySelectorAll('tr').forEach(tr => {
    const inputs = tr.querySelectorAll('td input');
    data.education.push(Array.from(inputs).map(i => i.value));
  });

  localStorage.setItem('portfolioData', JSON.stringify(data));
  window.location.href = 'preview.html';
});
