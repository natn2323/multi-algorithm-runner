import sys 

def DotProduct(list1, list2):
    """Description: Function to calculate dot products of given lists of numbers.
    Input:
        - list1 - a List containing numbers
        - list2 - a List containing numbers
    Output:
        - return a number (ex. 12.0)
    Example command:
        - python dotproduct.py '1,2,3' '2,3,4'
    """

    if len(list1) != len(list2):
        raise ValueError("The lists don't match in length.")

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
try:
    list1 = [float(x) for x in sys.argv[1].split(',')]
    list2 = [float(x) for x in sys.argv[2].split(',')]
except ValueError:
    print('Invalid user input: an input was not a number.')
    hasError = True
except:
    print('Invalid user input.')
    hasError = True

if hasError is False:
    try:
        print(DotProduct(list1, list2))
    except Exception as e:
        print('Something went wrong: ' + str(e))

    sys.stdout.flush()
    sys.exit(0)
else:
    sys.stdout.flush()
    sys.exit(1)
