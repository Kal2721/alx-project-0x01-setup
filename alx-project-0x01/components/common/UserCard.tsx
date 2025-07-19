import { UserProps } from "@/interfaces";

const UserComponents: React.FC<UserProps> = (props) => {
	return (
		<div className= "max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
			<div className="mt-4 grid items-center justify-between text-sm text-gray-500">
				<h2 className="text-2xl font-bold text-gray-800">User Information</h2>
				<p className="text-gray-600">Name: {props.name}</p>
				<p className="text-gray-600">User Name: {props.username}</p>
				<p className="text-gray-600">Email: {props.email}</p>
				<p className="text-gray-600">User ID: {props.id}</p>
				<p className="text-gray-600">Phone Number: {props.phone}</p>
				<p className="text-gray-600">Website: {props.website}</p>
			</div>
			<div className="mt-4 grid items-center justify-between text-sm text-gray-500">
				<h3 className="font-bold text-gray-800>User's Address"</h3>
				<p className="text-gray-600">Street: {props.address.street}</p>
				<p className="text-gray-600">Suite: {props.address.suite}</p>
				<p className="text-gray-600">City: {props.address.city}</p>
				<p className="text-gray-600">Zip Code: {props.address.zipcode}</p>
				<p className="text-gray-600"><span>Geographical Points:</span> {props.address.geo.lat} latitude and {props.address.geo.lng} longitude</p>
			</div>
			<div className="mt-4 grid items-center justify-between text-sm text-gray-500">
				<h3  className="font-bold text-gray-800>User's Address">User's Company</h3>
				<p className="text-gray-600">Company's Name: {props.company.name}</p>
				<p className="text-gray-600">The catch phrase: {props.company.catchPhrase}</p>
				<p className="text-gray-600">Company's slogan: {props.company.bs}</p>
			</div>

		</div>
	);
}
