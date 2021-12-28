const listLms = [
  {
    img: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
    name: "Антон",
    surname: "Чебикін",
    numberDz: "7",
    numberScore: "696",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/e6ef3cc070c3d4c97a46f984b94e3436.jpg",
    name: "Borys",
    surname: "Mukhatasov",
    numberDz: "7",
    numberScore: "697",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/d1b3870e354c2d9668b8cd64e63bbf37.jpg",
    name: "Oleksandra",
    surname: "Kushniruk",
    numberDz: "7",
    numberScore: "687",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/7e0475ff04937622a8aa27a8d38be520.jpg",
    name: "Oleksandr",
    surname: "Odintsov",
    numberDz: "7",
    numberScore: "680",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/0fd3a6a4e07969f0dcb87452a6ba2d5f.jpg",
    name: "David",
    surname: "Vashchenko",
    numberDz: "7",
    numberScore: "675",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/5d6a97aefe779d59786a11f9063d1ff0.jpg",
    name: "Oleksandr",
    surname: "Yaremenko",
    numberDz: "7",
    numberScore: "657",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/b86e405b95a95b5011f856ad81f4c6a5.jpg",
    name: "Антон",
    surname: "Сквирский",
    numberDz: "7",
    numberScore: "648",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/74ad3ec0535885ce0d279a4181b27760.jpg",
    name: "Evheny",
    surname: "Shapka",
    numberDz: "6",
    numberScore: "578",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/a349ed2377b7f3b7b537b5b390727b40.jpg",
    name: "Daryna",
    surname: "Kalynovska",
    numberDz: "6",
    numberScore: "575",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/92b38913f9348e15174570b1d9024a81.jpg",
    name: "Oksana",
    surname: "Zaitseva",
    numberDz: "5",
    numberScore: "549",
  },
  {
    img: "https://lms.ithillel.ua/uploads/images/95affb1a84063b1ad2f427cf31d97a9f.jpg",
    name: "Костянтин",
    surname: "Косоротов",
    numberDz: "3",
    numberScore: "220",
  },
];

listLms.forEach(function (element) {
  document.getElementById("window").insertAdjacentHTML(
    "beforeend",
    `
    <tr>
        <td>
            <img src="${element.img}" alt="">
        </td>
        <td>
            <div>${element.name}</div>
            <div>${element.surname}</div>
        </td>
        <td>
            <div>${element.numberDz}</div>
            <div>${element.numberScore}</div>
        </td>
    </tr>
    `
  );
});
