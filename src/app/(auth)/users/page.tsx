import getUsers from "@/services/getUsers";
import Link from "next/link";


interface User {  id: number;
  firstName: string;
  lastName: string;
}



async function UsersPage() {
  const users = getUsers();
  const userdata = await users;
  console.log(userdata);

  return (
    <div>
      Users Page
      <h1>{userdata.users[0].id}</h1> 
      {userdata.users.map((user: User) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <h2>{user.firstName} {user.lastName}</h2>
        </Link>
      ))}
    </div>
  );
}
export default UsersPage;
