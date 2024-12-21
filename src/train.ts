/* Project Standarts:
- Logging standarts
- Naming standarts
    fuction, method, variable => CAMEL   goHome
    class => PASKAL                      MemberServise
    folder, file => KEBAB                      Folder-nome
    css => SNAKE                         button_style

- Error handling    

*/


/***
   Traditional API
   Rest API
   GraphQL API
   ...
 */

   /** Frontend Development:
    Traditional FD => BSSR (Admin)  => EJS
    Modern FD   => SPA (User's aplication) => REACT  
    */


/**
  Cookies:
  
   request join
   self destroy

 */

   /**
    
   Validation:

   Frontend validation
   Pipe validation
   Backend validation
   Database validation

    */


// console.log("Hello World");
/*
G.TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

@MITASK'
*/

/*
function getHighestIndex(numbers: number[]): number {
    let max: number = numbers[0];  // `max`ni birinchi element bilan boshlaymiz
    let maxIndex: number = 0;      // `maxIndex`ni 0 deb boshlaymiz

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];      // Agar hozirgi element `max`dan katta bo'lsa, `max`ni yangilaymiz
            maxIndex = i;          // `maxIndex`ni hozirgi indeksga o'zgartiramiz
        }
    }

    return maxIndex;  // Eng katta qiymatning birinchi indeksini qaytaramiz
}

// Misol:
const result = getHighestIndex([90, 71, 92, 45, 88]);
console.log(result); // 2 chiqadi, chunki 92 ning birinchi indeksi 2 ga teng

*/

/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/

/*
function getPositive(arr: number[]): string {
    // Faqat positive qiymatlarni tanlab, ularni stringga aylantiramiz
    const positiveNumbers = arr.filter(num => num > 0).map(num => num.toString());
    // Ro'yxatdagi elementlarni birlashtirib, bitta string qilib qaytaramiz
    return positiveNumbers.join('');
}

// Misol uchun:
const result = getPositive([34, -47, 827]);
console.log(result);  // Bu yerda natija "34827" bo'ladi
*/

/*
H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

@steezyworld MITASK
*/


/*
function getDigits(input: string): string {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const map = input[i];
        if (!isNaN(parseInt(map))) {  // Agar `map` raqam bo'lsa
            result += map;            // Uni natijaga qo'shamiz
        }
    }
    return result;
}

// Misol:
console.log(getDigits("m14i1t")); // "141" ni qaytaradi
*/


/***
 * TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda
 */

/*
function findLongestWord(word: string): string{
    const words =  word.split(" ");

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
};

const result = findLongestWord("I came from Uzbekistan!")
console.log(result);
*/

/***
 TASK K:

Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1

Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
bo'lganligi uchun '1'ni qaytarmoqda
 */

/** 
function countVowels(words: string): number {
    // Unli harflarni aniqlash uchun qabul qilinadigan harflar ro'yxati
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0; 

    for (let char of words) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Misol
console.log(countVowels("string")); // 1
*/

/***
 TASK L:

So'zlarni ketma - ketligini buzmasdan har bir so'zni
alohida teskarisiga o'girib beradigan fucntion tuzing.
Funtion yagona string qabul qilsin

MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda
 */

/*
function reverseSentence(words: string): string {
    return words.split(' ').map(word => word.split('').reverse().join('')).join(' ');

}

console.log(reverseSentence("Shohjahon Juraev Mekhrojidin Ugli"!));
*/


/**TASK M:

Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];
 */
/*
const getSquareNumbers = (numbers: number[]) =>
    numbers.map(num => ({ number: num, square: num * num }));
  
 
  const result = getSquareNumbers([3, 90, 87]);

  console.log(result);
  */

  /** TASK N:

Parametr sifatida yagona string qabul qiladigan function tuzing.
Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
'true' yokida 'false' qaytarsin.

MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

*Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
bir xil ma'noni beradigan so'zga aytiladi
 */

/** 
function palindromCheck(word: string): boolean {
    
    return word === word.split('').reverse().join('');
};

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
*/

/**
 * 
 * @param book TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.
 * @returns 
 */ 

