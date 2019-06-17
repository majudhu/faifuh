// set active class on click
function setActiveClass(t) {
  for (let c of t.parentElement.children) {
    c.className = '';
  }
  t.className = 'active';
}

function navigateToPage(name) {
  for (let page of document.body.children) {
    if (page.id == 'navbar' || page.id == name) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  }
}

document.getElementById('navbar-home').addEventListener('click', e => {
  setActiveClass(e.target);
  navigateToPage('home');
});

document.getElementById('navbar-sales').addEventListener('click', e => {
  setActiveClass(e.target);
  navigateToPage('sales');
});

document.getElementById('navbar-stocks').addEventListener('click', e => {
  setActiveClass(e.target);
  navigateToPage('stocks');
});

document.getElementById('navbar-products').addEventListener('click', e => {
  setActiveClass(e.target);
  navigateToPage('products');
});

document.getElementById('navbar-reports').addEventListener('click', e => {
  setActiveClass(e.target);
  navigateToPage('reports');
});
