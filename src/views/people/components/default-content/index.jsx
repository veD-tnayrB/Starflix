import { getPopular } from "services/people";
import Section from "components/section";

export default
function DefaultContent() {

    return (
        <>
            <Section
                type="person"
                sectionId="popular-people"
                sectionTitle="Most Popular People"
                service={getPopular}
            />
        </>
    )
}