function show_results(){
  document.querySelector("#results").style.display = "grid"

}

function hide_results(){
  document.querySelector("#results").style.display = "none"
}

async function search(){
  console.log("searching...")
  document.querySelector("#results").innerHTML = ""
  // const search = event.target.value
  // console.log(search)
  // Connect to the API

  setTimeout( async ()=>{
    const search = document.querySelector("#search_for").value
    const conn = await fetch(`https://coderspage.com/iceland/search-items?search=${search}`)
    const data = await conn.json()
    data.forEach( item => {
      let div_item = `<div class="result">${item.item_name}</div>`
      document.querySelector("#results").insertAdjacentHTML("afterbegin", div_item)
    })
  }, 2000 )


  // https://coderspage.com/iceland/search-items?search
  // Get the items
  // Show the items in the drop down
}




