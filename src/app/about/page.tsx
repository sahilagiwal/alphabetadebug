import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  return (
    <div>
      <Card className="w-11">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
