import { useGetUsersQuery } from "./redux/usersApi";

function App() {
  const {data = {}, isLoading} = useGetUsersQuery();

  if (isLoading) return <h1>Loading...</h1>
  return (
    <div className="wrapper">
      <h1>Main Page</h1>
      <ul>
        { 
          data.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
