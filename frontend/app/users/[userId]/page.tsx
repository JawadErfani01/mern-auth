"use client";
import { useGetUserQuery } from "@/app/globalRedux/Features/userSlice/userSlice";
import Link from "next/link";

const User = ({ params }: any) => {
  const { data, isLoading } = useGetUserQuery(params.userId);
  if (isLoading) {
    return <h1 className="text-lg m-5">Loading...</h1>;
  }
  return (
    <div className="m-5">
      <Link
        className="p-3 bg-black text-white border-none rounded-lg mx-10 mt-10"
        href="/users"
      >
        Back
      </Link>
      <div className="flex justify-center gap-6 items-center flex-col p-5 m-10 mt-0 border rounded-xl">
        <h1>Name: {data?.name}</h1> <p>Email: {data?.email}</p>
        <p>
          Website: <a href={data?.website}>{data?.website}</a>
        </p>
        <p>userName: {data?.username}</p>
      </div>
    </div>
  );
};

export default User;
