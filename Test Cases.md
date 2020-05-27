---


---

<h1 id="manual-testing-plans-for-the--server-script-interface"><strong>Manual testing plans for the  server-script interface</strong></h1>
<p><strong>Test Case 1:</strong><br>
Step 1: Send a POST request with “1,2,3” and “2,3,4”. The value, 20, shall be contained in the response.</p>
<p><strong>Test Case 2:</strong><br>
Step 1: Send a POST request with “1,2,3” and “2,3,4”. The data shall be returned in JSON format, with 2 properties, “data” and “message”. “data” shall contain the correct response, 20, while “message” shall have the value of null, i.e. {“data”: 20, “message”: null}.</p>
<p><strong>Test Case 3:</strong><br>
Step 1: Send in a POST request with “1,2,3,4,5” and “2,3,3,2”. The data shall be returned in JSON format, with 2 properties, “data” and “message”. “data” shall contain the correct response, “null”, while “message” shall have the value of “Something went wrong: The lists don’t match in length”, i.e. {“data”: null, “message”: “…”}</p>
<p><strong>Test Case 4:</strong><br>
Step 1: Send in a POST request with either " " and " " (i.e. two empty lists) or " " and “1,2” (i.e. some list of numbers). The data shall be returned in JSON format, with 2 properties, “data” and “message”. “Data” shall contain the correct response, “null”, while “message” shall have the value of “Invalid user input: an input was not a number”.</p>
<p><strong>Test Case 5:</strong><br>
a)  Step 1: Send in a POST request with  “a, b, c” and “2 ,1, 1” . The data shall be returned in JSON format in exactly the same manner as Test Case 4 where “data” shall contain the correct response “null” and the message shall have the value of “Invalid user input: an input was not a number”</p>
<p>b) Step 1: Send in a POST request with " 2, 3, 4+3i  and “2 ,1, 1” . The data shall be returned in JSON format in exactly the same manner as Test Case 4 where “data” shall contain the correct response “null” and the message shall have the value of “Invalid user input: an input was not a number”</p>

