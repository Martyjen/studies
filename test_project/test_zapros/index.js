fetch('https://www.nbrb.by/api/exrates/currencies', {method: "GET"})

.then(function(resp){
    return resp.json();
})
.then(function(data){
console.log(data);
})
.catch(function(){
})



// // пример типового запроса с использованием fetch
// // const promise = fetch(url[, options]);
// fetch('https://belarusbank.by/api/kursExchange?city=Брест')
//   .then((response) => {
//     console.log(response.status); // => 200
//     console.log(response.headers.get('Content-Type'));
//     return response.json();
//    })
//   .then((article) => {
//     console.log(article.title); // => 'Как использовать fetch?'
//   })
//   .catch(console.error);