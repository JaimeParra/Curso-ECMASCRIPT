const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Banana, kiwi, orange, etc'

for (const match of fruits.matchAll(regex))
{
    console.log(match);
}

