let pig = document.querySelector(".pig");
let pig_catalog = document.querySelector(".pig_catalog");
let beef_catalog = document.querySelector(".beef_catalog");
let beef = document.querySelector(".beef");
let baranina = document.querySelector(".baranina");
let baranina_catalog = document.querySelector(".baranina_catalog")
let chicken = document.querySelector(".chiсken");
let chicken_catalog = document.querySelector(".chicken_catalog");
let turkey = document.querySelector(".turkey");
let turkey_catalog = document.querySelector(".turkey_catalog");
let fish = document.querySelector(".fish");
let fish_catalog = document.querySelector(".fish_catalog");
let contacts_btn = document.querySelector(".contacts_btn");
let contakts_container = document.querySelector(".contakts_container");
let cart = document.querySelector(".cart");
let my_cart_products = document.querySelector(".my_cart_products");
let buy_btn = document.querySelectorAll(".btn");
let kartochka = document.querySelector(".card-img-top");
let cart_count = document.querySelector(".cart_count");
let dostavka_btn = document.querySelector(".dostavka_btn");
let dostavka_oplata = document.querySelector(".dostavka_oplata");
let empty_basket = document.querySelector(".empty-basket");
let send_zakaz = document.querySelector(".send_zakaz");
let zakaz_div = document.querySelector(".zakaz");
let menu_elements = document.querySelectorAll(".element_menu");
let menu = document.querySelector(".menu");
let btn_vozvrtKpokupkam = document.querySelector(".vozvrat_k_pokupkam")
let kg = 0;
let a = document.querySelectorAll("a");
let count = 1;
let txt = `<a href="#" class="btn btn-primary delete_btn" onclick = 'removeFromCart(this)'>Удалить</a>`;
let arr = [];

a.forEach((el) => {
  if (el.getAttribute("href") == "#") {
    el.removeAttribute("href");
  }
});

menu_elements.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.classList.toggle("test");
    menu_elements.forEach((element) => {
      if (element != e.target) {
        element.classList.remove("test");
      }
    });
  });
});

buy_btn.forEach((el) => {
  el.textContent = "В корзину";
  el.addEventListener("click", (element) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.style.width = "18rem";
    div.id = `${element.target.closest(".card").id}`;
    div.dataset.val = `${element.target.closest(".card-body").getAttribute("data-val")}`;
    div.innerHTML = `${element.target
      .closest(".card")
      .innerHTML.split("\n")
      .map((el, i) => (i == 5 ? (el = txt) : el))
      .join("\n")}
            <span class="count_kg"><button class="minus" onclick = 'minusKg(this)'>-</button><input type="text" id="txt" value="1"><button class="plus" onclick = 'plusKg(this)'>+</button></span>`;
    if (arr.includes(div.id)) {
      alert("Товар уже в корзине!");
    } else {
      my_cart_products.append(div);
      cart_count.textContent = +cart_count.textContent + count;
      arr.push(div.id);
      empty_basket.style.display = "none";
    }
    if (my_cart_products.hasChildNodes) {
      zakaz_div.style.display = "flex";
    }
  });
});

function plusKg(a) {
  a.previousSibling.value = Number(a.previousSibling.value) + 1;
}

function minusKg(a) {
  a.nextSibling.value = Number(a.nextSibling.value) - 1;
  if (a.nextSibling.value == 0) {
    removeFromCart(a);
  }
}

function removeFromCart(w) {
  w.closest(".card").remove();
  arr.splice(arr.indexOf(w.closest(".card").id), 1);
  cart_count.textContent = +cart_count.textContent - count;
  if (cart_count.textContent == 0) {
    empty_basket.style.display = "flex";
    zakaz_div.style.display = "none";
  }
}

fish.addEventListener("click", () => {
  turkey_catalog.style.display = "none";
  beef_catalog.style.display = "none";
  pig_catalog.style.display = "none";
  chicken_catalog.style.display = "none";
  contakts_container.style.display = "none";
  my_cart_products.style.display = "none";
  dostavka_oplata.style.display = "none";
  baranina_catalog.style.display = "none";
  fish_catalog.style.display = "flex";
  
});

beef.addEventListener("click", () => {
  turkey_catalog.style.display = "none";
  beef_catalog.style.display = "flex";
  pig_catalog.style.display = "none";
  chicken_catalog.style.display = "none";
  contakts_container.style.display = "none";
  my_cart_products.style.display = "none";
  dostavka_oplata.style.display = "none";
  fish_catalog.style.display = "none";
  baranina_catalog.style.display = "none";
});
pig.addEventListener("click", () => {
  turkey_catalog.style.display = "none";
  beef_catalog.style.display = "none";
  pig_catalog.style.display = "flex";
  chicken_catalog.style.display = "none";
  contakts_container.style.display = "none";
  my_cart_products.style.display = "none";
  dostavka_oplata.style.display = "none";
  fish_catalog.style.display = "none";
  baranina_catalog.style.display = "none";
});

