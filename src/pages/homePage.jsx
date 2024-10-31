import '../pages/homeStyle.css';

function HomePage() {
    return (
        <div>

            <header>
                <div className="container-header">
                    <h2>JuanRbDev</h2>
                    <nav className="navmenu">
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT ME</a></li>
                            <li><a href="">SKILLS</a></li>
                            <li><a href="">PROJECTS</a></li>
                        </ul>
                    </nav>
                    <button>Descargar CV</button>
                </div>
            </header>



            <section className="container-banner">
                <div className="banner">

                    <span className="linea2"></span>
                    <span className="linea1"></span>
                    <span className="circulo2"></span>
                    <span className="circulo1"></span>

                    <div className="container-info">

                        <h3>Hi, I am</h3>
                        <h1 id='carrera'>FRONT-END</h1>
                        <h2>Developer</h2>

                        <div className="container-redes">
                            <div className="card-redes">
                                <div id='logoGitHub' className="redes"><a href="https://github.com/JuanRbDev"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logoGitHub" /></a></div>
                                <div id='logoGitHub' className="redes"><a href="https://www.linkedin.com/in/juan-rodr%C3%ADguez-bacilio-ba10b7328/"><img src="https://cdn.icon-icons.com/icons2/2997/PNG/512/linkedin_logo_icon_187625.png" alt="logoGitHub" /></a></div>
                                <div id='logoGitHub' className="redes"><a href="https://wa.me/qr/5I2ORIKW3MVPI1 "><img src="https://i.pinimg.com/originals/82/31/69/823169a9ebb95fb53b0acf6c3efd5928.png" alt="logoGitHub" /></a></div>

                            </div>
                        </div>

                    </div>

                    <div className="container-cards">
                        <div className="cards">
                            <div className="card1"><h1>I</h1></div>
                            <div className="card2"><h1>♥</h1></div>
                            <div className="card3"><h1>&lt; / &gt;</h1></div>
                        </div>
                    </div>

                </div>
            </section>



            <section className='container-aboutMe'>

                <div className="aboutMe">

                    <div className="cardAMD">
                        <p>Soy Juan Rodríguez, estudiante de desarrollo web con un enfoque en frontend. Tengo formación en computación e informática y experiencia en tecnologías como HTML, CSS, JavaScript y Angular, además de un conocimiento básico de React, que estoy trabajando en fortalecer. Me apasiona aprender y mejorar mis habilidades, especialmente en la creación de interfaces de usuario funcionales y visualmente atractivas.
                            He tenido la oportunidad de realizar proyectos académicos y personales que me han permitido aplicar mis conocimientos y desarrollar un estilo de trabajo organizado y atento a los detalles. Busco una oportunidad para iniciar mi carrera profesional, aplicar lo que he aprendido y adquirir experiencia real en el desarrollo de aplicaciones web en un entorno colaborativo y profesional.
                        </p>
                    </div>

                    <div className="cardAMF">
                        <img src="https://i.pinimg.com/736x/b3/35/5b/b3355b0e6fb0a82a44de6d8b52e8f82c.jpg" alt="" />
                    </div>

                </div>

            </section>



            <section className='container-skills'>


                <div className="skills">

                    <h2>SKILLS</h2>


                    <div className="card-skills">
                        <div className="skill"><img src="https://camo.githubusercontent.com/0c546052aedbb0dcd893edb91216378f9e0df9c1d87d9f109838a8718342d68e/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f68746d6c2e776562703f616c743d6d6564696126746f6b656e3d34633833383963362d313336322d343961652d383563302d303365303765303534373964" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/8156c9a429a1ba8dc0ace24b12a76ff0a75b75ce8e446a703592afd7cff170ba/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f6373732e776562703f616c743d6d6564696126746f6b656e3d30306363386266332d616632382d346166612d613331652d363961656366643533373065" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/b443f110cfa91f14526c4a0ebf9f61a6e4f0cca2fa40b549731fd8e63c084123/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f6a732e776562703f616c743d6d6564696126746f6b656e3d31393531613437312d663337622d343261332d383436322d353735373534316236353335" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/89a12bea5c3a64e6450b4234227eb09acb2ef3991258f8910a83092491338c69/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f6b6f746c696e2e776562703f616c743d6d6564696126746f6b656e3d61363966373938362d656362662d346664352d393533632d313265663235653439363238" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/33b5202e9694921ec738a4ad65f4b7c73fc536daef488b4461a696f5409c90fd/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f73776966742e776562703f616c743d6d6564696126746f6b656e3d61383632613832662d373461392d343133652d386331652d336235613334623563353533" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/1385b6cd2b71bc176a6448c5419f6df5f09f434eb919d81fea0be194ca0fcd98/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f6a6176612e776562703f616c743d6d6564696126746f6b656e3d34623939383138392d626263632d343936302d613535342d386366626562373132373035" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/fb5a79012ccbed54020e8778b928295bd5bfc851bff6959dac7c801e2def369e/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f6769746875622e776562703f616c743d6d6564696126746f6b656e3d37316362346265622d643863632d343364322d383566382d353435393364633830316330" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/1f345281c8374c56bd706777e7a17194131205dd9717bf8e9dd2a356182105dd/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f6769742e776562703f616c743d6d6564696126746f6b656e3d30633231393731382d316263652d346161312d396565652d633138386433323835656132" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/02059b269f8d3dd3a02d64359ebdec69d4e61441548edd6f2ed1c8b976112f38/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f53514c7365727665722e776562703f616c743d6d6564696126746f6b656e3d64313964653934332d316662652d343631372d393961612d626236623333643566666532" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/c0f129a00373e0fee4b9e2c1a0fb2b444476806f6909c27613d2482d0f3808d3/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f4d7953514c2e776562703f616c743d6d6564696126746f6b656e3d38313036356232322d636262642d346337392d623964622d646663633032633362633933" alt="" /></div>
                        <div className="skill"><img src="https://camo.githubusercontent.com/a655d5ae3ebe542b1d3aaf20f498db5a0cec3397dab6f56ef08084de298f4d75/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f676f732d65366636302e61707073706f742e636f6d2f6f2f6d6f6e676f44422e776562703f616c743d6d6564696126746f6b656e3d35366330373465332d303337382d346231612d623562652d376137353730356564666433" alt="" /></div>
                        <div className="skill"><img src="" alt="" /></div>
                        <div className="skill"><img src="" alt="" /></div>
                        <div className="skill"><img src="" alt="" /></div>
                        <div className="skill"><img src="" alt="" /></div>
                    </div>

                </div>

            </section>



            <section className='container-projects'>

                <div className="projects">

                    <h2>PROJECTS</h2>


                    <div className="cards-projects">

                        <div className="card-proj">

                            <div className="card-img-pro">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a05606b1-f828-4733-b86c-d6414bb0b583/dfk6ac8-6a908b41-d237-4ee9-aedc-170f209ecd91.png/v1/fill/w_1280,h_427,q_80,strp/hu_tao_banner_genshin_impact_by_illustriouslily_dfk6ac8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvYTA1NjA2YjEtZjgyOC00NzMzLWI4NmMtZDY0MTRiYjBiNTgzXC9kZms2YWM4LTZhOTA4YjQxLWQyMzctNGVlOS1hZWRjLTE3MGYyMDllY2Q5MS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WyKA5xWBPuQQ9jPB29AXYuzgyFn6W-cEhOd2IaKRXHs" alt="" />
                            </div>

                            <div className="card-des-pro">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, mollitia repudiandae? Sunt magnam et facilis quaerat, reiciendis labore optio quos harum corrupti minima fugit temporibus quo expedita? Quos, ipsum repellendus.
                            </div>

                        </div>



                        <div className="card-proj">

                            <div className="card-des-pro">
                                <h5>Titulo</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque a eum doloribus commodi quidem eaque, fugiat voluptatum debitis voluptas similique. Ea, distinctio voluptatum. Molestias, exercitationem aliquam eveniet consequuntur illum mollitia.</p>
                            </div>

                            <div className="card-img-pro">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a05606b1-f828-4733-b86c-d6414bb0b583/dfk6ac8-6a908b41-d237-4ee9-aedc-170f209ecd91.png/v1/fill/w_1280,h_427,q_80,strp/hu_tao_banner_genshin_impact_by_illustriouslily_dfk6ac8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvYTA1NjA2YjEtZjgyOC00NzMzLWI4NmMtZDY0MTRiYjBiNTgzXC9kZms2YWM4LTZhOTA4YjQxLWQyMzctNGVlOS1hZWRjLTE3MGYyMDllY2Q5MS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WyKA5xWBPuQQ9jPB29AXYuzgyFn6W-cEhOd2IaKRXHs" alt="" />
                            </div>



                        </div>

                    </div>

                </div>
            </section>


            <footer class="footer">
                <p class="footer-copy">&copy; 2024 Juan Rodríguez. Todos los derechos reservados. v.1.0</p>
            </footer>





        </div>
    );
}

export default HomePage;