const names = [
  'Иван',
  'Андрей',
  'Илья',
  'Николай',
  'Анатолий',
  'Константин',
  'Александр',
  'Матвей',
  'Максим',
  'Алексей',
  'Павел'
];

const messages = [
  'Всё отлично!',
  'Что это?',
  'Как вы это делаете?',
  'Это-море?',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptions = {
  '1.jpg': 'Пляж на курорте',
  '2.jpg': 'Указатель на пляж',
  '3.jpg': 'Вид на море',
  '4.jpg': 'Девушка с фотоаппаратом на пляже',
  '5.jpg': 'Суп с рисовыми человечками',
  '6.jpg': 'Автомобиль марки "Mclaren" черного цвета',
  '7.jpg': 'Тарелка с клубникой',
  '8.jpg': 'Ягодный напиток',
  '9.jpg': 'Люди приветствуют самолет, пролетающий над пляжем',
  '10.jpg': 'Выдвижная сетка для обуви',
  '11.jpg': 'Дорога на пляж, через огороженные заросли',
  '12.jpg': 'Автомобиль марки "Audi" c зелеными фарами',
  '13.jpg': 'Ресторанное блюдо из местных овощей',
  '14.jpg': 'Сушикот',
  '15.jpg': 'Роботапки',
  '16.jpg': 'В облаках над горами',
  '17.jpg': 'Хор на сцене',
  '18.jpg': 'Ретромобиль "Кадиллак"',
  '19.jpg': 'Домашние тапочки с подсветкой',
  '20.jpg': 'Алея с пальмами',
  '21.jpg': 'Блюдо с птицей',
  '22.jpg': 'Закат на море',
  '23.jpg': 'Краб на камне',
  '24.jpg': 'Сцена концерта во время выступления',
  '25.jpg': 'Бегемот во время переправы',
};

function getRandomInteger(min, max) {

  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


function getRandomIndexArr(arr) {
  return getRandomInteger(0, arr.length - 1);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);

    return currentValue;
  };
}

function getComments() {
  const serialAvatar = createRandomIdFromRangeGenerator(1, 6);
  return {
    id: createRandomIdFromRangeGenerator(1, 135),
    avatar: `img/avatar-${serialAvatar()}.svg`,
    message: messages[getRandomIndexArr(messages)],
    name: names[getRandomIndexArr(names)]
  };
}

const uniqueIdPhoto = createRandomIdFromRangeGenerator(1, 25);

function getPictures() {
  const number = uniqueIdPhoto();
  return {
    id: number,
    url: `photos/${number}.jpg`,
    description: descriptions[`${number}.jpg`],
    comments: Array.from({ length: getRandomInteger(1, 23) }, getComments),
  };
}


// eslint-disable-next-line no-unused-vars
const picturesData = Array.from({ length: 25 }, getPictures);


