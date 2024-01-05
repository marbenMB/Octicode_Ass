
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function UserCard(props : any) {
	const	{firstName, lastName, Username, age, avatar} = props
  return (
    <Card className="py-4 min-w-[250px] border border-divider shadow-none">
      <CardBody className="overflow-visible py-2 flex justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={avatar}
          width={70}
		  height={70}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large">{firstName} {lastName}</h4>
        <p className="text-tiny uppercase font-bold">{Username}</p>
        <small className="text-default-500">{age}</small>
      </CardHeader>
    </Card>
  );
}
