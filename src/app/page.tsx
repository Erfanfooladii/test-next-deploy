import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-3xl text-blue-900 text-center">
        {" "}
        Erfan Fooladi{" "}
      </h1>
      <Link
        href="resume"
        className="rounded-lg text-blue-600 p-2 cursor-pointer hover:bg-blue-600 hover:text-blue-200 bg-blue-300"
      >
        my resume
      </Link>
    </div>
  );
}
