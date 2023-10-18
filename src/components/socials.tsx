export const Socials = () => {
    return <div className="flex">
        <div id="socials-ul" className="grid grid-cols-3 gap-x-3 my-3 text-3xl">
            <div className="socials-li"><a href="https://www.github.com/lilmistake" target="_blank"><i
                className="fa fa-github socials"></i> </a></div>
            <div className="socials-li">
                <a href="https://www.linkedin.com/in/rasinrohit" target="_blank"><i
                    className="fa fa-linkedin socials"></i></a>
            </div>
            <div className="socials-li">
                <a href="mailto:rasinrohit@gmail.com" target="_blank"><i className="fa fa-envelope socials"></i></a>

            </div>
        </div>
    </div>
}