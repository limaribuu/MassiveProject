import React from "react";
import { Link } from "react-router-dom";

export default function RecommendationCard({
    title,
    desc,
    img,
    rating = 4.0,
    to = "#",
}) {
    return (
        <article className="rc-card">
            <div className="rc-card__media">
                <img src={img} alt={title} className="rc-card__img" />

                <div className="rc-card__badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="rc-card__bookmark">
                        <path
                            d="M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17.3c0 .8-.9 1.2-1.5.7L12 17.4l-4.5 3.6c-.6.5-1.5.1-1.5-.7V3z"
                            fill="#fb923c"
                        />
                    </svg>
                </div>

                <div className="rc-card__overlay" />
            </div>

            <div className="rc-card__content">
                <h3 className="rc-card__title">{title}</h3>
                <p className="rc-card__desc">{desc}</p>

                <div className="rc-card__footer">
                    <Link to={to} className="rc-card__btn">
                        Lihat Detail
                    </Link>

                    <div className="rc-card__rating" aria-label={`Rating ${rating}`}>
                        <svg viewBox="0 0 24 24" className="rc-card__star" aria-hidden="true">
                            <path
                                d="M12 2.3l2.8 6.1 6.6.6-5 4.4 1.5 6.5L12 16.8 6.1 20l1.5-6.5-5-4.4 6.6-.6L12 2.3z"
                                fill="#facc15"
                            />
                        </svg>
                        <span className="rc-card__score">{rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}