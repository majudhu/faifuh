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

document.getElementById('home-newsale-button').addEventListener('click', e => {
  document.getElementById('navbar-sales').click();
});

document.getElementById('home-addstock-button').addEventListener('click', e => {
  document.getElementById('navbar-stocks').click();
});

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

document.getElementById('sales-item-expiry-dropdown').addEventListener('click', e => {
  let dropdownlist = document.getElementById('sales-item-expiry-dropdown');
  let dropdownbutton = dropdownlist.lastElementChild;
  if (dropdownbutton.style.display == 'none') {
    while (dropdownlist.children.length > 2) {
        if ((e.target.parentElement.parentElement == dropdownlist.children[0])
        || (e.target.parentElement == dropdownlist.children[0])) {
          dropdownlist.children[1].remove();
        } else {
          dropdownlist.children[0].remove();
        }
    }
    dropdownbutton.style.display = '';
    dropdownlist.style.flexDirection = 'row';
  } else {
    let stocks = [['01/01/2020', '1'],['01/01/2020', '12'],['01/01/2020', '123'],['01/01/2020', '1234'],['01/01/2020', '12345']];
    dropdownlist.children[0].remove();
    for (let stock of stocks) {
      let newdiv_pair = document.createElement('div');
      let newdiv_expiry = document.createElement('div');
      let newdiv_stock = document.createElement('div');
      let newlabel_expiry = document.createElement('p');
      let newlabel_stock = document.createElement('p');
      let newvalue_expiry = document.createElement('p');
      let newvalue_stock = document.createElement('p');
      newlabel_expiry.textContent = 'Expiry';
      newlabel_stock.textContent = 'Stock';
      newvalue_expiry.textContent = stock[0];
      newvalue_stock.textContent = stock[1];
      newdiv_expiry.className = newdiv_stock.className = 'key-value-pair';
      newdiv_expiry.append(newlabel_expiry, newvalue_expiry);
      newdiv_stock.append(newlabel_stock, newvalue_stock);
      newdiv_pair.append(newdiv_expiry, newdiv_stock);
      dropdownlist.prepend(newdiv_pair);
    }

    dropdownlist.style.flexDirection = 'column';
    dropdownbutton.style.display = 'none';
  }
});

document.getElementById('sales-item-qty-numbox').addEventListener('click', e => {
  let numboxp = document.getElementById('sales-item-qty-numbox').children[0].children[1];
  if (e.target.textContent == '▲') {
      numboxp.textContent = parseInt(numboxp.textContent) + 1;
  } else if (e.target.textContent == '▼') {
    numboxp.textContent = parseInt(numboxp.textContent) - 1;
  } else {
    let sel = window.getSelection();
    numboxp.contentEditable = true;
    sel.selectAllChildren(numboxp);
  }
});

document.getElementById('sales-item-qty-numbox').children[0].children[1].addEventListener('blur', e => {
  if (isNaN(parseInt(e.target.textContent))) {
    e.target.textContent = "1";
  } else {
    e.target.textContent = parseInt(e.target.textContent);
  }
  e.target.contentEditable = false;
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

document.getElementById('stocks-add-button').addEventListener('click', e => {
  document.getElementById('stocks').style.display = 'none';
  document.getElementById('stocks-add').style.display = 'block';
});

document.getElementById('products-new-button').addEventListener('click', e => {
  document.getElementById('products').style.display = "none";
  document.getElementById('products-new').style.display = "block";
});
