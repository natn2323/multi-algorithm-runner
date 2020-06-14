# **Manual Tests for the prime number checker algorithm**

**Test Case 1**
1. Attempt to pass in only negative integers as inputs. The data shall be in JSON format with four properties, "prime", "non-prime", "hasError" and "message". The property "prime" shall contain the correct response 'null' while "non-prime" shall contain all the negative integers in a list. "hasError" shall be 'false' and "message" shall state 'At least one negative number was inputted, but only the non-negative numbers will be considered.'

**Test Case 2**
1. Attempt to pass in a list with a mix of negative integers and positive integers as inputs such as [-1,-2,2,3,100]. The data shall be in JSON format with four properties "prime", "non-prime", "hasError" and "message". The property "prime" shall contain the correct response '2,3' while "non-prime" shall contain '-1,-2, 100'. The property "hasError" shall be 'false' and "message" shall state 'At least one negative number was inputted, but only the non-negative numbers will be considered.'

**Test Case 3**
1. Attempt to pass in an empty list " " as an input. The data shall be in JSON format with four properties, "prime", "non-prime", "hasError" and "message". The properties "prime" and "non-prime" shall contain the correct response 'null' while "hasError" will contain the response 'true' and the "message" 'Invalid user input: a list was empty.'

