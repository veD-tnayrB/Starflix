import AdultIndicator from "components/age-indicator/AdultIndicator"
import FriendlyIndicator from "components/age-indicator/FriendlyIndicator"

import './age-indicator.scss';

export default
function AgeIndicator({ adult }) {
    const icon = adult ? <AdultIndicator /> : <FriendlyIndicator />;

    return (
        <div className="age-indicator">
            {icon}
        </div>
    )
}