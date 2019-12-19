document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "prize.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      let prizes = JSON.parse(this.responseText);
      let output = "";

      var keys = Object.keys(prizes);
      keys.forEach(function(key) {
        prizes[key].forEach(function(prize) {
          output += `<ul>
            <li>year   :${prize.year}</li>
            <li>category  :${prize.category}</li>

          </ul>`;
        });
      });

      document.getElementById("output").innerHTML = output;
    }
  };

  xhr.onerror = function() {
    console.log("Request error...");
  };
  //send
  xhr.send();
}
