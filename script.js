var objects = {
    "Зелёная книга": "https://www.tesla.com/",
    "1+1": "https://www.tesla.com/",
    "Человек-паук: Нет пути домой": "https://www.tesla.com/",
    "Невероятный мир глазами Энцо": "https://www.tesla.com/",
    "Социальная сеть": "https://www.tesla.com/",
    "Форсаж": "https://www.tesla.com/",
    "Интерстеллар": "https://www.tesla.com/",
    "Волк с Уолл-стрит": "https://www.tesla.com/",
    "Джентльмены": "https://www.tesla.com/",
    "Гравити Фолз": "https://www.tesla.com/",
    "Рик и Морти": "https://www.tesla.com/",
    "Бесстыжие": "https://www.tesla.com/",
    "Сверхъестественное": "https://www.tesla.com/",
    "Доктор Хаус": "https://www.tesla.com/",
    "Игра претолов": "https://www.tesla.com/",
    "Уэйн": "https://www.tesla.com/",
    "Черепашки-ниндзя": "https://www.tesla.com/"
};

function findTXT() {
    let find = document.getElementById("finder").value;
    let arr = [];
    for (let i in objects) {
        if (i.toLowerCase().includes(find.toLowerCase())) { //зеленая книга / зелен
            arr.push(i);
        }
    }
    document.getElementById("main").innerHTML = "";
    for (let i of arr) {
        document.getElementById("main").innerHTML += "<a href='" + objects[i] + "'>" + i + "</a> <br />";
    }
}

<video width="400" controls>
<source src="Zelenaya_kniga_2018_720.mp4" type="video/mp4">