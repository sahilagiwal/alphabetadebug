import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center">
      <Image
        src="/home.png"
        width={400}
        height={200}
        alt="Dystopian Enviornment "
      />
      <div className="p-8 flex flex-col ">
        <h1>“Innovation distinguishes between a leader and a follower.”</h1>
        <span className="text-2xl">- Steve Jobs</span>
        <div className="flex flex-row">
          <Button className="max-w-xs w-48 mt-5 mx-4">
            Upcoming Bootcamps
          </Button>
          <Button variant={"outline"} className="max-w-xs w-48 mt-5">
            Contribute
          </Button>
        </div>
      </div>
    </div>
  );
}
