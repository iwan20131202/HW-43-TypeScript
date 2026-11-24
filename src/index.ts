// 1
function getPromise(): Promise<(string | number)[]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise().then((data) => {
  console.log('Задание 1:', data);
});

// 2
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
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
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const user = { name: 'Alex' };
const userRole = { role: 'Admin', age: 28 };
const mergedUser = merge(user, userRole);

console.log('Задание 3:', mergedUser);

// 4
interface IPageProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IPageProps> {
  pageInfo() {
    console.log('Задание 4:', this.props.title);
  }
}

const homePage = new Page({ title: 'Главная страница' });
homePage.pageInfo();
