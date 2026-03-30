/*console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];
const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2)

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);
const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4); */

/*console.log("Деструктиризация объектов"); 
const user = {
    name: "Алиса",
    age: 25,
    city: "Москва",
};
*/
/*
const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);
const { name, age, city } = user;
console.log(name, age, city);
const { name: fullName, age: years } = user;
console.log(fullName, years);
const { name: personName, country = "Россия" } = user;
console.log(personName, country);
*/

/*console.log("Деструктиризация в параметрах");

function printUserOld(user) {
    console.log(`Имя: ${user.name}`);
    console.log(`Возраст: ${user.age}`);
    console.log(`Город: ${user.city}`);

}
function printUser({ name, age, city }) {
    console.log(`Имя: ${name}`);
    console.log(`Возраст: ${age}`);
    console.log(`Город: ${city}`);

}
printUserOld(user);
console.log();
printUser(user);*/
/*const product = {
    name: "apple",
    price: 100,
    category: "fruits",
    inStock: true
}
const { name, price, category, inStock } = product;
function printProduct({ name, price, category, inStock }) {
    console.log(`Название: ${name}`);
    console.log(`Стоимость (в Руб.): ${price}`);
    console.log(`Категория: ${category}`);
    console.log(`В наличии? : ${inStock}`);
}
printProduct(product);
*/
/*
console.log("Spread для массивов");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Объединённый массив: ", combined);
const copy = [...arr1];
console.log("Copy array: ", copy);
const extended = [0, ...arr1, 7, 8];
console.log("Расширенный массив: ", extended);
*/
/*
console.log("Spread для объектов");
const person = {
    name: "Иван",
    age: 30,
}
const address = {
    city: "Санкт-Петербург",
    street: "Невский проспект",
}
const fullInfo = { ...person, ...address };
console.log("Полная информация:", fullInfo);
const personCopy = { ...person };
console.log("Копия объекта:", personCopy);
const updated = { ...person, age: 31, occupation: "Developer" };
console.log("Обновлённый объект:", updated);
*/
/*
console.log("Rest оператор");
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Сумма 1,2,3:", sum(1, 2, 3));
console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log("Первое число:", first);
console.log("Второе число:", second);
console.log("Остальные число:", rest);
*/
/*
const arr1 = [1, 3, 4, 5];
const arr2 = [1, 2, 6, 8];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);
function findMax(...numbers) {
    return numbers.reduce((max, num) => num > max ? num : max);
}
console.log(findMax(5, 2, 3, 1, 7, 15, 1235));
const obj1 = {
    name: "te",
    age: 226,
}
const obj2 = {
    city: "good",
    weather: "bad",
}
const bothObj = { ...obj1, ...obj2 };
console.log(bothObj);
*/
/*
import { greet, add, PI } from "./utils.js";
import { multiply as умножить } from "./utils.js";
import * as Utils from "./utils.js";
console.log("Модули");
console.log(greet("Алексей"));
console.log("5 + 3 = ", add(5, 3));
console.log("Значение PI:", PI);
console.log("4 * 7 = ", умножить(4, 7));
console.log(Utils.greet("Мария"));
console.log("Умножение:", Utils.multiply(3, 9));
*/
/*
import * as Maths from "./math.js";
console.log("Квадрат числа 5: ", Maths.square(5));
console.log("Куб числа 5: ", Maths.cube(5));
console.log("Число Е : ", Maths.E);
*/
/*
console.log("Промисы");
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!");
    }
});

simplePromise
    .then((result) => console.log("Результат:", result))
    .catch((error) => console.log("Результат:", error))


delay(1000)
    .then((message) => console.log(message));
function featchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "иван иванов",
                    email: "ivan@example.com",
                });
            } else {
                reject("Неверный ID пользователя");
            }
        }, 1500);
    });
}
featchUserData(1)
    .then((user) => console.log("Пользователь:", user))
    .catch((error) => console.log("Ошибка:", error));

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Шаг 1 завершён"), 500);
    });
}
function step2(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
    });
}
function step3(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
    });
}

step1()
    .then((result1) => step2(result1))
    .then((result2) => step3(result2))
    .then((finalResult) => console.log("Финальный результат:", finalResult))
    .catch((error) => console.log("Ошибка в цепочке: ", error));
*/

