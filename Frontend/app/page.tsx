
'use client';
import { useRouter } from "next/navigation";
import PagedComp from "./components/pagination";
import UsersCompo from "./users/page";
import {Button, NextUIProvider} from "@nextui-org/react";

const Page = () => {
	const	router = useRouter()
	return (
		<NextUIProvider>
			<main className="min-w-screen min-h-screen flex flex-col items-center gap-8 bg-[#f1f5f9] light p-4">
				<h1 className="bg-white py-4 px-8 rounded-md">Octicode Assessment</h1>
				<div className="w-fit gap-4 grid grid-cols-1 md:grid-cols-2 items-center">
					<p className="bg-white p-4 rounded-md max-w-[700px]">To List Users 6 by 6</p>
					<Button type="button" onClick={() => router.push('users')}>List 6 by 6 Users</Button>
				</div>
				<div className="w-fit gap-4 grid grid-cols-1 md:grid-cols-2 items-center">
					<p className="bg-white p-4 rounded-md max-w-[700px]">To Look For Users</p>
					<Button type="button" onClick={() => router.push('search')}>Search For Users</Button>
				</div>
			</main>

		</NextUIProvider>
	)
}

export default Page;