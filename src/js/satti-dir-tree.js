!function(a){a.fn.dirTree=function(e){let n={name:"satti-dir-tree",forNameClassName:"data-name",bgClasssName:"satti-bg",collapseClassName:"bg-collapse",expandClassName:"bg-expand",noChildClassName:"bg-no-child",childrensClassName:"childrens",actionParentClassName:"action-parent",addChildClassName:"add-child",editClassName:"st-edit",deleteClassName:"st-delete",expandCollapseAnimationDuration:e.expandCollapseAnimationDuration||100};a("head").append(`\n            <style>\n            .${n.name} li{\n                list-style: none;\n                padding: 5px;\n                padding-right: 0;\n            }\n            \n            .${n.name} li.${n.forNameClassName} {\n                position: relative;\n            }\n            \n            .${n.name} li.${n.forNameClassName} span {\n                padding-left: 25px;\n            }\n            \n            .${n.name} > ul {\n                padding: 0;\n            }\n            \n            .${n.name} .${n.bgClasssName} {\n                width: 13px;\n                height: 13px;\n                position: absolute;\n                left: 14px;\n                top: 14px;\n            }\n            \n            .${n.name} .${n.bgClasssName}.${n.expandClassName} {\n                background: url(/assets/icons/plus-square-regular.svg) no-repeat;\n            }\n            \n            .${n.name} .${n.bgClasssName}.${n.noChildClassName} {\n                background: url(/assets/icons/square-regular.svg) no-repeat;\n            }\n            \n            .${n.name} .${n.bgClasssName}.${n.collapseClassName} {\n                background: url(/assets/icons/minus-square-regular.svg) no-repeat;\n            }\n            \n            .${n.name} .${n.actionParentClassName} {\n                display: flex;\n                border-radius: 5px;\n                padding: 5px;\n            }\n            \n            .${n.name} .${n.actionParentClassName}:hover {\n                cursor: pointer;\n                background: #e3edef;\n            }\n            \n            .${n.name} .${n.actionParentClassName} > div{\n                display: none;\n                width: 13px;\n                height: 13px;\n                margin-top: 3px;\n                margin-left: 10px;\n            }\n            .${n.name} .${n.actionParentClassName}:hover > div {\n                display: block;\n            }\n            \n            .${n.name} .${n.addChildClassName} {\n                background: url(/assets/icons/plus-solid.svg) no-repeat;\n            }\n            \n            .${n.name} .${n.editClassName} {\n                background: url(/assets/icons/edit-regular.svg) no-repeat;\n            }\n            \n            .${n.name} .${n.deleteClassName} {\n                background: url(/assets/icons/trash-alt-regular.svg) no-repeat;\n            }\n            </style>\n            `);let s=l=>{let d=a("<ul><ul>");return l.forEach(l=>{l.children=l.children||[];let t=a("<li></li>"),i=a(`<span>${l.name}</span>`),r=a("<div></div>"),o={addChild:a(`<div class="${n.addChildClassName}"></div>`),edit:a(`<div class="${n.editClassName}"></div>`),delete:a(`<div class="${n.deleteClassName}"></div>`)},m=a("<div></div>");if(r.addClass(n.bgClasssName),r.addClass(l.children.length?n.collapseClassName:n.noChildClassName),t.addClass(n.forNameClassName),t.attr("data-id",n.name+l._id),t.attr("data-parent",n.name+l.parentId),t.append(r),m.addClass(n.actionParentClassName),m.append(i),("boolean"!=typeof e.action||e.action)&&(m.append(o.addChild),m.append(o.edit),"boolean"==typeof e.multipleDelete&&!e.multipleDelete&&l.children.length||m.append(o.delete)),t.append(m),l.children.length){let e=a("<div></div>");e.addClass(`${n.childrensClassName}`),e.append(s(l.children)),t.append(e)}d.append(t)}),d};this.append(s(e.data||[])),this.addClass(n.name),this.find(`.${n.bgClasssName}:not(.${n.noChildClassName})`).off("click").click(function(){try{let e=a(this),s=e.parent(),l=s.find(`.${n.childrensClassName}`);s.data("id").split(n.name)[1],s.data("parent").split(n.name)[1];e.hasClass(n.collapseClassName)?(l.fadeOut(n.expandCollapseAnimationDuration),e.removeClass(n.collapseClassName),e.addClass(n.expandClassName)):(l.fadeIn(n.expandCollapseAnimationDuration),e.removeClass(n.expandClassName),e.addClass(n.collapseClassName))}catch(a){console.error("some error")}}),[{element:this.find(`.${n.addChildClassName}`),fnName:"addChild"},{element:this.find(`.${n.editClassName}`),fnName:"edit"},{element:this.find(`.${n.deleteClassName}`),fnName:"delete"}].forEach(s=>{s.element.off("click").click(function(){try{let l=a(this).parent().parent(),d=l.data("id").split(n.name)[1],t=l.data("parent").split(n.name)[1];"function"==typeof e[s.fnName]&&e[s.fnName](d,t)}catch(a){console.error("some error")}})})}}(jQuery);