import React from "react";

const Table = (props) => {
    const {userInvites} = props
    return ( 
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sig_Id</th>
                        <th>Invite</th>
                        <th>Vector</th>
                        <th>Invite Time</th>
                    </tr>
                </thead>
                <tbody>
                    {userInvites.map(invitation => 
                        <tr key={invitation.invite_id} style={{backgroundColor: invitation.status==="read"?"lightgreen" : "white"}}>
                            <td>{invitation.sig_id}</td>
                            <td>{invitation.invite}</td>
                            <td>{invitation.vector}</td>
                            <td>{invitation.invite_time}</td>
                        </tr>    
                    )}
                </tbody>
            </table>
        </React.Fragment>
     );
}
 
export default Table;