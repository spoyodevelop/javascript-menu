import InputView from './InputView.js';

export default class MainController {
  async startProgram() {
    const splitCoachNames = await InputView.parseCoachName();
    console.log(splitCoachNames);
  }
}
