import { Socials } from "../components/socials"

export const HeroSection = () => {
    return <section id="home">
        <div className="py-5 px-10 mx-auto ">
            <div className="flex">
                <div className="flex-1"></div>
                <div className="text-center my-auto mx-auto text-lg grid grid-cols-3 gap-x-3">
                    <a href="#me"><div className="nav-li">Me</div></a>
                    <a href="#blog" onClick={()=>{
                        alert("Work in Progress!")
                    }}><div className="nav-li">Blog</div></a>
                    <a href="#connect"><div className="nav-li ">Connect</div></a>
                </div>
            </div>
            <div
                className=" mx-auto rounded-xl max-w-lg m-3 border-2 my-20 border-black p-5 z-10 bg-white" style={{ boxShadow: "5px 5px 0px 1px #7573c1" }}>
                <br /><b className="text-4xl">Hi I'm Rohit</b>
                <div className="font-bold text-2xl">
                    {">"} Student, Developer, Tech Enthusiast
                </div>
                <hr className="w-1/2"></hr>
                <Socials />
            </div></div>
    </section>
}