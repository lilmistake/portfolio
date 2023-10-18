import { Socials } from "../components/socials"

export const FooterSection = () => {
    return <section className=" bg-black text-white py-10" id="connect">
        <div className="center py-5 max-w-6xl mx-auto px-5" id="connect-div">
            <b className="text-6xl bg-white text-black">Connect:</b>
            <div className="text-lg mt-2">
                {">"} Connect with me at my socials, or drop an email!
            </div>
            <Socials />
        </div>
    </section>
}