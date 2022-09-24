import Logo from "components/logo"

export default
function StarflixCredits() {
    return (
        <a 
            target="_blank"
            href="https://github.com/veD-tnayrB/Starflix"
            rel="noreferrer"
        >
            <div className="starflix-credits">
                <Logo />
                <p className="credits">
                    Starflix is a web page that allows you to see advanced information about
                    your favorite movies, series, and people.
                </p>
            </div>
        </a>
    )
}