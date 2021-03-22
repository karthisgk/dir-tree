(function($){
    $.fn.dirTree = function(options){
        let settings = {
            name: "satti-dir-tree",
            forNameClassName: "data-name",
            bgClasssName: "satti-bg",
            collapseClassName: "bg-collapse",
            expandClassName: "bg-expand",
            noChildClassName: "bg-no-child",
            childrensClassName: "childrens",
            actionParentClassName: "action-parent",
            addChildClassName: "add-child",
            editClassName: "st-edit",
            deleteClassName: "st-delete",
            expandCollapseAnimationDuration: options.expandCollapseAnimationDuration || 100
        }, self = this;
        (function(){
            $("head").append(`
            <style>
            .${settings.name} li{
                list-style: none;
                padding: 5px;
                padding-right: 0;
            }
            
            .${settings.name} li.${settings.forNameClassName} {
                position: relative;
            }
            
            .${settings.name} li.${settings.forNameClassName} span {
                padding-left: 25px;
            }
            
            .${settings.name} > ul {
                padding: 0;
            }
            
            .${settings.name} .${settings.bgClasssName} {
                width: 13px;
                height: 13px;
                position: absolute;
                left: 14px;
                top: 14px;
            }
            
            .${settings.name} .${settings.bgClasssName}.${settings.expandClassName} {
                background: url(/assets/icons/plus-square-regular.svg) no-repeat;
            }
            
            .${settings.name} .${settings.bgClasssName}.${settings.noChildClassName} {
                background: url(/assets/icons/square-regular.svg) no-repeat;
            }
            
            .${settings.name} .${settings.bgClasssName}.${settings.collapseClassName} {
                background: url(/assets/icons/minus-square-regular.svg) no-repeat;
            }
            
            .${settings.name} .${settings.actionParentClassName} {
                display: flex;
                border-radius: 5px;
                padding: 5px;
            }
            
            .${settings.name} .${settings.actionParentClassName}:hover {
                cursor: pointer;
                background: #e3edef;
            }
            
            .${settings.name} .${settings.actionParentClassName} > div{
                display: none;
                width: 13px;
                height: 13px;
                margin-top: 3px;
                margin-left: 10px;
            }
            .${settings.name} .${settings.actionParentClassName}:hover > div {
                display: block;
            }
            
            .${settings.name} .${settings.addChildClassName} {
                background: url(/assets/icons/plus-solid.svg) no-repeat;
            }
            
            .${settings.name} .${settings.editClassName} {
                background: url(/assets/icons/edit-regular.svg) no-repeat;
            }
            
            .${settings.name} .${settings.deleteClassName} {
                background: url(/assets/icons/trash-alt-regular.svg) no-repeat;
            }
            </style>
            `)
        })()
        let fn = (childrens) => {
            let ul = $(`<ul><ul>`)
            childrens.forEach(r => {
                r.children = r.children || []
                let liName = $(`<li></li>`), span = $(`<span>${r.name}</span>`),icon = $(`<div></div>`)
                let action = {
                    addChild: $(`<div class="${settings.addChildClassName}"></div>`),
                    edit: $(`<div class="${settings.editClassName}"></div>`),
                    delete: $(`<div class="${settings.deleteClassName}"></div>`)
                }, actionParent = $(`<div></div>`)
                icon.addClass(settings.bgClasssName); icon.addClass(r.children.length ? settings.collapseClassName : settings.noChildClassName)
                liName.addClass(settings.forNameClassName); liName.attr('data-id', settings.name + r._id); liName.attr('data-parent', settings.name + r.parentId); liName.append(icon);
                actionParent.addClass(settings.actionParentClassName); actionParent.append(span);
                if(!(typeof options.action == 'boolean' && !options.action)) {
                    actionParent.append(action.addChild); actionParent.append(action.edit)
                    if(!(typeof options.multipleDelete == 'boolean' && !options.multipleDelete) || !r.children.length){
                        actionParent.append(action.delete)
                    }
                }
                liName.append(actionParent)
                if(r.children.length){
                    let liChild = $(`<div></div>`)
                    liChild.addClass(`${settings.childrensClassName}`)
                    liChild.append(fn(r.children))
                    liName.append(liChild)
                }
                ul.append(liName)
            })
            return ul
        }
        this.append(fn(options.data || []))
        this.addClass(settings.name)
        let collapseElement = this.find(`.${settings.bgClasssName}:not(.${settings.noChildClassName})`)
        collapseElement.off("click").click(function(){
            try{
                let $t = $(this), $li = $t.parent(), $childrens = $li.find(`.${settings.childrensClassName}`)
                let id = $li.data('id').split(settings.name)[1], parent = $li.data('parent').split(settings.name)[1]
                if($t.hasClass(settings.collapseClassName)){
                    $childrens.fadeOut(settings.expandCollapseAnimationDuration); $t.removeClass(settings.collapseClassName); $t.addClass(settings.expandClassName)
                }else{
                    $childrens.fadeIn(settings.expandCollapseAnimationDuration); $t.removeClass(settings.expandClassName); $t.addClass(settings.collapseClassName)
                }
            }catch(e){
                console.error("some error")
            }
        });
        ([
            {
                element: this.find(`.${settings.addChildClassName}`),
                fnName: "addChild"
            },
            {
                element: this.find(`.${settings.editClassName}`),
                fnName: "edit"
            },
            {
                element: this.find(`.${settings.deleteClassName}`),
                fnName: "delete"
            }
        ])
        .forEach(action => {
            action.element.off("click").click(function(){
                try{
                    let $t = $(this), $li = $t.parent().parent(), id = $li.data('id').split(settings.name)[1], parent = $li.data('parent').split(settings.name)[1]
                    if(typeof options[action.fnName] == "function"){
                        options[action.fnName](id, parent)
                    }
                }catch(e){
                    console.error("some error")
                }
            })
        })
    }
}(jQuery))