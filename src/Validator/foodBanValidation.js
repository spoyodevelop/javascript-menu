const foodBanValidation = {
  validate(foodNames) {
    if (foodNames === '') return [];

    const parsedFoods = foodNames.trim().split(',');

    if (parsedFoods.length > 2) {
      throw new Error(
        '각 코치는 최소 0개, 최대 2개의 못 먹는 메뉴가 있다. (`,` 로 구분해서 입력한다.)',
      );
    }
    return parsedFoods;
  },
};
export default foodBanValidation;
