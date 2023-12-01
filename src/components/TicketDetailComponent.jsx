import {useEffect, useState} from "react";
import {getUserData, request} from "../helpers/axios_helper";
import {Link, useParams} from "react-router-dom";
import {useSidebar} from "./PanelComponent";

const TicketDetailComponent = () => {
    const [user] = useState(getUserData);
    const {ticketId} = useParams();
    const [ticket, setTicket] = useState([]);
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        request("GET", `ticket/${ticketId}`).then(response => setTicket(response.data));
        request("GET", `/ticket/${ticketId}/replies`).then(response => setReplies(response.data));
    }, [ticketId]);

    return (
        <div className='section dashboard min-vh-100'>
            <div className='row'>
                <div className='col-lg-3'>{useSidebar()}</div>
                <div className='col-lg-9'>
                    <h5 className='card-title ps-3'>Ticket (#{ticket.id})</h5>

                    <div className='card'>
                        <div className='card-header'>{ticket.subject}</div>
                        <div className='card-body'>
                            <p className='pt-3'>{ticket.message}</p>
                        </div>
                    </div>

                    <h5 className='card-title ps-3'>Respuestas</h5>
                    <div>
                        {
                            replies.map(record =>
                                <div className='card'>
                                    <div className='card-header'>
                                        {record.replyUser.name} -
                                        ({record.replyDate[2]}/{record.replyDate[1]}/{record.replyDate[0]})
                                    </div>
                                    <div className='card-body'>
                                        <p className='pt-3'>
                                        {record.ticket.message}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <Link to={'/tickets/new'} className='btn btn-primary'>Responder</Link>
                </div>
            </div>
        </div>
    );
}

export default TicketDetailComponent;