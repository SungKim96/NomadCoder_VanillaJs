const quotes = [
  {
    quote:
      'I knew if I stayed a round long enough, something like this would happen.',
    author: 'george bernard shaw',
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: 'Roy T. Bennett',
  },
  {
    quote:
      'Life is inherently risky. There is only one big risk you should avoid at all costs, and that is the risk of doing nothing.',
    author: 'Denis Waitley',
  },
  {
    quote: 'Your attitude, not your aptitude, will determine your altitude.',
    author: 'Zig Ziglar',
  },
  {
    quote: "It's failure that gives you the proper perspective on success.",
    author: 'Ellen DeGeneres',
  },
  {
    quote: 'Only those who dare to fail greatly can ever achieve greatly.',
    author: 'Robert F. Kennedy',
  },
  {
    quote:
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Being a successful person is not necessarily defined by what you have achieved, but by what you have overcome.',
    author: 'Fannie Flagg',
  },
  {
    quote:
      "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: 'Nido Qubein',
  },
  {
    quote: 'Life has no limitations, except the ones you make.',
    author: 'Les Brown',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
/* console.log(quotes[0 - 9]); [0-9]를 갖기위해서는
console.log(quotes[Math.floor(Math.random() * 10)]); 10이라고 기억하고있어야하는 불편함, quotes이 11개가되면 바꿔줘야함으로 array.length를 사용하는것이 더 베스트
console.log(quotes[Math.floor(Math.random) * quotes.length]);
 */
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
