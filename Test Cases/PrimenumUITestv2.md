# **Manual Tests for the updated prime number checker UI 

**Test Case 1**
1. Attempt to pass in only negative integers as inputs. All the outputs shall be identified as non-prime and shall include the error message: At least one negative number was inputted, but only the non-negative numbers will be considered.

**Test Case 2**
1. Attempt to pass in a set of twenty numbers in total including both negative integers and positive numbers close to the maximum permissible number (i.e. 1000000). The result shall be accurate and computed in an reasonable amount of time (e.g. less than a minute)

**Test Case 3**
1. Attempt to pass in a set of decimal numbers as inputs. Either the output shall correctly identify these numbers as non-prime or the UI shall not allow for decimal numbers to be inputted.