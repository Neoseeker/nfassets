// http://www.neoseeker.com/forums/index.php?fn=browse_forum&f=37902

var quotes = new Array('',
'A mind once stretched by a new idea never regains its original dimensions. ~ Anonymous',
'A professor is one who talks in someone else\'s sleep. ~ Anonymous',
'A university is what a college becomes when the faculty loses interest in students. ~ John Ciardi',
'An expert is a man who has made all the mistakes which can be made, in a narrow field. ~ Niels Bohr',
'Education is a progressive discovery of our own ignorance. ~ Will Durant',
'Experience is a good school, but the fees are high. ~ Heinrich Heine',
'Experience is a great advantage. The problem is that when you get the experience, you\'re too damned old to do anything about it. ~ Jimmy Connors',
'Who dares to teach must never cease to learn. ~ John Cotton Dana',
'What we want is to see the child in pursuit of knowledge, and not knowledge in pursuit of the child. ~ George Bernard Shaw',
'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. ~ Albert Einstein',
'I have never let my schooling interfere with my education. ~ Mark Twain',
'Anyone can steer the ship when the sea is calm. ~ Publilius Syrus',
'Formal education will make you a living; self-education will make you a fortune. ~ Jim Rohn',
'Education costs money, but then so does ignorance. ~ Sir Claus Moser',
'Education makes people easy to lead, but difficult to drive; easy to govern, but impossible to enslave. ~ Henry Peter Broughan',
'It is possible to store the mind with a million facts and stil be entirely uneducated. ~ Alec Bourne',
'A teacher is one who makes himself progressively unnecessary. ~ Thomas Carruthers',
'An education isn\'t how much you have committed to memory, or even how much you know. It\'s being able to differentiate between what you know and what you don\'t. ~ Anatole France',
'Education\'s purpose is to replace an empty mind with an open one. ~ Malcolm Forbes');

var num = Math.floor((Math.random() * quotes.length)) + 1;
document.write(quotes[num]);