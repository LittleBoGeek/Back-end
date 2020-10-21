# Back-end

These examples were taken from projects mainly using [Django Rest
Framework](https://github.com/tomchristie/django-rest-framework) and so the
JSON responses are often similar to the way in which DRF makes responses.

Where full URLs are provided in responses they will be rendered as if service
is running on 'http://testserver/'.

## Open Endpoints

Open endpoints require no Authentication.

# Register

Used to create a new user.

**URL** : '/api/auth/register'
**Method** : [POST]

*Request Body*

| Name              | Type    | Required | Description       |
| ----------------- | ------- |--------- | ----------------- |
| username          | String  |      Yes | Must be unique    |
| password          | String  |      Yes |                   |
| email             | String  |      Yes |                   |
| age_verified      | Boolean |      Yes | defaults to false |
| reason_for_use    | String  |      Yes |                   |
| medical_condition | String  |      Yes |                   |
| desired_effect    | String  |      Yes |                   |

*Example*

```js
{
    username: "Banana",
    password: "testing",
    email: "mail@testmail.com",
    age_verified: true,
    reason_for_use: "medicinal",
    medical_condition: "anxiety",
    desired_effect: "relaxed"
}
```
*Response*

#####201 (Created)
- If a user is successfully registered, the endpoint will return an HTTP response with status code 210, and the registered user object

#####400 (Bad Request)
- If registration information is invalid or incomplete, the endpoint will return an HTTP response with a status code of 400.

#####500 (Internal Service Error)
- If there is a server or database error, the endpoint will return an HTTP response with a status code of 500.

# Login

Used to log in and authenticate user.

**URL** : '/api/auth/login'
**Method** : [POST]

*Request Body*

| Name| Type| Required | Description|
| - | - | - | - |
| username | String  | Yes | Must match username in database.                           |
| password | String  | Yes | Must match password corresponding to username in database. |

*Example*

```js
{
    username: "Banana",
    password: "testing"
}
```
*Response*

#####200 (OK)
- If you successfully log in, the endpoint will return an HTTP response with a status code of 200, a welcome message and a JWT for the logged in user.

##### 401 (Unauthorized)
- If you provide invalid credentials, the endpoint will return an HTTP response with a status code of 401.

#####500 (Internal Service Error)
- If there is a server or database error, the endpoint will return an HTTP response with a status code of 500.

## Authenticated Endpoints

Endpoints requre authentication for logged in users.

###Get Recommendations

Used to get a list of recommended strains.

**URL** : '/api/recommendations/'
**Method** : [GET]

*Headers*

| Name| Type| Required | Description|
| - | - | - | - |
| Content-type | String  | Yes | Must be application/JSON |
| Authorization | String  | Yes | JSON web token |


*Response*

#####200 (OK)
- If recommendations are found, the endpoint will return an HTTP response with a status code of 200.

##### 404 (Not Found)
- If recommendations are not found, the endpoint will return an HTTP response with a status code of 404.

#####500 (Internal Service Error)
- If there is a server or database error, the endpoint will return an HTTP response with a status code of 500.