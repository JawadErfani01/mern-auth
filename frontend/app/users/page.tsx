"use client";

import Link from "next/link";
import {
  useGetUsersQuery,
  useGetUserQuery,
} from "../globalRedux/Features/userSlice/userSlice";

const userPage = () => {
  const { data, isLoading, isSuccess } = useGetUsersQuery(null);

  if (isLoading) {
    return <h1 className="text-lg m-5">Loading...</h1>;
  }

  return (
    <div className="text-center">
      {isSuccess && (
        <div>
          <h1 className="text-3xl">User List</h1>

          {data.map((user, index) => {
            return (
              <Link
                href={`users/${user.id}`}
                key={user.id}
                className="p-3 m-5 border rounded-lg block "
              >
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default userPage;
