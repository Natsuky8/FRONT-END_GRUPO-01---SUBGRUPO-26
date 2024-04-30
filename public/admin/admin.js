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

// create td
function td_fun({ id, name, email, phone, address}){
    let td = document.createElement('tr');
    td.innerHTML = `
                        <td><div class="flex justify-center items-center">   <input type="checkbox" id="miCheckbox" name="miCheckbox" class="mr-2"></div></td>
                        <td>${name}</td>
                        <td>${email}</td>
                        <td>${address}</td>
                        <td>${phone}</td>
                        <td>
                        <button class="btn-editar">
                        <i class="bi bi-pencil text-yellow-500"></i>
                        </button>
                        <button class="btn-delete">
                          <i class="bi bi-trash text-red-500"></i>
                        </button>

                      </td>
                        
    `;

	const btnEditar = td.querySelector('.btn-editar');
    btnEditar.addEventListener('click', () => {
        // Aquí puedes abrir el modal o realizar cualquier otra acción que necesites
        toggleModal(); // Suponiendo que openModal es la función que abre tu modal
    });

	const btnDelete = td.querySelector('.btn-delete');
    btnDelete.addEventListener('click', () => {
        openModalDelete(); // Suponiendo que openModalDelete es la función que abre tu modal de eliminación
    });
    return td;
}


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
	console.log("X de eliminar registro")
	const elements = closeButtonDelete[i];
	elements.onclick = (e) => modalCloseDelete();
	modalDelete.style.display = 'none';
	window.onclick = function (event) {
		if (event.target == modalDelete) modalCloseDelete();
	}
}
