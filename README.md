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

*Response*

201 (Created)
- If a user is successfully registered, the endpoint will return an HTTP response with status code 210, and the registered user object

400 (Bad Request)
- If registration information is invalid or incomplete, the endpoint will return an HTTP response with a status code of 400.

500 (Internal Service Error)
- If there is a server or database error, the endpoint will return an HTTP response with a status code of 500.