/*
 
function calculateSumOfNumbers(book: any[]) { 
    let sum: number = 0; 
    for (let i: any = 0; i < book.length; i++){ 
        if (typeof book[i] === 'number'){ 
            sum += book[i]; 
        }  
    }; 
    console.log(sum); 
    return sum; 
}; 
 
calculateSumOfNumbers([12, "sss", 22]);
*/


/**
 TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
 */

/** 
function objectToArray(obj: object)  {
    return Object.entries(obj);
};

const obj = {"a": 10, "b": 20};
console.log(objectToArray(obj));
*/

/**
 * TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

 */

/*
function hasProperty(obj: object, prop: string) {
        return obj.hasOwnProperty(prop);
};

console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false
*/

/**
 TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

 */
/*
function calculate(expression: string): number | string {
    
    let parts: string[] = expression.split(' ');

    let num1: number = parseInt(parts[0]);
    let operator: string = parts[1];
    let num2: number = parseInt(parts[2]);

    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Noto'g'ri amal kiritildi!";
    }
}

console.log(calculate("1 + 3")); 
*/

/**
  TASK S

Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

MASALAN: missingNumber([3, 0, 1]); return 2

Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
'2' soni tushib qolgan
 
 */

/*
function missingNumber(array: number[]): number {
        const n = array.length;
        const totalSum = (n * (n + 1)) / 2;
        const arraySum = array.reduce((a, b) => a + b, 0);
        return totalSum - arraySum; 
    }
    
   // console.log(missingNumber([3, 0, 1]));
    console.log(missingNumber([0, 1, 4, 8, 7, 6, 2, 3]));
*/


/***
 TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

 */

/*
function chunkArray(array: number[], member: number): number[][]{
    const result: number[][] = [];

    for(let i = 0; i < array.length; i += member) {
        result.push(array.slice(i, i + member));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 3))
*/

/** 
 TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda
*/

/*
function countOccurrences(obj: any, words: string): number {
    let count = 0;

    for (const k in obj) {
        
        if (k === words) {
            count++;
        }

        if (typeof obj[k] === 'object' && obj[k] !== null) {
            count += countOccurrences(obj[k], words);
        }
    }

    return count;
} 

const example = { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 }};
console.log(countOccurrences(example, "model")); 
*/

/** 
 TASK Y

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.
 */
/*
function findIntersection(arr1: number[], arr2: number[]): number[] {
 
    return arr1.filter(value => arr2.includes(value));
  }
  
  console.log(findIntersection([1, 2, 3], [3, 2, 0])); 
 */

  
/**
 // TASK Z

Shunday function yozing. Bu function sonlardan iborat array
qabul qilsin. Function'ning vazifasi array tarkibidagi juft
sonlarni topib ularni yig'disini qaytarsin.

MASALAN:
sumEvens([1, 2, 3]); return 2;
sumEvens([1, 2, 3, 2]); return 4;

Yuqoridagi misolda, bizning funktsiya
berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.
*/

/*
function sumEvens(input: number[]) {
    const  sumEvens = input.filter( (num) => num % 2 === 0 )
             .reduce((sum, num) => sum + num, 0);

     return sumEvens;
}

console.log(sumEvens([1, 2, 3, 4, 5, 6]));
*/


/*** TASK ZA

Shunday function yozing, u array ichidagi objectlarni
'age' qiymati bo'yicha sortlab bersin.

MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

Yuqoridagi misolda, kichik raqamlar katta raqamlar tomon
tartiblangan holatda return bo'lmoqda.
 */
/*
interface Person {
    age: number;
}

function sortByAge(array: Person[]): Person[] {
    return array.sort((a, b) => a.age - b.age);
}
    */

/**
  TASK ZB

Shunday function yozing, uni 2 ta number parametri bolsin
va berilgan sonlar orasidan random raqam return qilsin
MASALAN: randomBetween(30, 50) return 45

Shunday function yozing, uni 2'ta number parametri bo'lsin.
Va berilgan sonlar orasidan random raqam returnb qilsin.

MASALAN: randomBetween(30, 50) return 45;

Yuqoridagi misolda, argument sifatida ikkita raqam, '30' va '45'
berilmoqda, function'ning vazifasi, shu ikkala son orasidan
random raqamni topib qaytarmoqda.
 */
