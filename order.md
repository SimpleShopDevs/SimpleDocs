---
endpoint: /order
---

# Order API

## Create Order

Create an order for processing.

```http
POST {{{endpoint}}}
```

### Headers

```http
Authorization: YOUR_API_KEY
Content-Type: application/json
```

### Request Body

```json
{
	"inviteCode": "discord invite code",
	"amount": "amount boost"
}
```

### Response

| Parameter  | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| id         | string | Order UUID                            |
| inviteCode | string | Server invite code                    |
| amount     | number | Number of boosts                      |
| price      | number | Price for boosts                      |
| status     | enum   | [Current order status](/en/status.md) |
| createdAt  | date   | Creation date                         |

```json
{
	"status": true,
	"data": {
		"id": "UUID",
		"inviteCode": "simpleNitro",
		"amount": 10,
		"price": 560,
		"status": "PENDING",
		"createdAt": "2025-10-20T00:00:00Z"
	}
}
```

## Get Order Information

Retrieve information about an order.

```http
GET {{{endpoint}}}/:id
```

### Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| id        | string | Yes      | Order UUID  |

### Headers

```http
Authorization: YOUR_API_KEY
Content-Type: application/json
```

### Response

| Parameter  | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| id         | string | Order UUID                            |
| inviteCode | string | Server invite code                    |
| amount     | number | Number of boosts                      |
| price      | number | Price for boosts                      |
| status     | enum   | [Current order status](/en/status.md) |
| createdAt  | date   | Creation date                         |

```json
{
	"status": true,
	"data": {
		"id": "UUID",
		"inviteCode": "simpleNitro",
		"amount": 10,
		"price": 560,
		"status": "PENDING",
		"createdAt": "2025-10-20T00:00:00Z"
	}
}
```