baranina.addEventListener("click", () => {
    turkey_catalog.style.display = "none";
    beef_catalog.style.display = "none";
    pig_catalog.style.display = "none";
    chicken_catalog.style.display = "none";
    contakts_container.style.display = "none";
    my_cart_products.style.display = "none";
    dostavka_oplata.style.display = "none";
    fish_catalog.style.display = "none";
    baranina_catalog.style.display = "flex";
  });

chicken.addEventListener("click", () => {
  turkey_catalog.style.display = "none";
  beef_catalog.style.display = "none";
  pig_catalog.style.display = "none";
  baranina_catalog.style.display = "none";
  chicken_catalog.style.display = "flex";
  contakts_container.style.display = "none";
  my_cart_products.style.display = "none";
  dostavka_oplata.style.display = "none";
  fish_catalog.style.display = "none";
});

turkey.addEventListener("click", () => {
  turkey_catalog.style.display = "flex";
  beef_catalog.style.display = "none";
  baranina_catalog.style.display = "none";
  pig_catalog.style.display = "none";
  chicken_catalog.style.display = "none";
  contakts_container.style.display = "none";
  my_cart_products.style.display = "none";
  dostavka_oplata.style.display = "none";
  fish_catalog.style.display = "none";
});

contacts_btn.addEventListener("click", () => {
  turkey_catalog.style.display = "none";
  beef_catalog.style.display = "none";
  pig_catalog.style.display = "none";
  chicken_catalog.style.display = "none";
  contakts_container.style.display = "flex";
  my_cart_products.style.display = "none";
  dostavka_oplata.style.display = "none";
  fish_catalog.style.display = "none";
  baranina_catalog.style.display = "none";
  menu.style.display = "none";
});

dostavka_btn.addEventListener("click", () => {
  turkey_catalog.style.display = "none";
  beef_catalog.style.display = "none";
  pig_catalog.style.display = "none";
  chicken_catalog.style.display = "none";
  contakts_container.style.display = "none";
  my_cart_products.style.display = "none";
  dostavka_oplata.style.display = "flex";
  fish_catalog.style.display = "none";
  menu.style.display = "none";
  baranina_catalog.style.display = "none";
});

cart.addEventListener("click", () => {
  turkey_catalog.style.display = "none";
  beef_catalog.style.display = "none";
  pig_catalog.style.display = "none";
  chicken_catalog.style.display = "none";
  contakts_container.style.display = "none";
  my_cart_products.style.display = "flex";
  dostavka_oplata.style.display = "none";
  fish_catalog.style.display = "none";
  menu.style.display = "none";
  baranina_catalog.style.display = "none";
});

btn_vozvrtKpokupkam.addEventListener ("click", () => {
    my_cart_products.style.display = "none";
    menu.style.display = "flex";
    beef_catalog.style.display = "flex";    
});

send_zakaz.onclick = () => telegramZakaz();

async function telegramZakaz() {
  let nazvanie = my_cart_products.querySelectorAll(".card-title");

  let spisok = [];
  nazvanie.forEach((el) => {
    let ves = el.closest(".card").lastChild.childNodes[1].value;
    console.log(el.closest(".card").parentElement);
    let nazvanie = el.textContent;
    let sostav = el.closest(".card-body").dataset.val;
    spisok.push(`${sostav}: ${nazvanie}  ${ves} кг "\n"`);
  });

  if (document.forms.my.telephon.value === "" || document.forms.my.name.value === "") {
    alert("Поле имя и номер должны быть заполнены!")
  } else {
    spisok.unshift(
      `Имя: ${document.forms.my.name.value}`,
      `Телефон: ${document.forms.my.telephon.value}\n`
    );
    try {
      let response = await fetch(
        "https://api.telegram.org/bot6386409799:AAHSG6lUIwrWqd6m95JGvESGSjiqJwC1RG4/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            chat_id: "@Myassorty",
            text: spisok.join("\n").replaceAll(`"`, ``),
          }),
        }
      );
      if (document.forms.my.name.value != "") {
        alert(
          `${document.forms.my.name.value},\nВаш заказ отправлен!\nСвяжемся с Вами в ближайшее время.`
        );
      } else alert("Ваш заказ отправлен!\nСвяжемся с Вами в ближайшее время.");
    } catch (error) {
      console.error(error);
      alert("Заявка не отправлена, попробуйте позже!");
    } finally {
      document.forms.my.name.value = "";
      document.forms.my.telephon.value = "";
      window.location.href = "index.html";
    }
  }

}
