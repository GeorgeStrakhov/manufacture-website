#Сайт мануфактуры

Концепция
=========
Быть простыми, понятными и нормально рассказать о себе.
Сделать рассказ "вложенным". Чтобы можно было охарактеризовать себя одним предложением, а дальше разложить детали для интересующихся.
Вложить несколько "цепляущих моментов", чтобы вовлечь людей и показать как мы умеем.

Стиль
=====
Clean & Simple

Реализация
==========
Bootstrap + BackBone?
Concept: "telescopic" information. browsing within one page.
Levels of information are represented by blocks on a page.

Node Level 0 (topline) information is always available.

every click on a link -> function (
* detect the level from the which level the link is coming from
* apply changes to 'this'
* find & hide all this.
)

IF (you click on a link on Node level X)
THEN (
* current Node level X block changes color
* current link that was clicked changes color
* all the currently visible blocks for Nodes levels > X are destroyed
* a new block for Node level X+1 is created and filled with content corresponding to that link
)

Source: XML(?) of JSON(?)

e.g.
    {
        "title": "Мануфактура Социальных Коммуникаций",
        "content": {
            "type": "hypertext",
            "content": [
                {
                    "content": "Привет!",
                    "style": "h1",
                    "children": [
                        {
                            "type": "hypertext",
                            "content": [
                                {
                                    "content" : "А Вы кто?",
                                    "style": "h1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "content": "Мы - "
                },
                {
                   "content": "Мануфактура Социальных Коммуникаций."
                }
            ]
        }
    }