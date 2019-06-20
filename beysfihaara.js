document.getElementById('navbar-links').addEventListener('click', e => {
  for (let link of e.target.parentElement.children) {
    link.className = '';
  }
  e.target.className = 'active';

  for (let page of document.body.children) {
    if ((page.id == 'navbar') || (page.id == e.target.textContent.toLowerCase())) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  }
})

document.getElementById('sales-bill-numbers').addEventListener('click', e => {
  for (let n of e.target.parentElement.children) {
    n.className = '';
  }
  if (e.target.textContent == '+') {
    let newbutton = document.createElement('button');
    newbutton.textContent = e.target.parentElement.children.length;
    e.target.insertAdjacentElement('beforebegin', newbutton);
    newbutton.className = 'active';
  } else {
    e.target.className = 'active';
  }
});

document.getElementById('sales-bill-table').addEventListener('click', e => {
  if (e.target.tagName == "TD" && e.target.colSpan == 1) {
    for (let row of e.target.parentElement.parentElement.rows) {
      row.className = '';
    }
    e.target.parentElement.className = 'active';
  }
});

document.getElementById('sales-bill-table-add-button').addEventListener('click', e => {
  let newrow = document.createElement('tr');
  newrow.insertCell();
  newrow.insertCell();
  newrow.insertCell();
  newrow.cells[0].textContent = 'Panadol 500mg';
  newrow.cells[1].textContent = '1';
  newrow.cells[2].textContent = '1.00';
  newrow.className = 'active';
  for (let row of e.target.parentElement.parentElement.parentElement.rows) {
    row.className = '';
  }
  e.target.parentElement.parentElement.insertAdjacentElement('beforebegin', newrow);
  e.target.scrollIntoView();
});

document.getElementById('sales-remove-item-button').addEventListener('click', e => {
  for (let row of document.getElementById('sales-bill-table').tBodies[0].rows) {
    if (row.className == 'active') {
      if (row.previousElementSibling && row.previousElementSibling.cells && row.previousElementSibling.cells[0]) {
        row.previousElementSibling.cells[0].click();
      } else if (row.nextElementSibling && row.nextElementSibling.cells && row.nextElementSibling.cells[0]){
        row.nextElementSibling.cells[0].click();
      }
      row.remove();
    }
  }
});

document.getElementById('sales-discard-bill-button').addEventListener('click', e => {
  let bill = document.getElementById('sales-bill-table').tBodies[0];
  while (bill.rows.length > 1) {
    bill.rows[0].remove();
  }
});

document.getElementById('sales-checkout-button').addEventListener('click', e => {
  document.getElementById('sales-discard-bill-button').click();
});
