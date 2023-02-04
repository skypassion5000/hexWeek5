"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
  console.log(editor);
})["catch"](function (error) {
  console.error(error);
});
$('[data-toggle="accessBtn"]').on('click', function () {
  return $('[data-target="editorContainer"]').toggle(300);
});
//# sourceMappingURL=all.js.map
