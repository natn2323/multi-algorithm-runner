import json
import sys

def isPrimeNo(num):

    """ 
    Description: checks if an number is prime or not
    
    Input: a number
    
    Returns: True if number input is prime and False otherwise 

    Example command: python isprimeno.py '100' 
    """
    if num < 0:
        return False

    if num == 0 or num == 1:
        return False 
        
    if num == 2:
        return True

    if num > 2 and num % 2 == 0:
        return False

    else:
        for i in range(3, int(num**0.5)+1, 2):
            if num % i == 0:
                return False
        return True
                
def primeInList(list1):
    """
    Description: Checks given list for prime numbers and states which ones are prime
        
    Input: list1 - a list of numbers

    Returns: A tuple containing two lists, one list containing all the prime inputs and another containing all the non-
    prime inputs.

    Example command: python primeinlist.py '1,2,3,4' 
    """
    Prime = []
    NotPrime = []
    for i in range(len(list1)):
        isPrimeNo(list1[i])
        
        if isPrimeNo(list1[i]) == True:
            Prime.append(list1[i])
        else:
            NotPrime.append(list1[i])  

    return Prime, NotPrime   

jsonData = { 'prime': None, 'non-prime': None, 'message': None, 'hasError': False }

if (len(sys.argv) - 1) != 1:
    jsonData['message'] = 'Missing arguments. Expected 1, but found none.'
    jsonData['hasError'] = True
 
if not jsonData['hasError']:
    try: 
        list1 = [int(x) for x in sys.argv[1].split(',')]
    except ValueError:
        jsonData['message'] = 'Invalid user input: an entry was not a number.'
        jsonData['hasError'] = True
  
if not jsonData['hasError'] and len(list1) == 0:
    jsonData['message'] = 'Invalid user input: a list was empty.'
    jsonData['hasError'] = True

if not jsonData['hasError'] and any(element < 0 for element in list1):
    jsonData['message'] = 'At least one negative number was inputted, but only the non-negative numbers will be considered.'
    
if not jsonData['hasError']:
    try: 
        primeList, nonPrimeList = primeInList(list1)
        jsonData['prime'] = primeList
        jsonData['non-prime'] = nonPrimeList
    except ValueError as e:
        jsonData['message'] = str(e)
        jsonData['hasError'] = True
    except Exception as e: 
        jsonData['message'] = 'Something went wrong: ' + str(e) + '.'
        jsonData['hasError'] = True
        print(json.dumps(jsonData))
        sys.stdout.flush()
        sys.exit(1)

print(json.dumps(jsonData))
sys.stdout.flush()
sys.exit(0)
