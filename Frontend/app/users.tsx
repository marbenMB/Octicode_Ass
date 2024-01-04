'use client';

import { useEffect, useState } from "react";
import UserCard from "./components/userCard";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'


const UsersCompo = () => {

	const	[usersList, setUsersList] : any = useState([]);
	const	[error, setError] = useState(null);
	const	route = useRouter();
	const searchParams = useSearchParams();



	useEffect(() => {
		const page : any = searchParams.get('page') || 1;
		const query = `?page=${page}`;
		const fetchUsersList = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users${query}`)
				if (!response.ok)
					throw new Error('Failed In Fetching')
			const result = await response.json()
			setUsersList(result)
		} catch (err: any) {
			setError(err)
		} finally {
			route.push(`${query}`);
		}
	}
	fetchUsersList();
}, [route, searchParams])


	return ( 
	<div className="w-full h-full flex flex-col items-center gap-8">	
        <div className="w-full flex items-center justify-center flex-col gap-4">
			{usersList && usersList.map((user: any) => (
				<div key={user.id} className="w-full max-w-[300px]">
					<UserCard firstName={user.firstName} lastName={user.lastName} Username={user.username} age={user.age} avatar={user.image}/>
				</div>
			))}
        </div>
		<Pagination loop showControls color="default" onChange={(n : number) => console.log(n)} total={6} initialPage={3} />
    </div>
	);
}

export default UsersCompo;