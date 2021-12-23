# Kata Ideas:

* story-based (come up with problem first)

### problem ideas:
* find secret word
* find your villain name 
* array of objects with strings, corrupted with numbers, remove the numbers to get original array
[
    {word: "strin456a48436++g"}
    {"strin456a48436++g"}
    {"strin456a48436++g"}
    {"strin456a48436++g"}
    {"strin456a48436++g"}
    {"strin456a48436++g"}
    {"strin456a48436++g"}
]
return a sentence

>>>> sentence has been corrupted, filter out the original sentence to 
__________________________


STARTING POINT: start with string (string needs to have " ";)  
    1.1. "words" of string are corrupted with non-letter-characters 
    1.2. "words" are reversed
RESULT: sentence that makes sense (no numbers, actual words) 


__________________________
Basic requirements for solution:
* split (" ") words into array
* remove non-letter characters of words
* revers words
* join back into string


