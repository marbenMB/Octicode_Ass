
'use client';
import PagedComp from "./components/pagination";
import UsersCompo from "./users";
import {NextUIProvider} from "@nextui-org/react";

const Page = () => {

	return (
		<NextUIProvider>
			<main className="w-screen min-h-screen bg-[#f1f5f9] light p-4">

				<UsersCompo api_url={process.env.NEXT_PUBLIC_API_URL} />
				
			</main>
		</NextUIProvider>
	)
}

export default Page;