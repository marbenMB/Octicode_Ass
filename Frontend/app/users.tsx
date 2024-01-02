'use client';

import { useState } from "react";
import UserCard from "./components/userCard";
import useFetchUsers from "./hooks/useFetchUsers";
import PagedComp from "./components/pagination";

const UsersCompo = (props: any) => {

	const	{ api_url } = props
	const	[urlQuery, setUrlQuery] = useState('1');
	const	{usersList}  : any = useFetchUsers(api_url, urlQuery)

	return ( 
	<div className="w-full h-full flex flex-col items-center gap-8">	
        <div className="w-full flex items-center justify-center flex-col gap-4">
			{usersList && usersList.map((user: any) => (
				<div key={user.id} className="w-full max-w-[300px]">
					<UserCard firstName={user.firstName} lastName={user.lastName} Username={user.username} age={user.age} avatar={user.image}/>
				</div>
			))}
        </div>
		<PagedComp total={4}/>
    </div>
	);
}

export default UsersCompo;