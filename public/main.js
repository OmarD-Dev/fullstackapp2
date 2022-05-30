let favorite = document.getElementsByClassName("fa-star");
let completed = document.getElementsByClassName("fa-minus")
let trash = document.getElementsByClassName("fa-ban");

Array.from(favorite).forEach(function(element) {
      element.addEventListener('click', function(){
        const currentUser = document.querySelector('#userName').innerText
        const showID = this.parentNode.parentNode.childNodes[5].innerText
        console.log(showID)
        console.log(currentUser)
        fetch('addShow', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'currentUser':currentUser,
            'showID':showID
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(completed).forEach(function(element) {
  element.addEventListener('click', function(){
    const currentUser = document.querySelector('#userName').innerText
    const showID = this.parentNode.parentNode.childNodes[5].innerText
    console.log(showID)
    console.log(currentUser)
    fetch('completed', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'currentUser':currentUser,
        'showID':showID
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const genre = this.parentNode.parentNode.childNodes[1].innerText
        const title = this.parentNode.parentNode.childNodes[3].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'genre': genre,
            'title': title
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
