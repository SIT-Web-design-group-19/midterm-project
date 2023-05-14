async function loadFooter() {
  const footerUrl = "./partials/footer.html";
  const response = await fetch(footerUrl);

  if (response.ok) {
    const footerHtml = await response.text();
    const footerContainer = document.getElementById("footer-container");
    footerContainer.innerHTML = footerHtml;
  } else {
    console.error("Failed to fetch footer:", response.statusText);
  }
}

loadFooter();


async function loadHeader() {
  const headerUrl = './partials/header.html';
  const response = await fetch(headerUrl);

  if (response.ok) {
    const headerHtml = await response.text();
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = headerHtml;
  } else {
    console.error('Failed to fetch header:', response.statusText);
  }
}

loadHeader();
