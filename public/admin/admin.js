let tbody = document.getElementById("tbody")


// fetch function
fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data));
        })
    })

const modal = document.querySelector('.main-modal');
const closeButton = document.querySelectorAll('.modal-close');




const Table = document.getElementById('table')



const modalClose = () => {
	modal.classList.remove('fadeIn');
	modal.classList.add('fadeOut');
	setTimeout(() => {
		modal.style.display = 'none';
	}, 500);
}

const openModal = () => {
	modal.classList.remove('fadeOut');
	modal.classList.add('fadeIn');
	modal.style.display = 'flex';
}

for (let i = 0; i < closeButton.length; i++) {
	const elements = closeButton[i];
	elements.onclick = (e) => modalClose();
	modal.style.display = 'none';
	window.onclick = function (event) {
		if (event.target == modal) modalClose();
	}
}

var closemodal2 = document.querySelectorAll('.modal-close-edit')
for (var i = 0; i < closemodal2.length; i++) {
	closemodal2[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
	isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
	isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
	toggleModal()
  }
};

function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal-edit')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}

const modalDelete = document.querySelector('.main-modal-delete');
const closeButtonDelete = document.querySelectorAll('.modal-close-delete');

const modalCloseDelete = () => {
	modalDelete.classList.remove('fadeIn');
	modalDelete.classList.add('fadeOut');
	setTimeout(() => {
		modalDelete.style.display = 'none';
	}, 500);
}

function openModalDelete() {
    
    modalDelete.classList.remove('fadeOut');
    modalDelete.classList.add('fadeIn');
    modalDelete.style.display = 'flex';
}



for (let i = 0; i < closeButtonDelete.length; i++) {
	const elements = closeButtonDelete[i];
	elements.onclick = (e) => modalCloseDelete();
	modalDelete.style.display = 'none';
	window.onclick = function (event) {
		if (event.target == modalDelete) modalCloseDelete();
	}
}
