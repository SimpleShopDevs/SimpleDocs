# Error Handling

## Common Status Codes

| Status Code | Description                             |
| ----------- | --------------------------------------- |
| 400         | Bad Request - Invalid input data        |
| 401         | Unauthorized - Invalid token            |
| 404         | Not Found - User not found              |
| 429         | Too Many Requests - Rate limit exceeded |

## Internal Error Codes

| Code  | Description                  |
| ----- | ---------------------------- |
| 10001 | Unknown invite link          |
| 10002 | Server access by application |

## Error Response Format

```json
{
	"status": false,
	"error": {
		"message": "Unknown invite link",
		"code": 10001
	}
}
```
