function isSimpleNumber(number) {
    if (typeof number !== 'number' || number > 1000) {
        return console.log('Данные введены неверно');
    } else if (number == 0 || number == 1) {
        return console.log('Число является простым');
    } else {
        for (let i = 2; i < number; i++) {
            if (number%i == 0) {
                return console.log('Число не является простым');
            } else {
              return console.log('Число является простым')
            }
        }
    }
}

isSimpleNumber(53)