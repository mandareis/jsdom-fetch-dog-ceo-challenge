console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

async function dogCeo() {
  const response = await fetch(imgUrl);
  const responseJson = await response.json();
  console.log(responseJson);
  let imgs = responseJson.message.map((imgUrl) => {
    let img = document.createElement("img");
    img.src = imgUrl;
    return img;
  });
  const imageContainer = document.getElementById("dog-image-container");
  imgs.forEach((img_1) => {
    imageContainer.appendChild(img_1);
  });
}
dogCeo();

async function buildBreedList() {
  const res = await fetch(breedUrl);
  const resJson = await res.json();
  console.log(resJson);
  const breedList = document.getElementById("dog-breeds");
  for (const property in resJson.message) {
    console.log(`${property}: ${resJson.message[property]}`);
    const li = document.createElement("li");
    li.addEventListener("click", addColor);
    li.innerText = property;
    breedList.appendChild(li);
  }
}
buildBreedList();
function addColor(event) {
  event.target.style = "color: red";
}
