//Freecodecamp JavaScript Algorithms and Data Structures Certification 
//Regular Expressions summary
/*
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//To search more that one pattern just use or something like like /yes|no|maybe/
let regexOr = /yes|no|maybe/

//To ignore case like IgnoreCase igNoreCase ignorecase just add /text/i
let regexIgnore = /ignorecase/i;

//to extract match str.match()
//  'string'.match(/regex/);
//  /regex/.test('string');

//get all match in string add /g flag at the end of the regex like
let starRegex = /word/g

//get all match with different caracter in a position put a point in position example 
let regexPoint =  /hu./ //match "hug" "huh" "hut" "hum"

//Match Single Character with Multiple Possibilities use brackets [] and character
let regexMultPos = /b[aiu]g/;

//match letters of the alphabet
let bgRegex = /[a-e]at/;

//match letters and numbers
let myRegex = /[a-z0-9]/;

//Match Single Characters Not Specified
let notVowelsRegex = /[^aeiou]/;

//Match Characters that Occur One or More Times
//If a character is a side of the same character theres only a match 
let myRegex = /s+/gi;

//Match Characters that Occur Zero or More Times
let chewieRegex = /Aa*/

/*
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
*/
let myRegex = /<.*?>/;
//returns the first occurrence
// just add ^ at the beggining

//Match Ending String Patterns
// just add $ at the end

//The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]

//Inverse of \w is \W is equal to [^A-Za-z0-9_]

//Match all numbbers 
let regexAllNumbes = /\d/

//All not numbers
let regexNotANumber = /\D/

//Match whitespace
let regexWhitespace = /\s/

//All not Whitespace
let regexNotWhitespace = /\S/

//Specify Upper and Lower Number of Matches
let regexLowUpp = /a{2,4}/

//Specify only Lower Number of Matches
let regexLow = /a{2,}/

//Specify Exact Number of Matches
let regexExactNumber = /a{2}/

//With ? simbol check for all or None /favou?rite/

//Positive and Negative Lookahead
//A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
//A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.


//Check For Mixed Grouping of Characters
//Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
let regexMixedGroup = /P(engu|umpk)in/g

//Reuse Patterns Using Capture Groups
//You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings.

//To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use.
let repeatRegex = /(\w+)\s\1/;

//Use Capture Groups to Search and Replace
//Can make searching even more powerful when it also changes (or replaces) the text you match.
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

//Remove Whitespace from Start and End
let wsRegex = /^\s+|\s+$/g; 