/*
 * 
 * upload file
 * 
 */

function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});


/* 
 * 
 * signature 
 * 
 */

var canvas = document.querySelector("canvas");
var signaturePad = new SignaturePad(canvas);

var saveButton = document.getElementById('save');
var clearButton = document.getElementById('clear');
var loadButton = document.getElementById( 'load' );

var saved = '';

saveButton.addEventListener('click', function (event) {
  saved = signaturePad.toDataURL();
  var image = document.querySelector("img");
  image.setAttribute( 'src', saved );
});

clearButton.addEventListener( 'click', function( event){
   signaturePad.clear();
});

loadButton.addEventListener( 'click', function(event){
   signaturePad.fromDataURL( saved );
});
