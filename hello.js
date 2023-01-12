<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Bonjour en JS</title>
</head>
<body>
<button id="btBonjour">Afficher bonjour</button>
<h1 id="title">Chargement</h1>
</body>
<script>
    let $=function(id){
        return window.document.getElementById(id);
    };

    let bjr=function(){
        $('title').innerText='Bonjour';
    }
    $('btBonjour').addEventListener('click',bjr);
</script>
</html>