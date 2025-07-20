import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import UserCard from "@/components/common/UserCard";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
	
	const [isModalOpen, setModalOpen] = useState(false);
  	const [post, setPost] = useState<PostData | null>(null);


  	const handleAddPost = (newPost: PostData) => {
    		setPost({ ...newPost, id: posts.length + 1 });
	};

	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="p-4">
				<div className="flex justify-between">
					<h1 className=" text-2xl font-semibold">User Contents</h1>
					<button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
				</div>
				<div className="grid grid-cols-3 gap-2 ">
					{
						posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
							<UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} key={key} />
						));
					}
				</div>
			</main>

			{isModalOpen && (
        			<UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
			)}
		</div>
	);
}

export async function getStaticProps() {
	const response = await fetch ("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();

	return {
		props: {
			users;
		}
	}
}

export default Users;
