import React, { useState, useEffect } from 'react'
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "./firebase";
import Message from './Message';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    // 1. Changes URL
    // 2. Connects to the database
    // 3. Uses URL param(room ID) to fetch room details from the DataBase!
    useEffect(() => {
        //only run this code when roomId exist
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
                ))
        }

        db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp','asc')
                .onSnapshot(snapshot => setRoomMessages(
                    snapshot.docs.map(doc=>doc.data())
                ))
    }, [roomId])

    // console.log(roomDetails)
    console.log(roomMessages)
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        {/*
                        if roomDetails exist 
                        and roomDetails?.name exist than show
                        roomDetails?.name
                        <strong>#{roomDetails && roomDetails?.name && roomDetails?.name }</strong>
                        */}
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__message">
                {roomMessages.map(({message, timestamp, user, userImage})=>(
                    <Message
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
