"use strict";

if (userActive) {
  const newContainer = document.getElementById("news-container");
  const btnNext = document.getElementById("btn-next");
  const btnPrev = document.getElementById("btn-prev");
  const pageNum = document.getElementById("page-num");

  //Biến này để tính sô news tối đa tải về từ API
  let totalResults = 0;
  getDataNews("us", 1);

  //////////////////////////////////////////////////////////////////////////////
  //Hàm lấy dữ liệu Data News từ Api và hiển thị list New ra ứng dụng
  async function getDataNews(country, page) {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=b10dc1ca344d4887975d0d85448a04b4`
      );

      // ;
      const data = await res.json();
      console.log(data);
      if (data.status === "error" && data.code === "rateLimited") {
        throw new Error(data.message);
      }

      if (data.status === "error" && data.code === "corsNotAllowed") {
        throw new Error(data.message);
      }

      displayNewList(data);
    } catch (err) {
      alert("Error :" + err.message);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////
  function checkBtnPrev() {
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  function checkBtnNext() {
    if (pageNum.textContent == Math.ceil(totalResults / userActive.pageSize)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////
  btnPrev.addEventListener("click", function () {
    getDataNews("us", --pageNum.textContent);
  });
  btnNext.addEventListener("click", function () {
    getDataNews("us", ++pageNum.textContent);
  });

  ////////////////////////////////////////////////////////////////////////////////////
  //Hàm hiển thị list News lên trang
  function displayNewList(data) {
    totalResults = data.totalResults;
    checkBtnPrev();
    checkBtnNext();
    let html = "";
    data.articles.forEach(function (article) {
      html += `
      <div class="card flex-row flex-wrap">
      <div class="card mb-3" style="height= 100%">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src=${
              article.urlToImage
                ? article.urlToImage
                : `https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg`
            }
              class="card-img"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href=${article.url} target="_blank"
                class="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    `;
    });
    newContainer.innerHTML = html;
  }
} else {
  alert("Please log in to your account !");
  window.location.assign("../index.html");
}
