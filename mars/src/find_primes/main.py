from flask import jsonify, make_response
from typing import List

import json

def is_prime_number(num):
    """Checks if a number is prime or not.
    Args: 
        num: an integer
    Returns:
        A boolean: True if input number is prime, and False otherwise
    """
    if type(num) == int:
        if num < 2:
            return False
        elif num == 2:
            return True
        elif num > 2 and num % 2 == 0:
            return False
        else:
            for i in range(3, int(num**0.5)+1, 2):
                if num % i == 0:
                    return False
            return True
    else:
        return False
                
def separate_prime_and_non_primes(list1):
    """Checks given list for prime numbers.
    Args:
        list1: a List containing numbers
    Returns: 
        A tuple: contains a list of prime input numbers and a list of non-prime input numbers.
    """
    primes = []
    non_primes = []
    for i in range(len(list1)):
        if is_prime_number(list1[i]):
            primes.append(list1[i])
        else:
            non_primes.append(list1[i])  

    return (primes, non_primes)

def find_primes(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    # Object that gets passed back to server
    response_json = { 
        'data': {
            'primes': None, 
            'non_primes': None, 
            'message': None, 
            'has_error': False
        }
    }

    primes = None
    non_primes = None
    error_message = None
    has_error = False

    # Parse data into JSON
    request_json = request.get_json()

    # List is retrieved
    list1 = request_json['data'].get('list1')

    if type(list1) != list:
        error_message = 'Invalid user input: expected a list.'
        has_error = True

    if not has_error and (len(list1) == 0):
        error_message = 'Invalid user input: the list was empty.'
        has_error = True

    if not has_error and any(type(element) == float for element in list1):
        # Allow for decimal numbers in the list, but don't consider them
        error_message = 'At least one decimal number was inputted, and all decimal numbers are non-prime.'
       
    if not has_error and any(element < 0 for element in list1):
        # Allow for negative numbers in the list, but don't consider them
        error_message = 'At least one negative number was inputted, and all negative numbers are non-prime.'
        
    if not has_error:
        try: 
            primes, non_primes = separate_prime_and_non_primes(list1)
        except ValueError as e:
            error_message = str(e)
            has_error = True
        except Exception as e: 
            error_message = 'Something went wrong: ' + str(e) + '.'
            has_error = True

    response_json['data']['primes'] = primes
    response_json['data']['non_primes'] = non_primes
    response_json['data']['message'] = error_message
    response_json['data']['has_error'] = has_error

    return make_response(jsonify(response_json))
