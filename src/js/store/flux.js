//el Flux es como el almacenamiento donde se alojan los estados globales.

import { objectOf } from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//aquí vamos a guardar todos los estados globales de nuestra app
			//Your data structures, A.K.A Entities
			contactList: [
				// { fullName: "Carlos", email: "abc@", phone: "123", adress: "casita" },
				// { fullName: "Miguel", email: "abc@", phone: "123", adress: "casita" }
			]
		},
		// son todas las funciones globales de nuestra app. Ej: agregar usuasrio, borrar usuario
		// actions es un objecto, por lo tanto hay que asignarles su propiedad y valor
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			agregarContacto: (name, email, phone, adress) => {
				// getStore().contactList.concat({ name, email, phone, adress });
				// //propiedad  :     valor
				// setStore({ contactsList: getStore().contactsList.concat({ fullName, email, phone, adress }) });
				// Objeto con la información que queremos enviar en el fetch
				let _datos = {
					full_name: name,
					email: email,
					agenda_slug: "Aleja",
					address: adress,
					phone: phone
				};
				// ésta es la URL donde se va a hacer el POST, con sus respectiva configuración (método, tipo de dato, y el cuerpo)
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(_datos),
					headers: { "Content-type": "application/json; charset=UTF-8" }
				}) // ésta son las promesas (convertir a .json, los logs sólo son para mostrar en consola, y si hubiese un error)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			},

			obtenerContactos: () => {
				// setStore({ propiedad:valor }) es un objeto. Es como siempre actualizamos un cambio de memoria de Store
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Aleja")
					// Exito
					.then(response => response.json()) // convertir a json <== es un metodo, se queda así
					.then(data => setStore({ contactList: data })) //imprimir los datos en la consola
					.catch(err => console.log("Solicitud fallida", err)); // Capturar errores
			},

			editContact: (name, email, phone, adress, id) => {
				let _datos = {
					full_name: name,
					email: email,
					agenda_slug: "Aleja",
					address: adress,
					phone: phone
				};
				console.log(name);
				// ésta es la URL donde se va a hacer el POST, con sus respectiva configuración (método, tipo de dato, y el cuerpo)
				// 	fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
				// 		method: "POST",
				// 		body: JSON.stringify(_datos),
				// 		headers: { "Content-type": "application/json; charset=UTF-8" }
				// 	}) // ésta son las promesas (convertir a .json, los logs sólo son para mostrar en consola, y si hubiese un error)
				// 		.then(response => response.json())
				// 		.then(data => console.log(data))
				// 		.catch(err => console.log(err));
				// },
			},
			onDelete: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-type": "application/json; charset=UTF-8" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;
