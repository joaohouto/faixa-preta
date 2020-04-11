## Faixa Preta - Backend

API que alimenta a aplicação móvel do Faixa Preta. Gerencia um banco não relacional MongoDB com ajuda do pacote _mongoose_ (também é utilizado o _mongoose-paginate_ para organizar os dados de atividades e movimentos).

#### Activity

Model destinado aos treinos/atividades.

-_name_: String
-_details_: String 
-_tags_: [ String ]
-_image_: String
-_moves_: [
    _moveId_: String, 
    _repetitions_: Number
]

#### Move

Model destinado aos movimentos/grupo de exercícios que compoem as Activities.

-_name_: String
-_category_: String
-_details_: String 
-_videoUrl_: [ String ]
-_image_: String
-_difficulty_: Number


### Guia de início rápido

`npm install` para instalar as dependências do projeto e `yarn dev` para rodar.