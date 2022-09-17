import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default
function Review({ review }) { 

    return (
        <li>
            <article className="review">
                <a 
                    href={review.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <AccountCircleIcon className="profile-img" />

                    <span className="user-name">
                        {review.author_details.username}
                    </span>
                </a>

                <p className="content">
                    {review.content}
                </p>
            </article>
        </li>
    )
}