'use client';

import { useEffect, useState } from "react";
import UserCard from "../components/userCard";
import { Input, NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'


const UsersCompo = () => {

	const	[pageLimit, setPageLimit] = useState(0)
	const	listLimit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 6
	const	[usersList, setUsersList] : any = useState([])
	const searchParams = useSearchParams()
	const	[n, setN] = useState<number>(Number(searchParams.get('page')) || 1)
	const	[error, setError] = useState(null)
	const	route = useRouter()


	useEffect(() => {
		const page : any = n
		const query = `?page=${page}`
		const fetchUsersList = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users${query}`)
				if (!response.ok)
					throw new Error('Failed In Fetching')
			const result = await response.json()
			setUsersList(result.list)
			setPageLimit(result.total / listLimit)
		} catch (err: any) {
			setError(err)
		} finally {
			route.push(`${query}`)
		}
	}
	fetchUsersList()
}, [route, searchParams, n, listLimit])


	return ( 
	<NextUIProvider>
		<main className="min-w-screen min-h-screen bg-[#f1f5f9] light p-4">
			<div className="w-full h-full flex flex-col  items-center gap-8">	
				<h1 className="bg-white py-4 px-8 rounded-md cursor-pointer" onClick={() => route.push('/')}>Octicode Assessment</h1>
				<Input isClearable type="text" label="Search By " variant="bordered" placeholder="UserName" defaultValue="" onClear={() => console.log("sfgsdf")} className="max-w-xs"/>
				<div className="w-fit gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{usersList && usersList.map((user: any) => (
						<div key={user.id} className="w-full max-w-[300px] ">
							<UserCard firstName={user.firstName} lastName={user.lastName} Username={user.username} age={user.age} avatar={user.image}/>
						</div>
					))}
				</div>
			</div>
		</main>
	</NextUIProvider>
	);
}

export default UsersCompo;