import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import SAMPLE from './sample.js';
import pickRandomFood from './sample.js';

export default class MainController {
  async startProgram() {
    const coaches = await InputView.parseCoachName();
    const coachesFoodsList = {};

    /* eslint-disable*/
    for (const coach of coaches) {
      const bannedFoods = await InputView.parseBannedFood(coach);
      coachesFoodsList[coach] = bannedFoods;
    }
    OutputView.printMessage('메뉴 추천 결과입니다.');
    OutputView.printMessage(
      '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
    );
    OutputView.printMessage(
      '[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]',
    );

    for (const [key, value] of Object.entries(coachesFoodsList)) {
      const coachName = key;
      const bannedFoods = value;
      const foodsList = pickRandomFood([], bannedFoods);
      const parsedList = foodsList.map((food) => Object.values(food)[0]);
      OutputView.printMessage(
        `[ ${coachName} | ${parsedList[0]} | ${parsedList[1]} | ${parsedList[2]} | ${parsedList[3]} | ${parsedList[4]} ] `,
      );
    }
    OutputView.printMessage('추천을 완료했습니다.');
  }
}
