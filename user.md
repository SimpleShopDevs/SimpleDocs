---
endpoint: /user
---

# User API

## Get User

Get information about the authorized user.

```http
GET {{{endpoint}}}
```

### Headers

```http
Authorization: YOUR_API_KEY
Content-Type: application/json
```

### Response

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| id        | number | User's Telegram ID    |
| balance   | number | User's balance        |
| createdAt | date   | API registration date |

```json
{
	"status": true,
	"data": {
		"id": "TelegramId",
		"balance": 0,
		"createdAt": "2025-10-20T00:00:00Z"
	}
}
```
