'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useFetchUsers = (api_url: string | undefined, urlQuery: string) => {

	const	[usersList, setUsersList] = useState(null)
	const	[error, setError] = useState(null)
	const	route = useRouter()

	useEffect(() => {
		const fetchUsersList = async () => {

			const	query = urlQuery !== '' ? ('?page=' + urlQuery) : ''
			console.log(query)
			try {
				const response = await fetch(`${api_url}users${query}`)
				if (!response.ok)
					throw new Error('Failed In Fetching')
				const result = await response.json()
				setUsersList(result)
			} catch (err: any) {
				setError(err)
			} finally {
				route.push(`${query}`)
			}
		}

		fetchUsersList()
	}, [api_url])

	return ( {usersList} );
}
 
export default useFetchUsers;