import { Sorter } from './Sorter';
import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);

// const characterCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);

// const linkedlist = new LinkedList();
// linkedlist.add(500);
// linkedlist.add(-10);
// linkedlist.add(-3);
// linkedlist.add(4);

// const sorter = new Sorter(linkedlist);
// sorter.sort();
// linkedlist.print();
