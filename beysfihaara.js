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
  if (e.target.textContent == '+') {
    let newspan = document.createElement('button');
    newspan.textContent = e.target.parentElement.children.length;
    e.target.insertAdjacentElement('beforebegin', newspan);
  } else {
    for (let n of e.target.parentElement.children) {
      n.className = '';
    }
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

});
