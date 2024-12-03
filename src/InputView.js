import { Console } from '@woowacourse/mission-utils';
import coachNameValidation from './Validator/coachNameValidation.js';

const InputView = {
  async parseCoachName() {
    while (true) {
      const parseCoachName = await Console.readLineAsync(
        '코치의 이름을 입력해 주세요. (, 로 구분)',
      );
      try {
        const coachs = coachNameValidation.validate(parseCoachName);
        if (coachs) {
          return coachs;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  },
};

export default InputView;
