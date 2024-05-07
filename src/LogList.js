import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const LogList = (props) => {
    const logs = props.logs
    return ( 
        <div className="log-2">
            <h1>APSTOLIC-CHURCH-MEMBERS</h1>
  <table className="table">
        <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {logs.map((log) => (
                <tr key={log.id}>
                    <td>{log.Username}</td>
                    <td>{log.email}</td>
                    <td>{log.country}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <p>kindly Click <Link to="/createAcc">here</Link> to join</p>
        </div>
     );
}
 
export default LogList;