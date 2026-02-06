import getUsers from "@/services/getUsers";

async function Page({
  params,
}: {
  params: { id: number; firstName: string; lastName: string; age: number };
}) {
  const userList = getUsers();
  const userData = await userList;
  const { id } = await params;
  const currentid = userData.users[id - 1];
  console.log(userData);
  console.log(currentid);
  return (
    <div>
      User Details Page:
      <h4>
        Name: {currentid.firstName} {currentid.lastName}
      </h4>
      <h4>Age: {currentid.age}</h4>
    </div>
  );
}
export default Page;

export async function generateStaticParams() {
  const userList = getUsers();
  const userData = await userList;
  return userData.users.map(
    (user: {
      id: number;
      firstname: string;
      lastname: string;
      age: number;
    }) => ({
      id: user.id.toString(),
      firstName: user.firstname,
      lastName: user.lastname,
      age: user.age.toString(),
    }),
  );
}
