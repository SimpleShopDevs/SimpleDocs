---
endpoint: /order
---

# Order API

## Создать заказ

Создать заказ для выполнения.

```http
POST {{{endpoint}}}
```

### Заголовки

```http
Authorization: YOUR_API_KEY
Content-Type: application/json
```

### Тело запроса

```json
{
	"inviteCode": "discord invite code",
	"amount": "amount boost"
}
```

### Ответ

| Параметр   | Тип    | Описание                               |
| ---------- | ------ | -------------------------------------- |
| id         | string | UUID Заказа                            |
| inviteCode | string | Инвайт-код приглашения на сервер       |
| amount     | number | Количество бустов                      |
| price      | number | Цена за бусты                          |
| status     | enum   | [Текущий статус заказа](/ru/status.md) |
| createdAt  | date   | Дата оформления                        |

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

## Информация об заказе

Получаем информацию о заказе.

```http
GET {{{endpoint}}}/:id
```

### Параметры

| Параметр | Тип    | Обязательный | Описание    |
| -------- | ------ | ------------ | ----------- |
| id       | string | Да           | UUID заказа |

### Заголовки

```http
Authorization: YOUR_API_KEY
Content-Type: application/json
```

### Ответ

| Параметр   | Тип    | Описание                               |
| ---------- | ------ | -------------------------------------- |
| id         | string | UUID Заказа                            |
| inviteCode | string | Инвайт-код приглашения на сервер       |
| amount     | number | Количество бустов                      |
| price      | number | Цена за бусты                          |
| status     | enum   | [Текущий статус заказа](/ru/status.md) |
| createdAt  | date   | Дата оформления                        |

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