/**
 function randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(30, 50));  // Masalan, 45 qaytarishi mumkin
console.log(randomBetween(1, 100));  // Masalan, 73 qaytarishi mumkin
console.log(randomBetween(-10, 10)); // Masalan, -2 qaytarishi mumkin

 */


/** 
 TASK ZC

Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

MASALAN: celsiusToFahrenheit(0) return 32;
MASALAN: celsiusToFahrenheit(10) return 50;

Yuqoridagi misolda, 0°C, 32°F'ga teng.
Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

°C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.
 */

/*
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(10));  // 50
console.log(celsiusToFahrenheit(25));  // 77
console.log(celsiusToFahrenheit(-10)); // 14
*/

/**
 TASK ZD

Shunday function yozing. Bu function o'ziga, parametr sifatida
birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
yangilangan arrayni qaytarsin.

MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
yangilangan arrayni qaytarmoqda.
 */
/*
function changeNumberInArray(num: number, arr: number[], num2: number ) {
    let raqamAlishtirish = num;
    
    if (raqamAlishtirish >= 0 && raqamAlishtirish < arr.length) {
        arr[raqamAlishtirish] = num2;
    }
    
    return arr;
}
    */

/**
 TASK ZE

Shunday function yozing, uni yagona string parametri mavjud bo'lsin.
Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
qiymatni qaytarsin.

MASALAN: removeDuplicate('stringg') return 'string'

Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
qaytarmoqda.

 */

/*
function removeDuplicate(word: string) {
    const natija = new Set(word);

    return Array.from(natija).join('');
}


console.log(removeDuplicate("oliy maqsad sari olg'a!"));
*/

/**
 TASK ZG

String sifatida berilgan string parametrni
snake case'ga o'tkazib beradigan function yozing.

MASALAN: convertToSnakeCase('name should be a string')
return 'name_should_be_a_string'

 */

/*
function convertToSnakeCase(words: string): string{ 
    const natija =  words.toLowerCase();

    const snakeCased = natija.replace(/\s+/g, '_');
    return snakeCased;
}

console.log(convertToSnakeCase("Abu Rayhon Beruniy"));
*/

/**
 *TASK ZH

Shunday function yozing, u berilgan array parametri ichidagi
raqamlar orasidan, tartib bo'yicha eng kichik raqamdan, eng katta raqamgacha
tushirib qoldirilgan sonlarni o'zinigina topib bir array sifatida qaytarsin.
  
MASALAN: findDisappearedNumbers([1, 3, 4, 7]); return [2, 5, 6];

Yuqoridagi misolda, eng katta raqam bu 7 va eng kichik raqam bu 1.
Function'ning vazifasi berilgan sonlar ichidan tushirib qoldirilgan
sonlarnigina topib qaytarmoqda.
 */

/*
function findDisappearedNumbers(arr: number[]): number[] {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
      const fullRange = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  
    const missingNumbers = fullRange.filter(num => !arr.includes(num));
  
    return missingNumbers;
  }
  
  const result = findDisappearedNumbers([1, 3, 4, 7]);
  console.log(result); 
  */

  /**TASK ZI

Shundan function yozing, bu function 3 soniydan so'ng
"Hello World!" so'zini qaytarsin.

MASALAN: delayHelloWorld("Hello World"); return "Hello World"; */

/*
function delayHelloWorld(input: string) {
    let word = setTimeout(() => {
        console.log(input);
      }, 3000);
      return word;
}

console.log(delayHelloWorld("olma"));
*/

/**
 TASK ZJ:

Shunday function yozing, u berilgan array ichidagi
raqamlarni qiymatini hisoblab qaytarsin.

MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

Yuqoridagi misolda, array nested bo'lgan holdatda ham,
bizning function ularning yig'indisini hisoblab qaytarmoqda.
 */


    function reduceNestedArray(arr: any[]): number {
        return arr.flat(Infinity).reduce((sum, num) => sum + (typeof num === "number" ? num : 0), 0);
      }
      
      
      console.log(reduceNestedArray([1, [1, 2, [4]]])); 
    