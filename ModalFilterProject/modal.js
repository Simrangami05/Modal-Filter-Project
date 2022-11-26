(function () {
  const buttons = document.querySelectorAll(".btn");
  const storeItems = document.querySelectorAll(".store-item");
  const images = document.querySelectorAll(".cart");
  const lightBox = document.querySelectorAll(".lightbox-container");
  const lightBoxItem = document.querySelectorAll(".lightbox-item");
  console.log(buttons);

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const filter = e.target.dataset.filter;
      if (filter === "all") {
        storeItems.forEach(function (item) {
          item.style.display = "block";
        });
      } else if (filter === "cakes") {
        storeItems.forEach(function (item) {
          if (item.classList.contains("CAKES")) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      } else if (filter === "cupcakes") {
        storeItems.forEach(function (item) {
          if (item.classList.contains("CUPCAKES")) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      } else if (filter === "doughnuts") {
        storeItems.forEach(function (item) {
          if (item.classList.contains("DOUGHNUTS")) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });

  const Buttons = document.querySelectorAll(".btn");
  const StoreItems = document.querySelectorAll(".store-item");

  Buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;

      StoreItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();

(function () {
  const searchBox = document.querySelector("#search-btn");
  const storeItems = document.querySelectorAll(".store-item");

  searchBox.addEventListener("keyup", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();

    storeItems.forEach((item) => {
      if (item.textContent.includes(searchFilter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();

(function () {
  let storeItems = document.querySelectorAll(".store-item");
  let lightBox = document.querySelector(".lightbox-container");
  let lightBoxItem = document.querySelector(".lightbox-item");
  let images = document.querySelectorAll(".cart");

  let imageList = [];
  let imageCounter = 0;
  images.forEach(function (image) {
    imageList.push(image.src);
  });

  storeItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      let image = e.target.src;
      lightBoxItem.style.backgroundImage = `url(${image})`;
      lightBox.classList.add("show");
      imageCounter = imageList.indexOf(image);
    });
  });

  let btnLeft = document.querySelector(".btnLeft");
  btnLeft.addEventListener("click", function () {
    imageCounter--;
    if (imageCounter < 0) {
      imageCounter = imageList.length - 1;
    }
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
  });
  let btnRight = document.querySelector(".btnRight");
  btnRight.addEventListener("click", function () {
    imageCounter++;
    if (imageCounter >= imageList.length) {
      imageCounter = 0;
    }
    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
  });

  let lightBoxClose = document.querySelector(".lightbox-close");
  lightBoxClose.addEventListener("click", function () {
    lightBox.classList.remove("show");
  });
})();
