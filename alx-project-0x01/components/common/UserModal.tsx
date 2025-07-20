import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<UserData>({
	  id: 1,
	  name: "",
	  username: "",
	  email: "",
	  address: {
		  street: "",
		  suite: "",
		  city: "",
		  zipcode: "",
		  geo: {
			  lat: "",
			  lng: ""
		  }
	  },
	  phone: "",
	  website: "",
	  company: {
		  name: "",
		  catchPhrase: "",
		  bs: ""
	  }
  }
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
	  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
	  <h2 className="text-2xl font-bold mb-4 text-gray-700">Add New User</h2>
	  <form onSubmit={handleSubmit}>
	  	<div className="mb-4">
			<label htmlFor="id" className="block text-gray-700 font-medium mb-2">User ID</label>
			<input type="number" id="id" name="id" value={post.id} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
		</div>
		 <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input type="name" id="name" name="name" value={post.name} onChange={handleChange} placeholder="Full Name"className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="id" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input type="username" id="username" name="username" value={post.username} onChange={handleChange} placeholder="Username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" value={post.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input type="number" id="phone" name="phone" value={post.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">User's Website</label>
                        <input type="string" id="website" name="website" value={post.website} onChange={handleChange} place holder="Website" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
		 	<h3 className= "font-semibold textalign-center">Users Address</h3>
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Street</label>
                        <input type="string" id="street" name="street" value={post.address.street} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Suite</label>
                        <input type="string" id="suite" name="suite" value={post.address.suite} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="adderss" className="block text-gray-700 font-medium mb-2">City</label>
                        <input type="string" id="city" name="city" value={post.address.city} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>
		 <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Zip Code</label>
                        <input type="number" id="zipcode" name="zipcode" value={post.address.zipcode} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Latitude</label>
                        <input type="number" id="lat" name="lat" value={post.address.geo.lat} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
                        <label htmlFor="Address" className="block text-gray-700 font-medium mb-2">Longitude</label>
                        <input type="number" id="lng" name="lng" value={post.address.geo.lng} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		 <div className="mb-4">
		 	<h3 className="font-semibold textalign-center">User's Company</h3>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company's Name</label>
                        <input type="name" id="companyName" name="companyName" value={post.company.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>
 		<div className="mb-4">
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Catch Phrase of the Company</label>
                        <input type="string" id="catchphrase" name="catchphrase" value={post.company.catchphrase} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>
 		<div className="mb-4">
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company's Slogan</label>
                        <input type="string" id="bs" name="bs" value={post.company.bs} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500" />
                </div>

		<button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">Cancel</button>
            	<button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add Post</button>
	</form>
</div>
  );
  });

export default UserModal;
