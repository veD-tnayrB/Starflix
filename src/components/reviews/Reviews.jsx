import { useState } from "react";
import { useEffect } from "react"
import Review from ".";

import './reviews.scss';

export default
function Reviews({ service, id }) {
    const [reviews, setReviews] = useState([]);
    const theresReviews = reviews.length > 0;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        service(signal, id)
        .then(response => {
            setReviews(response.results);
        })

        return () => controller.abort();
    }, [id, service]);

    if (!theresReviews) return null;

    const reviewsElements = theresReviews && reviews.map(review => (
        <Review 
            key={review.id}
            review={review}
        />
    ))

    return (
        <section className="reviews">
            <h3>
                Popular Reviews
            </h3>

            <ul>
                {reviewsElements}
            </ul>
        </section>
    )
}