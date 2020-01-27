fetch('https://my-json-server.typicode.com/grigoriyostapenko/fake-database/menu')  
.then(  
  function (response) { 
    response.json().then(function(data) { 
      console.log(data);  
      const dataFirst = data[0];
      const dataSecond = data[1];
      const dataThird = data[2];
      const dataFourth = data[3];
      const dataFifth = data[4];
      const dataSixth = data[5];
      console.log(dataFirst);
      console.log(dataSecond);
      console.log(dataThird);
      console.log(dataFourth);
      console.log(dataFifth);
      console.log(dataSixth);
    });  
  }  
  )  
.catch(function(err) {  
  console.log('Fetch Error :-S', err);  
});

