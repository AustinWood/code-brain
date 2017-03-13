# API Endpoints

## HTML API

### Root

| Method | Path | Action |
|--------|------|--------|
| GET    | /    | #root  |

## JSON API

### Users

| Method |         Path         |  Action |
|--------|----------------------|---------|
| POST   | /api/users           | #create |
| PATCH  | /api/users           | #update |

### Session

| Method |     Path     |  Action  |
|--------|--------------|----------|
| POST   | /api/session | #create  |
| DELETE | /api/session | #destroy |

### Notes

| Method |      Path      |  Action  |
|--------|----------------|----------|
| GET    | /api/notes     | #index   |
| POST   | /api/notes     | #create  |
| GET    | /api/notes/:id | #show    |
| PATCH  | /api/notes/:id | #update  |
| DELETE | /api/notes/:id | #destroy |

### Tags

| Method |               Path                 | Action   |
|--------|------------------------------------|----------|
| GET    | /api/tags                          | #index   |
| POST   | /api/tags                          | #create  |
| DELETE | /api/tags/:id                      | #destroy |
| POST   | /api/notes/:note_id/tags           | #create  |
| DELETE | /api/notes/:note_id/tags/:tag_name | #destroy |
