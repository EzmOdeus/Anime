import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center bg-black absolute h-[100%] w-[90%] items-center">
      <SignIn />
    </div>
  );
}
