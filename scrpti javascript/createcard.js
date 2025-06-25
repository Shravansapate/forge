function createCard(title, cName, views, monthsOld, duration, thumbnail) { 
    let viewNumber;
    if(views < 1000000) {
        viewNumber = Math.floor(views/1000) + "K";
    }
    else if(views < 1000000000) {
        viewNumber = Math.floor(views/1000000) + "M";
    }
    else {
        viewNumber = Math.floor(views/1000000000) + "B";
    }

    let html = `<div class="card">
        <div class="image-container">
            <img src="${thumbnail}" alt="" />
            <div class="capsule">${duration}</div>
        </div> 
        <div class="text-content">
            <h1>${title}</h1>
            <h6>${cName}</h6>
            <h6>${viewNumber} views • ${monthsOld} months ago</h6>
        </div>
    </div>`;

    document.querySelector(".cards").innerHTML += html;
}

createCard("shravna", "Test Channel",250000,2,"12:34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg");
