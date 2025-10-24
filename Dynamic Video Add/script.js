function viewsParse(viw) {
  return viw;
}
function addElements() {
  if (currCount === maxCount) {
    currCount = 1;
    document.querySelector(".container").innerHTML = "";
  } else {
    currCount += 1;
  }
  let vid = playlistVideos[currCount];
  document.querySelector(".container").insertAdjacentHTML(
    "beforeend",
    `<li id="${currCount}" class="videos">
          <div class="thumb">
            <img src="thumb.png" alt="" height="113" width="200" />
            <p class="duration">${vid['duration']}</p>
          </div>
          <div class="info">
            <h3>
              ${vid['title']}
            </h3>
            <p>${vid['channel']} • ${vid['views']} views • ${vid['time']}</p>
          </div>
        </li>`
  );
}

document.querySelector("button").addEventListener("click",(e) => {
  addElements();
});
