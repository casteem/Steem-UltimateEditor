﻿var allContents, x, editor;

function savDraft() {
    var setItem = () => {
        console.log("saveitem");
        localStorage.setItem("draft.title", title);
        localStorage.setItem("draft.body", draft);
    };
    window.setInterval(() => { setItem() }, 10000);
}

//resDraft = localStorage.getItem("draft")
if (resDraft) {
    $('#container').html(resDraft);
}

$("#post").click(function () {
    Replace(editor);

})

function Replace(editor2) {
    editor2 = editor;
    allContents = editor.serialize();
    x = allContents[Object.keys(allContents)[0]].value;
    var reg1 = /medium-insert-images.*(left|right)/g,
        reg2 = /(<)\/?(figcaption>)|(<)\/?(figure>)/g,
        reg3 = /[^<\S >]\s/g,
        reg4 = /\\"/g;
    direction = "pull-$1";

    x = x.replace(reg1, direction);
    x = x.replace(reg3, "");
    x = x.replace(reg2, "");
    x = x.replace(reg4, '"');

    FiltrBody = x;
    if (checkDraft() == true) {
        PostBenef();
    }
}
