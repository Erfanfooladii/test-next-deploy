import Link from "next/link";
import { ProjectUser } from "../../types/projectType";
import Image from "next/image";
export default async function Home() {
  const getProjects = async (): Promise<ProjectUser> => {
    const res = await fetch("https://api.github.com/users/ErfanFooladii");
    if (!res.ok) throw new Error("Failed to fetch user data");
    const data: ProjectUser = await res.json();
    return data;
  };

  const { name, bio, avatar_url } = await getProjects();
  return (
    <div className="h-full flex flex-col gap-2 items-center justify-center">
      <div className="p-7 flex flex-col border-blue-600 border-1 rounded-lg gap-2 items-center justify-center">
        <Image
          width={200}
          height={200}
          src={avatar_url}
          alt="avatar image"
          className="rounded-full border-blue-600 border-1 p-2"
        />
        <h1 className="font-bold text-3xl text-blue-900 text-center">{name}</h1>
        <p>{bio}</p>
        <Link
          href="resume"
          className="rounded-lg text-blue-600 p-2 cursor-pointer hover:bg-blue-600 hover:text-blue-200 bg-blue-300"
        >
          my resume
        </Link>
      </div>
    </div>
  );
}
