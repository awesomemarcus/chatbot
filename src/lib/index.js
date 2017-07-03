let quotes = [
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "We accept the love we think we deserve.",
  "It is better to be hated for what you are than to be loved for what you are not.",
  "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
  "And in her smile I see something more beautiful than the stars.",
  "It’s one thing to fall in love. It’s another to feel someone else fall in love with you, and to feel a responsibility toward that love.",
  "I love you the way a drowning man loves air. And it would destroy me to have you just a little.",
  "When someone loves you, the way they talk about you is different. You feel safe and comfortable.",
  "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds. And that's what you've given me. That's what I'd hoped to give you forever",
];

export const getQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
