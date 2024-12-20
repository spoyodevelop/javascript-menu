import { Random } from '@woowacourse/mission-utils';

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안:
    '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};
function pickCategory(randomNumber) {
  switch (randomNumber) {
    case 1:
      return '일식';
    case 2:
      return '한식';
    case 3:
      return '중식';
    case 4:
      return '아시안';
    case 5:
      return '양식';
    default:
      throw new Error('impossible');
  }
}
function pickFoodCatagory() {
  const randomNumber = Random.pickNumberInRange(1, 5);
  return pickCategory(randomNumber);
}
function checkAvailablityFoodCategory(foodCategoryList, foodCategory) {
  return (
    foodCategoryList.filter(
      (foodCategoryInList) => foodCategory === foodCategoryInList,
    ).length < 2
  );
}
export function makeFoodCategory() {
  const foodCategoryList = [];
  while (foodCategoryList.length !== 5) {
    const foodCategory = pickFoodCatagory();
    if (!checkAvailablityFoodCategory(foodCategoryList, foodCategory)) {
      continue;
    }
    foodCategoryList.push(foodCategory);
  }
  return foodCategoryList;
}

function isDuplicatedFood(foodLists, foodName) {
  if (!foodLists) return true;
  if (foodLists.some((food) => Object.values(food)[0] === foodName))
    return true;
  return false;
}
function isValidFoodCategory(foodsList) {
  while (true) {
    const foodCategory = pickFoodCatagory();
    if (!checkAvailablityFoodCategory(foodsList, foodCategory)) continue;
    return foodCategory;
  }
}
function isValidFood(
  trimedFoodCandidate,
  randomNumberArray,
  foodsList,
  bannedFoods,
) {
  while (true) {
    const menuNumber = Random.shuffle(randomNumberArray)[0];
    const pickedMenu = trimedFoodCandidate[menuNumber - 1];
    if (bannedFoods.includes(pickedMenu)) continue;
    if (isDuplicatedFood(foodsList, pickedMenu)) continue;
    return pickedMenu;
  }
}
export default function pickRandomFood(
  listofFoodCategory,
  foodsList,
  bannedFoods,
) {
  listofFoodCategory.forEach((foodCategory) => {
    const foodCandidate = SAMPLE[foodCategory].split(',');
    const trimedFoodCandidate = foodCandidate.map((food) => food.trim());

    const randomNumberArray = Array.from({ length: 9 }, (_, i) => i + 1);
    const pickedMenu = isValidFood(
      trimedFoodCandidate,
      randomNumberArray,
      foodsList,
      bannedFoods,
    );

    const obj = {};
    obj[foodCategory] = pickedMenu;
    foodsList.push(obj);
  });
  return foodsList;
}
