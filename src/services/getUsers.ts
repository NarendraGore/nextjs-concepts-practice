export default async function getUsers() {
  const users = await fetch('https://dummyjson.com/users')
  return users.json();
}
