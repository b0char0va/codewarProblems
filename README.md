# codewarProblems

1) Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
   
   # Example 1: 
   a1 = ["arp", "live", "strong"]
   
   a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
   
   returns ["arp", "live", "strong"]
   
   # Example 2: 
   a1 = ["tarp", "mice", "bull"]
   
   a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
   
   returns []
   
   <br/>
   
2) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized. <br/>
3) Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. <br/>
4) Build Tower by the following given argument: number of floors (integer and always greater than 0).

  # Example : 3 floor tower
   [<br/>
    '  *  ',<br/>
    ' *** ',<br/>
    '*****'<br/>
  ]
  
  <br/>
5) Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.<br/>
6) Convert seconds into HH:MM:SS. <br/>
7) Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. <br/>
    
  # Example :anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
    
  <br/>

8) Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
   # Example 1: 
   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
   
   #Example 2: dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []