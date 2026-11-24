"use strict";
// 1
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise().then((data) => {
    console.log('Задание 1:', data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const topPart = { name: 'Box', color: 'Red' };
const bottomPart = { position: 1, weight: 100 };
const fullObject = compare(topPart, bottomPart);
console.log('Задание 2:', fullObject);
// 3
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const user = { name: 'Alex' };
const userRole = { role: 'Admin', age: 28 };
const mergedUser = merge(user, userRole);
console.log('Задание 3:', mergedUser);
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log('Задание 4:', this.props.title);
    }
}
const homePage = new Page({ title: 'Главная страница' });
homePage.pageInfo();
