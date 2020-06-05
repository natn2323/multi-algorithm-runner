# **Manual testing plans for the UI (Final)**

***UI testing***

1. Attempt to add some values into vector 1 and vector 2, then click add rows and reset rows. When attempting to enter in values, the individual inputting process for each vector entry shall be maintained. 

2. 
a) Attempt to add a negative number of rows and observe what happens to the output. There shall be no response from the UI and both vectors shall remain unchanged in their entries

b) Attempt to add a negative number of rows and then attempt to delete the added rows. There shall be no response from the UI and both vectors shall remain unchanged in their entries

3. 
a) Attempt to add -0 rows to vector 1 and vector 2. There shall be no response from the UI and both vectors shall remain unchanged in their entries

b) Attempt to add a decimal number of rows (e.g. 10.2). There shall be no response from the UI and both vectors shall remain unchanged in their entries

***Input testing***

1. Attempt to input letters as entries in either vector. Neither vector shall allow for strings as entries and there shall be no error message from the UI

2. Attempt to input variable amounts of "--" dashes into entries for either vector 1 and vector 2. There shall be no dot product calculation and an error message will display saying "Invalid user input: a list entry was not a number."