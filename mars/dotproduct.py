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

if (len(sys.argv) - 1) != 2:
    print('Missing arguments. Expected 2, but found 1.')
    hasError = True
else:
    arg1Length = len(sys.argv[1])
    arg2Length = len(sys.argv[2])

if not hasError and (arg1Length == 0 or arg2Length == 0):
    print('Invalid user input: a list was empty.')
    hasError = True

if not hasError:
    try:
        list1 = [float(x) for x in sys.argv[1].split(',')]
        list2 = [float(x) for x in sys.argv[2].split(',')]
    except ValueError:
        print('Invalid user input: a list entry was not a number.')
        hasError = True

if not hasError and (len(list1) != len(list2)):
    print('Invalid user input: lists do not match in length.')
    hasError = True

if not hasError:
    try:
        print(calculateDotProduct(list1, list2))
    except ValueError as e:
        print(str(e))
    except Exception as e:
        print('Something went wrong: ' + str(e) + '.')
        sys.stdout.flush()
        sys.exit(1)

sys.stdout.flush()
sys.exit(0)
