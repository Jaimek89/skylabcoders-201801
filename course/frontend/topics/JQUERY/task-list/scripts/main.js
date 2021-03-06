//Resolved with jQuery

//This code, executes the program just with the button

// $(document).ready(function () {
//     $("#boton").click(function () {
//         var valorInput = $("#texto").val();
//         $("ul").append("<li>" + valorInput + "</li>");
//         $("li").click(function () {
//             $(this).remove();
//         })
//     });
// });

//This code, executes the program with submit (button + enter)

$("#myForm").submit(function(e){
    console.log(e);
    e.preventDefault()
    var valorInput = $("#texto").val();
    $("ul").append("<li>" + valorInput + "</li>");
    $("li").click(function () {
        $(this).remove();
    })
})

//Resolved by Manu with JavaScript Native

/*var doc = document;
var qs = doc.querySelector.bind(document);

document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
    e.preventDefault();

    var titleInput = qs('input[type="text"]');
    var title = titleInput.value;

    var list = qs('ul');
    var item = doc.createElement('li');

    var itemContent = doc.createTextNode(title);
    item.appendChild(itemContent);

    var confirm = doc.createElement('a');
    confirm.innerText = '✓';
    //confirm.appendChild(doc.createTextNode('✓'));
    item.appendChild(confirm);

    // confirm.addEventListener('click', function() {
    //     console.log('remove me', item);

    //     list.removeChild(item);
    // });

    // confirm.onclick = function () {
    //     console.log('remove me', item);

    //     list.removeChild(item);
    // };

    //item.innerHTML = title + '<a href="#">✓</a>';

    list.appendChild(item);

    titleInput.value = '';
});

doc.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.target.parentNode.remove();
    }
})*/