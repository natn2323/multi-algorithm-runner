import json
import sys

def calculateDotProduct(list1, list2):
    """
    Description: Function to calculate dot products of given vectors.
    
    Input:
        - list1 - a List containing numbers
        - list2 - a List containing numbers

    Returns: A number.

    Example command for CLI: python dotproduct.py '1,2,3' '2,3,4'
    """

    # Establish a variable to keep track of the running-sum
    S = []  
    Prod = []

    # Loop over the length of one of the given lists
    for i in range(len(list1)):
        # Calculate the product of the elements at the same index in each list
        # Add the product to the running-sum variable
        Prod.append(list1[i]*list2[i])
        S=sum(Prod)
    
    # Return the running-sum variable
    return S

hasError = False
arg1Length = arg2Length = 0

# Object that gets passed to server
jsonData = { 'data': None, 'message': None }

if (len(sys.argv) - 1) != 2:
    jsonData['message'] = 'Missing arguments. Expected 2, but found 1.'
else:
    arg1Length = len(sys.argv[1])
    arg2Length = len(sys.argv[2])

if not jsonData['message'] and (arg1Length == 0 or arg2Length == 0):
    jsonData['message'] = 'Invalid user input: a list was empty.'
if not jsonData['message']:
    try:
        list1 = [float(x) for x in sys.argv[1].split(',')]
        list2 = [float(x) for x in sys.argv[2].split(',')]
    except ValueError:
        jsonData['message'] = 'Invalid user input: a list entry was not a number.'

if not jsonData['message'] and (len(list1) != len(list2)):
    jsonData['message'] = 'Invalid user input: lists do not match in length.'

if not jsonData['message']:
    try:
        jsonData['data'] = calculateDotProduct(list1, list2)
    except ValueError as e:
        jsonData['message'] = str(e)
    except Exception as e:
        jsonData['message'] = 'Something went wrong: ' + str(e) + '.'
        print(json.dumps(jsonData))
        sys.stdout.flush()
        sys.exit(1)

print(json.dumps(jsonData))
sys.stdout.flush()
sys.exit(0)
