[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754435&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The best-case run time means the list is already sorted so it will take $\Theta(n)$ time as it will check every variable.
The worst-case of a systematic permutation sort would be $\Theta(n(n!))$ as the main loop will run $n$ times to check each number while the permutation loop will run through $n!$ times in order to obtain every possible permutation

A random permutation sort, something like bogo sort would have the same best case but the worst case would be technically infinite as there is a random chance where it will never actually find the sorted permutation as with randomness, we can get duplicate permutations already seen before.