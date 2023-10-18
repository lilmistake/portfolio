import { Socials } from "../components/socials"

export const MeSection = () => {
    return <section id="me" className="bg-[#ffc0cb]">
        <div className="max-w-6xl mx-auto py-16 px-5">
            <b className="text-6xl bg-white">Me:</b>
            <div className="text-xl font-bold mt-5">
                {">"} A little about me and my technical background
            </div>
            <hr className="border-black" />
            <div className="mx-auto items-center mt-5">
                <center>
                    <div className="aboutme-div">
                        <div className="font-bold text-xl">
                            About me
                        </div>
                        <hr />
                        <p className="my-2">I'm a developer and student based in India, currently studying my Bachelor's
                            degree in Computer Science.
                        </p>
                        <p className="my-2">
                            I'm passionate about learning new technologies and building cool stuff with them. Click on my socials to connect with me!
                        </p>
                        <Socials />
                    </div>

                    <div className="aboutme-div">
                        <div className="font-bold text-xl">
                            Stats
                        </div>
                        <hr />

                        <p className="my-2">This graph shows my current GitHub
                            contribution streak and is automatically updated periodically: </p>
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=lilmistake&"
                            alt="lilmistake" width="100%" className="border-radius: 10px" />
                        <img src="https://github-readme-stats.vercel.app/api?username=lilmistake&show_icons=true&locale=en"
                            alt="lilmistake" width="100%" className="border-radius: 10px" />

                    </div>

                    <div className="aboutme-div">
                        <div className="font-bold text-xl">
                            Web
                        </div>
                        <hr />
                        <p>
                            <p className="my-2">I have experience creating web apps using
                                HTML, JS/TS, and CSS/Bootstrap/Tailwind CSS for styling</p>
                            <div className="my-2">
                                <img src="https://skillicons.dev/icons?i=html,css,js,bootstrap" />
                                <img src="https://skillicons.dev/icons?i=ts,tailwindcss" className="mt-2" />
                            </div>
                            <p className="margin: 10px 0px 10px;font-size: 15px;">with</p>
                            <img src="https://skillicons.dev/icons?i=react,flask,nodejs" />

                        </p>
                    </div>


                    <div className="aboutme-div">
                        <div className="font-bold text-xl">
                            Cross-platform
                        </div>
                        <hr />
                        <p className="my-2">
                            In late 2022, I decided to learn cross-platform development and started learning Dart for Flutter. Instantly fell in love with it, and currently learning it.
                            <p><img src="https://skillicons.dev/icons?i=flutter" /></p>
                        </p>
                    </div>


                    <div className="aboutme-div">
                        <div className="font-bold text-xl">
                            Database
                        </div>
                        <hr />
                        <p className="my-2">
                            I've used the following databases for my projects:

                            <img className="my-2" src="https://skillicons.dev/icons?i=mongo,sqlite,firebase,appwrite" />
                            <img src="https://skillicons.dev/icons?i=mysql,redis" />
                        </p>
                    </div>

                    <div className="aboutme-div">
                        <div className="font-bold text-xl">
                            Deployment
                        </div>
                        <hr />
                        <p className="my-2">
                            And deployed my projects to the following platforms:
                            <img src="https://skillicons.dev/icons?i=heroku,firebase,gcp,azure" />
                            <img
                                src="https://seeklogo.com/images/D/digital-ocean-logo-7B970FE624-seeklogo.com.png" width="50px" className="mt-2" />

                        </p>

                    </div>

                    <div className="aboutme-div">
                        <div className="font-bold text-xl">
                            Others
                        </div>
                        <p className="my-2">Linux has been my OS of choice because its
                            free, lightweight and boosts my productivity.</p>
                        <p className="my-2">
                            Figma and Penpot offer the best designing experience for me.
                        </p>
                        <p> I've used Tensorflow for developing AI applications and I use Postman for API testing.</p>

                        <p className="my-2"><img src="https://skillicons.dev/icons?i=linux,figma,tensorflow,postman" /></p>
                        <img src="https://cdn.icon-icons.com/icons2/3914/PNG/512/penpot_logo_icon_248878.png" width={50}></img>

                    </div>
                </center>
            </div>
        </div>
    </section>

}