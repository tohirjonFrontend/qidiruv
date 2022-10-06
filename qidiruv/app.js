fetch('json.json')
    .then(function(responsive){
       return responsive.json();
    })
    .then(function(data){
       appendData(data);
    })
    ;

   
    function appendData(data){
        const cards = document.querySelector(".cards") 
       for(var i = 0; i <=100; i++){
           var li  = document.createElement("img");
           li.src = data[i].photoUrl;
           li.style.width = "50%"
           li.style.marginLeft = "22%"
           li.style.marginTop = "10%"
           var h6 = document.createElement("h3")
           h6.innerHTML = data[i].name;
           h6.classList = "card__title"
           var h7 = document.createElement("h2")
           h7.innerHTML = data[i].id; 
           h7.classList="card__id"
           var h8 = document.createElement("img")
           h8.innerHTML = data[i].thumbnailUrl;   
           var h8 = document.createElement("h6")
           h8.innerHTML = data[i].description;                   
           var div = document.createElement("div")

           div.classList="box__card"
       div.style.marginTop = "100px"
           div.appendChild(li)
           div.appendChild(h6)
           div.appendChild(h7)
           div.appendChild(h8)
           cards.appendChild(div)
           div.style.marginLeft = "25%"
           div.style.border = "1px solid #0eb0d4"
           div.style.borderRadius = "15PX"
           div.style.marginBottom = "3%"
           div.style.width = "40%"
           h6.style.textAlign = "center"
           h7.style.marginLeft = "2%"
           h8.style.marginLeft = "4%"

       }
    };





    function myFunction() {
      var input, filter, cards, cardContainer,  title, i;
      input = document.getElementById("myFilter");
      filter = input.value.toUpperCase();
      cardContainer = document.getElementById("main__cards");
      cards = cardContainer.getElementsByClassName("box__card");
      console.log(cards);
      for (i = 0; i < cards.length; i++) {
          title = cards[i].querySelector(".card__id");
          if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
              cards[i].style.display = "";
          } else {
              cards[i].style.display = "none";
          }
      }
  }






 