import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center bg-black absolute z-10 h-[100%] w-[100%] items-center">
      <SignUp />
    </div>
  );
}
