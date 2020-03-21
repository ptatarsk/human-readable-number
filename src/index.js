module.exports = function toReadable (number) {
  const readable_numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty',
  'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = "0";

  if (number < 20) {
      result = readable_numbers[number];
  } else if (number >= 20 && number <= 99) {
      result = readable_numbers[Math.floor(number / 10) + 18];
      if (number % 10)
        result += ' ' + readable_numbers[number % 10];
  } else if (number > 99) {
    result = readable_numbers[Math.floor(number / 100)] + ' hundred';
    if (number % 100) {
        number = number % 100;
        if (number >= 20 && number <= 99) {
            result += ' ' + readable_numbers[Math.floor(number / 10) + 18];
            if (number % 10)
                result += ' ' +  readable_numbers[number % 10];
        } else {
            result += ' ' + readable_numbers[number];
        }
    }
  }

  return result;
}
