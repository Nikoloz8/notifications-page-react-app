import Data from "../../../data.json"
import "./messages.css"

export default function Messages({ setReadIds, readIds }) {
    let data = Data.notifications

    return (
        <>
            {data.map((e) => (
                <div key={e.id} >
                    <div className="notification" style={readIds.includes(e.id) ? { backgroundColor: "#ffffff" } : null} onClick={() => (!readIds.includes(e.id)) ? setReadIds([...readIds, e.id]) : null}>
                        <div className='avatar-actions'>
                            <img className='avatar' src={e.image} alt="" />
                            <div className='action-time-comment-picture'>
                                <div className="action-time">
                                    <h3>
                                        <span className='name'>{e.name}</span>{" "}
                                        <span className='action'>{e.action}</span>{" "}
                                        {(e.type !== "follow") ? (<span className='post'>{e.post}</span>) : null}
                                        < span className='dot' style={readIds.includes(e.id) ? { display: "none" } : null}></span>
                                    </h3>
                                    <h4 className='time'>{e.timeAgo}</h4>
                                </div>
                                {(e.type === "comment") ? (<img className='comment-picture' src={e.comentImage} />) : null}
                            </div>
                        </div>
                        {(e.type === "message") ? (<div className='message'>
                            Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.
                        </div>) : null}
                    </div>
                </div>
            ))
            }</>
    )


}
