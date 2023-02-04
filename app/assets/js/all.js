$(function() {
  console.log('Hello Bootstrap5');
});
ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .then( editor => {
  console.log( editor );
} )
  .catch( error => {
  console.error( error );
} );
$('[data-toggle="accessBtn"]').on('click', () => $('[data-target="editorContainer"]').toggle(300));