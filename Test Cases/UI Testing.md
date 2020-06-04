# **Manual testing plans for the UI (Initial)**

**UI Response Testing**

1. Attempt to add some values into vector 1 and vector 2, then click add rows and reset rows. When attempting to enter in values, the individual inputting process for each vector entry shall be maintained. 

2. 

a) Attempt to add a negative number of rows and observe what happens to the output. There shall be an error message  saying, "you've entered an invalid number of rows"

b) Attempt to add a negative number of rows and then attempt to delete the added rows to observe what happens. There shall be an error message saying, "you've entered an invalid number of rows"

3.
  a) Attempt to add -0 rows to vector 1 and vector 2. There shall be no response from the UI and both of the vectors shall be unchanged in entries
  b) Attempt to add a decimal number of rows (e.g. 10.2). There shall be an error message "you've entered an invalid number of rows" and the UI for the vectors shall remain unchanged

***Input testing***

1. Attempt to input letters as entries in either vector. Neither vector shall allow for strings as entries and there shall be no error message from the UI
