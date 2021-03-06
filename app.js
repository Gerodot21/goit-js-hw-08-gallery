const galleryItems = [
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
		description: "Hokkaido Flower",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
		description: "Container Haulage Freight",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
		description: "Aerial Beach View",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
		description: "Flower Blooms",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
		description: "Alpine Mountains",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
		description: "Mountain Lake Sailing",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
		description: "Alpine Spring Meadows",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
		description: "Nature Landscape",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
		description: "Lighthouse Coast Sea",
	},
];

const galleryEl = document.querySelector(".js-gallery");
const gallegePriceItems = originalItem(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", gallegePriceItems);

function originalItem(origin) {
	return origin
		.map(({ preview, original, description }) => {
			return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
		})
		.join(" ");
}

galleryEl.addEventListener("click", onGalleryElement);
const modal = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");

function onGalleryElement(evt) {
	if (!evt.target.classList.contains("gallery__image")) {
		return;
	}
	evt.preventDefault();
	modal.classList.add("is-open");
	const { dataset, alt } = evt.target;
	updateAttr(dataset.source, alt);
}

const modalClose = document.querySelector('[data-action="close-lightbox"]');
modalClose.addEventListener("click", onModalCloseClick);

function onModalCloseClick(evt) {
	modal.classList.remove("is-open");
	updateAttr();
}

function updateAttr(src = "", alt = "") {
	modalImage.src = src;
	modalImage.alt = alt;
}

window.addEventListener("keydown", closeModalKey);
function closeModalKey(evt) {
	const condition = evt.code === "Escape";
	if (condition) {
		onModalCloseClick();
	}
}

modal.addEventListener("click", closeModalBackdrop);

function closeModalBackdrop(evt) {
	const condition = evt.target.classList.contains("lightbox__overlay");
	if (condition) {
		onModalCloseClick();
	}
}

// window.addEventListener("keydown", nextImageGallery);
// function nextImageGallery(evt) {
// 	const conditionLeft = evt.code === "ArrowLeft";
// 	if (conditionLeft) {
// 		onGalleryElement();
// 	}
// }
