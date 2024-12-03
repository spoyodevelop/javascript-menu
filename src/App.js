import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import MainController from './MainController.js';

class App {
  play() {
    new MainController().startProgram();
  }
}

export default App;
