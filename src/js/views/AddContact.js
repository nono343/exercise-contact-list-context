import React, { useState, useContext } from "react"; //importo el hooks useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; //importo el contexto

export const AddContact = () => {
	//declaración de estados para los inputs
	// esto es un estado local
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [adress, setAdress] = useState("");

	const { actions } = useContext(Context); // activamos el contexto

	function handleSubmit(event) {
		// Esta función detiene el comportamiento predeterminado de los onSubmit
		event.preventDefault();
		// agregar a la función los valores que queremos que procese
		actions.agregarContacto(fullName, email, phone, adress);
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						{/* agregamos el evento (on change) y agregamos la propiedad (value) */}
						{/*   value y  usa arrow function para actualizar el valor y adoptarlo */}
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={fullName}
							onChange={e => setFullName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={adress}
							onChange={e => setAdress(e.target.value)}
						/>
					</div>
					{/* cambiar el type de "button" predeterminado a Submit, para que esté ligado al evento onSubmit */}
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
