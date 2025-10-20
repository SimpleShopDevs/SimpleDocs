---
endpoint: /user
---

# User API

## Получить пользователя

Получение информации о авторизированном пользователе.

```http
GET {{{endpoint}}}
```

### Заголовки

```http
Authorization: YOUR_API_KEY
Content-Type: application/json
```

### Ответ

| Параметр  | Тип    | Описание                |
| --------- | ------ | ----------------------- |
| id        | number | TelegramId пользователя |
| balance   | number | Баланс пользователя     |
| createdAt | date   | Дата регистрации в API  |

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
