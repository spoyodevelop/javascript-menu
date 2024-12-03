import InputView from './InputView.js';

export default class MainController {
  async startProgram() {
    const coaches = await InputView.parseCoachName();
    const coachesFoodsList = {};

    /* eslint-disable*/
    for (const coach of coaches) {
      const bannedFoods = await InputView.parseBannedFood(coach);
      coachesFoodsList[coach] = bannedFoods;
    }

    console.log(coachesFoodsList);
  }
}
