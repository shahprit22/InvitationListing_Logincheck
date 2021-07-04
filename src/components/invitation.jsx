import React,{ Component } from 'react';
import Table from '../utils/table';

class Invitation extends Component {
    state = {
        invites: [{
            invite_id: 1,
            sender_id: "jeet",
            sig_id: 25121,
            invite: "The Owner has invited you to join Situation 25121 [Mail system down]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1398892261,
            user_id: "3",
            status: "read"
        },{
            invite_id: 2,
            sender_id: "andrew",
            sig_id: 23951,
            invite: "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1398992261,
            user_id: "1",
            status: "read"
        },{
            invite_id: 3,
            sender_id: "andrew",
            sig_id: 92394,
            invite: "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Twitter",
            invite_time: 1399092261,
            user_id: "1",
            status: "read"
        },{
            invite_id: 4,
            sender_id: "andrew",
            sig_id: 49120,
            invite: "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1399192261,
            user_id: "1",
            status: "unread"
        },{
            invite_id: 5,
            sender_id: "mike",
            sig_id: 10293,
            invite: "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1399292261,
            user_id: "2",
            status: "read"
        },{
            invite_id: 6,
            sender_id: "jeet",
            sig_id: 25121,
            invite: "The Owner has invited you to join Situation 25121 [Mail system down]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1398892261,
            user_id: "3",
            status: "read"
        },{
            invite_id: 7,
            sender_id: "mike",
            sig_id: 23951,
            invite: "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1398992261,
            user_id: "2",
            status: "read"
        },{
            invite_id: 8,
            sender_id: "jeet",
            sig_id: 92394,
            invite: "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Twitter",
            invite_time: 1399092261,
            user_id: "3",
            status: "read"
        },{
            invite_id: 9,
            sender_id: "andrew",
            sig_id: 49120,
            invite: "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1399192261,
            user_id: "1",
            status: "unread"
        },{
            invite_id: 10,
            sender_id: "mike",
            sig_id: 10293,
            invite: "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1399292261,
            user_id: "2",
            status: "read"
        },{
            invite_id: 11,
            sender_id: "jeet",
            sig_id: 25121,
            invite: "The Owner has invited you to join Situation 25121 [Mail system down]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1398892261,
            user_id: "3",
            status: "read"
        },{
            invite_id: 12,
            sender_id: "mike",
            sig_id: 23951,
            invite: "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1398992261,
            user_id: "2",
            status: "read"
        },{
            invite_id: 13,
            sender_id: "andrew",
            sig_id: 92394,
            invite: "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Twitter",
            invite_time: 1399092261,
            user_id: "1",
            status: "read"
        },{
            invite_id: 14,
            sender_id: "andrew",
            sig_id: 49120,
            invite: "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1399192261,
            user_id: "1",
            status: "unread"
        },{
            invite_id: 15,
            sender_id: "andrew",
            sig_id: 10293,
            invite: "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1399292261,
            user_id: "1",
            status: "read"
        }],
        updateInvites: [{
            invite_id: 1,
            sender_id: "andrew",
            sig_id: 25121,
            invite: "The Owner has invited you to join Situation 25121 [SAN failure]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1398892261,
            user_id: "1",
            status: "unread"
        },{
            invite_id: 16,
            sender_id: "mike",
            sig_id: 23951,
            invite: "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1398992261,
            user_id: "2",
            status: "read"
        },{
            invite_id: 17,
            sender_id: "andrew",
            sig_id: 92394,
            invite: "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Twitter",
            invite_time: 1399092261,
            user_id: "1",
            status: "read"
        },{
            invite_id: 18,
            sender_id: "andrew",
            sig_id: 49120,
            invite: "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Internal",
            invite_time: 1399192261,
            user_id: "1",
            status: "unread"
        },{
            invite_id: 5,
            sender_id: "jeet",
            sig_id: 10293,
            invite: "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
            vector: "Email",
            invite_time: 1399292261,
            user_id: "3",
            status: "read"
        }],
        userInvites:[]
    }

    componentDidMount(){
        const {user} = this.props
        const {updateInvites} = this.state
        const specificuser = JSON.parse(user);
        let invites = [...this.state.invites]
        const userInvites = invites.filter(invite => (invite.sender_id===specificuser.first_name))
        this.setState({userInvites})
        const userupdateInvites = updateInvites.filter(uinvite => (uinvite.sender_id===specificuser.first_name))
        // userupdateInvites.map(addinvite => {
        //             console.log("Hello")
        //             const newAdd = [...this.state.userInvites, addinvite]
        //             this.setState({userInvites:newAdd})
        //         }) 
        // var clear = setInterval(() => {
        //     userupdateInvites.map(addinvite => {
        //         console.log("Hello")
        //         const newAdd = [...this.state.userInvites, addinvite]
        //         this.setState({userInvites:newAdd})
        //     })     
        // }, 5000);

        let count=0;
        userupdateInvites.forEach(addinvite => {
            count++;
            var clear = setInterval(()=>{
            // if(count<=userupdateInvites.length){
            const newAdd = [...this.state.userInvites, addinvite]
            this.setState({userInvites:newAdd})
            if(count>=userupdateInvites.length){ 
                clearInterval(clear)
            }
            // }
            },5000)

            // if(count===3){
            //     clearInterval(clear)
            // }
        })
    }
    
    render() { 
        const {userInvites} = this.state
        return ( 
            <React.Fragment>
                <h1>Your Invitations</h1>
                <Table userInvites={userInvites} />
            </React.Fragment>
         );
    }
}
 
export default Invitation;