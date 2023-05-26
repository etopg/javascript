const quote = document.getElementById('quote')
const newbtn = document.getElementById('new-quote')
const Quote =[
'Life comes from earth and life returns to the earth',
'"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
'"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
' "Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
' "Dont judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson',
'"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
'"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
'You will face many defeats in life, but never let yourself be defeated. -Maya Angelou',
'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
'Life is either a daring adventure or nothing at all. -Helen Keller',
'Many of lifes failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison',
' "The purpose of our lives is to be happy." -Dalai Lama',
' "Only a life lived for others is a life worthwhile." -Albert Einstein',
'"In this life we cannot do great things. We can only do small things with great love." -Mother Teresa',
'"Life is ours to be spent, not to be saved." -D. H. Lawrence',
'Life is a long lesson in humility. -James M. Barrie',
'Love the life you live. Live the life you love. -Bob Marley',
]

newbtn.addEventListener('click', ()=>{
  const randomQuote = getRandomQuote();
  quote.innerHTML = randomQuote;
})
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() *Quote.length)
    console.log(randomIndex);
    return Quote[randomIndex];
    
}