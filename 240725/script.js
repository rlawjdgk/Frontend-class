// import products from "./products.js";

// console.log(products.data[0].img);

const productInfo =
  "https://my-json-server.typicode.com/rlawjdgk/oliveyoung-fake/db";
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };

    // Remove Items
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // Making Items
    const createItem = (product) => {
      const ul = document.querySelector("ul");

      const li = document.createElement("li");

      const img = document.createElement("img");

      const attr = document.createAttribute("src");

      const div = document.createElement("div");

      const h3 = document.createElement("h3");

      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);
      // 메서드 체이닝 기법
      // 프로토 타입 함수, 숫자나 통화 표기하는데, 어떤 나라를 기준으로 할래?

      h3.className = "name";
      h3.innerText = product.name;

      span.className = "pirce";
      span.innerText = price;

      attr.value = product.img;
      img.setAttributeNode(attr);
      ul.appendChild(li);
      div.append(h3, span);
      li.append(img, div);

      li.addEventListener("click", () => {
        const url = `product-detail.html?category=${
          product.category
        }&name=${encodeURIComponent(product.name)}`;
        window.location.href = url;
      });
    };

    // Importing Items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    const newlisting = document.querySelector(".newlisting");
    newlisting.addEventListener("click", sortNew);
  })

  .catch((error) => {
    console.log(error);
  });

// 중복해서 쓸 필요가 없다, append를 쓰면,

// li.appendChild(img);
// li.appendChild(div);

// document.addEventListener('DOMContentLoaded', () => {
//   const icons = document.querySelectorAll('.icon');
//   console.log(icons); // 선택된 요소들을 콘솔에 출력

//   icons.forEach((item) => {
//       item.addEventListener("click", () => {
//           icons.forEach((li) => li.classList.remove("active"));
//           item.classList.add("active");
//       });
//   });
// });

(function () {
  var w = window;
  if (w.ChannelIO) {
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  }
  if (document.readyState === "complete") {
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO("boot", {
  pluginKey: "f8960840-aa7b-4703-ac95-0e0a71163222",
});