/*
function checkInventory(product) {
    return new Promise((resolve, reject) => {

        const inventory = ["apple", "banana", "potato", "meat"];

        if (inventory.includes(product)) {
            resolve(`Товар "${product}" есть в наличии`);
        } else {
            reject(`Товар "${product}" отсутствует`);
        }

    });
}

checkInventory("meat")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
    */
/*

console.log("Async/Await");
async function greet() {
    return "Привет!";
}
greet().then((message) => console.log(message));

function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ temp: 22, condition: "Солнечно" });
        }, 1000);
    });
}
async function showWeather() {
    console.log("Загрузка погоды...");
    const weather = await getWeather();
    console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);

}
showWeather();
*/
/*
async function fetchData(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Ошибка при загрузке данных");
            } else {
                resolve({ data: "Важные данные" });
            }
        }, 800);
    });
}

async function getData() {
    try {
        const result = await fetchData(false);
        console.log("Успешно:", result.data);

        const failedResult = await fetchData(true);
        console.log("Это не выполнится");
    } catch (error) {
        console.log("Поймана ошибка:", error);
    }
}
getData();
*/
/*
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}

async function cookDinner() {
    console.log("Начинаем готовить...");

    const pasta = await delay(1000).then(() => "Паста готова");
    console.log(pasta);
    const sauce = await delay(700).then(() => "Соус готов");
    console.log(sauce);
    const salad = await delay(500).then(() => "Салат готов");
    console.log(salad);

    return "Ужин готов!";
}

cookDinner().then((result) => console.log(result));

async function cookDinnerFast() {
    console.log("Готовим все одновременно...");

    const [pasta, sauce, salad] = await Promise.all([
        delay(1000).then(() => "Паста готова"),
        delay(500).then(() => "Соус готов"),
        delay(700).then(() => "Салат готов"),
    ]);
    console.log(pasta, sauce, salad);
    return "Ужин готов быстрее!";
}

cookDinnerFast().then((result) => console.log(result));
*/
/*
function checkAvailability(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const inventory = ["pasta", "sauce", "salad"];

            if (inventory.includes(product)) {
                resolve(`Товар ${product} найден`);
            } else {
                reject(`Товар ${product} отсутствует`);
            }
        }, 1000);
    });
}

function calculatePrice(product) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const prices = {
                pasta: 500,
                sauce: 1000,
                salad: 700
            };

            resolve(`Стоимость товара: ${prices[product]}₽`);
        }, 1000);
    });
}

function confirmOrder(product) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Заказ на ${product} подтвержден`);
        }, 1000);
    });
}

async function processOrder(product) {
    try {
        const availability = await checkAvailability(product);
        console.log(availability);

        const price = await calculatePrice(product);
        console.log(price);

        const confirmation = await confirmOrder(product);
        console.log(confirmation);

        console.log("Заказ успешно обработан");

    } catch (error) {
        console.log("Ошибка:", error);
    }
}

processOrder("salad");
*/

