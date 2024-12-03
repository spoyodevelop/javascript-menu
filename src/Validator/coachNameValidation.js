const coachNameValidation = {
  validate(coachNames) {
    if (coachNames === '' || !coachNames.includes(',')) {
      throw new Error('[ERROR]: 코치 이름은 빌수 없습니다.');
    }
    const parsedCoach = coachNames.trim().split(',');
    if (parsedCoach.some((coach) => coach.length > 4 || coach.length < 2)) {
      throw new Error('[ERROR]: 코치의 이름은 최소 2글자, 최대 4글자.');
    }
    if (parsedCoach.length < 2 || parsedCoach.length > 5) {
      throw new Error(
        '[ERROR]: 코치는 최소 2명, 최대 5명까지 식사를 함께 한다.',
      );
    }
    return parsedCoach;
  },
};
export default coachNameValidation;
