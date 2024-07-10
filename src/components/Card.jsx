import "./card.css"

export default function Card( {task} ){
    const uid = task.userId
    const user = uid.charAt(0) + uid.charAt(uid.length-1)
    return (
        <div className="card">
            <div className="card-wrapper">
                 <div className="card-id"> {task.id} </div>
                 <div className="card-user">{user.toUpperCase()}</div>
            </div>
            <div className="card-heading"> {task.title} </div>
            <div>
                {
                 task.tag.map(t => <div className="card-tag"> {t} </div>)
                }
            </div>

        </div>
    );
}

