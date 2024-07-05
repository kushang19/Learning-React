import React from "react";
import axios from "axios";

class Axios extends React.Component {

	state = {
		newfiles: null,
	};

	handleFile(e) {
		// Getting the files from the input
        console.log(e.target);
        console.log(e.target.newfiles);

		let newfiles = e.target.newfiles;
		this.setState({ newfiles });
	}

	handleUpload(e) {
		let newfiles = this.state.newfiles;

		let formData = new FormData();

		// Adding files to the formdata
		formData.append("image", newfiles);
		formData.append("name", "Name");

		axios({
			// Endpoint to send files
			url: "http://localhost:8080/files",
			method: "POST",
			headers: {
				// Add any auth token here
				authorization: "your token comes here",
			},

			// Attaching the form data
			data: formData,
		})
			// Handle the response from backend here
			.then((res) => {})

			// Catch errors if any
			.catch((err) => {});
	}

	render() {
		return (
			<div>
				<h1>Select your files</h1>
				<input
					type="file"
					// To select multiple files
					multiple="multiple"
					onChange={(e) => this.handleFile(e)}
				/>
				<button onClick={(e) => this.handleUpload(e)} >Send Files</button>
			</div>
		);
	}
}


// Below is an example to fetch the customer’s data using Axios…
const getCustomersData = () => {
    axios.get("https://jsonplaceholder.typicode.com/customers")
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
};
getCustomersData();



// Delete Request With Axios:
// axios.delete(url, { 
//     data: { foo: "bar" }, 
//     headers: { "Authorization": "******" } 
//   });



export default Axios;
