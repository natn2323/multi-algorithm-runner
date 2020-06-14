from flask import jsonify, make_response
from typing import List

import json

def calculate_dot_product(list1: List, list2: List):
    """Function to calculate dot products of given vectors.
    Args:
        list1: a List containing numbers
        list2: a List containing numbers
    Returns: 
        A number.
    """
    # Establish a variable to keep track of the running-sum
    running_sum = 0

    # Loop over the length of one of the given lists
    for i in range(len(list1)):
        # Calculate the product of the elements at the same index in each list
        # Add the product to the running-sum variable
        running_sum += list1[i] * list2[i]
    
    return running_sum

def dot_product(request):
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
            'value': None, 
            'message': None
        }
    }

    value = None
    error_message = None

    # Parse data into JSON
    request_json = request.get_json()

    # Lists are retrieved
    list1 = request_json['data'].get('list1')
    list2 = request_json['data'].get('list2')

    if type(list1) != list or type(list2) != list:
        error_message = 'Invalid user input: expected vectors.'

    if not error_message and (len(list1) == 0 or len(list2) == 0):
        error_message = 'Invalid user input: a vector was empty.'

    if not error_message and (len(list1) != len(list2)):
        error_message = 'Invalid user input: vectors do not match in length.'

    if not error_message:
        try:
            list1 = [float(x) for x in list1]
            list2 = [float(x) for x in list2]
        except ValueError:
            error_message = 'Invalid user input: a vector entry was not a number.'
        
    if not error_message:
        try:
            value = calculate_dot_product(list1, list2)
        except ValueError as e:
            error_message = str(e)
        except Exception as e:
            error_message = 'Something went wrong: ' + str(e) + '.'

    response_json['data']['value'] = value
    response_json['data']['message'] = error_message

    return make_response(jsonify(response_json))
