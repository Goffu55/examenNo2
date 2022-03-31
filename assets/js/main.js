
$('#function').submit(e => {
    e.preventDefault();
    let cadena1 = $("#cadena").val();
    let words = cadena1.split('/').pop().split(/(?=[A-Z])/);
    console.log(cadena1);
    console.log(words);
  });