/*

console.log("Fetch API");

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP ошибка! Статус: ${response.status}`);
        }
        const users = await response.json();
        console.log("Первые 3 пользователя:");
        users.slice(0, 3).forEach(user => {
            console.log(`- ${user.name} (${user.email})`);
        });

    } catch (error) {
        console.log("Ошибка при загрузке пользователя:", error.message);
    }
}
getUsers();

*/
/*
async function getUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();

        console.log(`Пользователь #${id}:`);
        console.log(`Имя: ${user.name}`);
        console.log(`Город: ${user.address.city}`);
        console.log(`Компания: ${user.company.name}`);

    } catch (error) {
        console.log("Ошибка:", error.message);
    }
}
getUserById(1);
*/
/*
async function createPost() {
    try {
        const newPost = {
            title: "Моя первая запись",
            body: "Это содержание моей первой записи в блоге",
            userId: 1,
        };
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });

        const createdPost = await response.json();
        console.log("Создана новая запись:");
        console.log("ID:", createdPost.id)
        console.log("Заголовок:", createdPost.title);
    } catch (error) {
        console.log("Ошибка при создании записи:", error.message);
    }
}

createPost();
*/
/*
console.log("Optional Chaining");
const user1 = {
    name: "Андрей",
    address: {
        city: "Волжский",
        street: "Пушкина",
    },
};
const user2 = {
    name: "Дмитрий",
}
// const city = user2.address.city;

const city1 = user2.address && user2.address.city;
console.log("Город (старый способ):", city1);


const city2 = user2.address?.city;
console.log("Город (новый способ):", city2);

const street = user1.address?.street;
console.log("Улица:", street);
*/
/*
const admin = {
    name: "Администратор",
    permissions: {
        canDelete: () => true,
    },
};

const guest = {
    name: "Гость",
};

console.log("Админ может удалять?", admin.permissions?.canDelete?.());
console.log("Гость может удалять?", guest.permissions?.canDelete?.());

*/
/*
const company = {
    name: "Tech Corp",
    employees: [
        { name: "Надежда", role: "Developer" },
        { name: "Anna", role: "Designer" },
    ],
};

const startup = {
    name: "new startup",
};
console.log("Первый сотрукдник:", company.employees?.[0]?.name);
console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);
*/

/*

console.log("Nullish Coalescing");
const value1 = 0;
const value2 = "";
const value3 = false;
const value4 = null;
const value5 = undefined;

console.log('value1 || "default":', value1 || "default");
console.log('value2 || "default":', value2 || "default");
console.log('value3 || "default":', value3 || "default");

console.log('value1 ?? "default":', value1 ?? "default");
console.log('value2 ?? "default":', value2 ?? "default");
console.log('value3 ?? "default":', value3 ?? "default");
console.log('value4 ?? "default":', value4 ?? "default");
console.log('value5 ?? "default":', value5 ?? "default");
*/

/*

function displayUserSettings(settings) {
    const theme = settings?.theme ?? "light";
    const fontSize = settings?.fontSize ?? 14;
    const notifications = settings?.notifications ?? true;

    console.log("Настройки пользователя:");
    console.log("Тема:", theme);
    console.log("Размер шрифта:", fontSize);
    console.log("Уведомления:", notifications);
}

displayUserSettings({ theme: "dark", fontSize: 16 });
displayUserSettings({ notifications: false });
displayUserSettings({ notifications: false });
displayUserSettings({});
*/
/*
const apiResponse = {
    data: {
        user: {
            profile: {
                settings: {
                    language: "ru",
                },
            },
        },
    },
};
const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
console.log("Язык:", language);
const emptyResponse = {};
const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
console.log("Язык по умолчанию:", defaultLanguage);
*/

const order = {
    id: 101,
    customer: {
        name: "Dan",
        email: "dan@example.com",
        address: { city: "Moscow", country: "Russia" }
    },
    shipping: { method: "Express", trackingNumber: "TRK123456" },
    payment: { method: "Credit Card", status: "Paid" }
};

function displayOrder(order) {
    const id = order?.id ?? "N/A";
    const name = order?.customer?.name ?? "No customer";
    const email = order?.customer?.email ?? "No email";
    const city = order?.customer?.address?.city ?? "Unknown";
    const country = order?.customer?.address?.country ?? "Unknown";
    const method = order?.shipping?.method ?? "Standard";
    const track = order?.shipping?.trackingNumber ?? "N/A";
    const payMethod = order?.payment?.method ?? "Unknown";
    const status = order?.payment?.status ?? "Processing";

    console.log(`Заказ #${id}\nПосетитель: ${name} (${email})\nАдресс: ${city}, ${country}
        \nДоставка: ${method} (${track})\nОплата: ${payMethod} — ${status}`);
}

displayOrder(order);