import { useGetUsersQuery } from "../redux/usersApi"

export function MainComponents() {
  const {data = {}, isLoading} = useGetUsersQuery();

  if (isLoading) return <h1>Loading...</h1>
  return (
    <div className="main">
      <div className="main__container">
        <h1>Main Page</h1>
        <ul>
            { 
            data.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
      </div>
    </div>
  );
}
