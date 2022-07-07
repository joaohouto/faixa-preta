# Faixa Preta Backend

--

## Models

### Activity

An activity is a group of moves that will be executed by the user. Each move of the activity has a repetition number that must be higher or equal to 1.

Activity model

| Field    | Data type |
| -------- | --------- |
| name     | string    |
| details  | string    |
| tags     | [string]  |
| imageUrl | string    |
| moves    | [object]  |

Activity's move model

| Field       | Data type |
| ----------- | --------- |
| move_id     | string FK |
| repetitions | number    |

### Move

Move model

| Field    | Data type |
| -------- | --------- |
| name     | string    |
| details  | string    |
| tags     | [string]  |
| imageUrl | string    |
| moves    | [object]  |

User
