# DIR Tree

![DIR Tree example](https://github.com/karthisgk/dir-tree/blob/main/assets/screenshot1.png?raw=true)

HTML:
```html
<script src="js/jquery.min.js"></script>
<script src="js/satti-dir-tree.js"></script>
```

JAVA-SCRIPT
```javascript
let data = [
    {
        "_id": "role1",
        "name": "Role1",
        "children": [
            {
                "_id": "role11",
                "name": "Role11",
                "children": [
                    {
                        "_id": "role111",
                        "name": "Role111",
                        "children": []
                    },
                    {
                        "_id": "role112",
                        "name": "Role112",
                        "children": []
                    }
                ]
            },
            {
                "_id": "role12",
                "name": "Role12",
                "children": [
                    {
                        "_id": "role121",
                        "name": "Role121",
                        "children": []
                    },
                    {
                        "_id": "role122",
                        "name": "Role122",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "_id": "role2",
        "name": "Role2",
        "children": [
            {
                "_id": "role21",
                "name": "Role21",
                "children": []
            },
            {
                "_id": "role22",
                "name": "Role22",
                "children": []
            }
        ]
    }
]
$(document).ready(async function(){
    $("#dir-tree").dirTree({
        data: data
    })
})
'''

##Options:
- `action`: boolean true or false, default true
- `multipleDelete`: boolean true or false, default true
- `data`: object array contains "(_id, name, children)"
- `addChild`: function that returns "_id"
- `expandCollapseAnimationDuration`: number, default 100
- `edit`: function that returns "_id"
- `delete`: function that returns "_id"