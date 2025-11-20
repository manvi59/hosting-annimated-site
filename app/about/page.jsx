import PriceSection from "../PriceSection.jsx"
import Testimonials from "../Testimonials.jsx";
import "./about.css";
export default function Home() {
// const fun=()=>{
//     console.log("hhhhhhhhhhhhhhhhh");
// }


    return (
        <>

         <nav>
                <div className="container nav-inner">
                    <div className="logo">myhost</div>
                    <div className="menu">
                        <a href="#">Services</a>
                        <a href="#">Case Studies</a>
                        <a href="#">Pricing</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="nav-cta"><a href="#" 
                    // onClick={fun()}
                    
                    >Contact Us →</a></div>
                </div>
            </nav>


            <section className="hero container">
                <h1>Designed for billions, and we are the team behind <span className="gradient">future unicorns.</span></h1>
                <p>We're not just a design agency. We help companies build and scale world‑className digital products, backed by results.</p>
                <div className="hero-img">
                    <img src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/687a50ee646e782faa8f6e1c_Rectangle%2018299.webp" height="100%" width="100%" />
                </div>
            </section>


            <section className="trust">Trusted by 500+ global companies</section>


            <section className="stats-section">
                <div className="container stats-heading"><h2>Bold design, billion‑dollar proof. We measure impact, <span className="grey"> not just ship pixels. </span></h2></div>
                <div className="container stats-grid">
                    <div className="card"><h3>$10B+</h3><p>raised through UX‑led launches</p></div>
                    <div className="card"><h3>400%</h3><p>uplift in conversions</p></div>
                    <div className="card"><h3>100M+</h3><p>users reached</p></div>
                    <div className="card"><h3>140+</h3><p>Awards recognised globally</p></div>
                    <div className="card"><h3>250+ Testimonials</h3><p>trusted worldwide</p></div>
                </div>
            </section>


            <section className="container split">
                <img src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/687b579980c6ee209097e4b8_Photo%202-p-800.webp" height="100%" width="100%" />
                <div className="text">
                    <h2>From one laptop to 22+ countries</h2>
                    <p>Wavespace didn’t start in a co-working space or some glossy VC-funded setup. It started in a small bedroom, just one laptop, a noisy fan, and a founder who couldn’t stop thinking about why so many good ideas fail.

So we helped early teams fix broken onboarding, redesign confusing UX, and turn messy ideas into real products. One founder at a time.

But now? Wavespace works with 500+ startups, helps teams launch faster MVPs, improve conversion, and build systems that scale. Our design now powers 100M+ users across 22 countries, from early-stage AI tools to Series B SaaS giants.

But honestly? We still build like it’s day one, fast, honest, human. Behind every screen is someone betting it all on an idea.</p>
                    <a className="btn" href="#">Shape your vision →</a>
                </div>
            </section>



            <section className="container why">
                <div className="left">
                    <img src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6816e7ca55955501354f28ca_image1-p-1080.webp"   height="100%" width="100%"/>
                </div>
                <div className="right">
                    <h2>Why MyHost? We care like co‑founders.</h2>
                    <p>We treat your product like it’s ours. Because we believe design is direction, not decoration.</p>
                    <ul className="feature-list">
                        <li><span>Startup‑Speed Process</span> →</li>
                        <li><span>SaaS, AI & Web3 Experts</span> →</li>
                        <li><span>Work with Experts, Not Layers</span> →</li>
                        <li><span>Design That Performs</span> →</li>
                        <li><span>Flexible Engagement Models</span> →</li>
                    </ul>
                </div>
            </section>



            <section className="service-block blue">
                <div className="container content">
                    <div>
                        <h2>Branding Identity</h2>
                        <p>Create a global brand with expert strategy, visuals, and digital presence.</p>
                        <a className="btn" href="#">Build brand identity →</a>
                    </div>
                    <img src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6911779d703665082cd513b1_ai-web-ux-design%20(1).webp" height="100%" width="100%" />
                </div>
            </section>



            <section className="container split">
                <div className="text">
                    <h2>UI UX Design</h2>
                    <p>Turn your ideas into powerful experiences through research‑driven design.</p>
                    <a className="btn" href="#">Improve product UX →</a>
                </div>
                <img src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6911769bec0d8e60edbba6eb_branding-identity-service-of-wavespace.webp"  height="100%" width="100%"/>
            </section>



            <section className="service-block yellow">
                <div className="container content">
                    <div>
                        <h2>Web Design</h2>
                        <p>Responsive, user‑friendly, beautiful websites that convert visitors into customers.</p>
                        <a className="btn" href="#"   
                        style={{background:"#111"}}
                        >Design website today →</a>
                    </div>
                    <img src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/691177a5b7f0575f57b73716_b2b-ui-ux-design%20(1).webp" />
                </div>
            </section>


            <section className="service-block orange">
                <div className="container content">
                    <div>
                        <h2>Build Product (MVP)</h2>
                        <p>Build fast, test with real users, validate features, and scale with confidence.</p>
                        <a className="btn" href="#" 
                        
                        style={{background:"#fff", color:"#000"}}
                        >Build your MVP →</a>
                    </div>
                    <img src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6911779d703665082cd513b1_ai-web-ux-design%20(1).webpg"  height="100%" width="100%"/>
                </div>
            </section>


            <section className="founder">
                <div className="container founder-inner">
                    {/* <img src="/mnt/data/2f36deef-fc95-4ce1"> */}
                </div>
            </section>
            
        </>
    )
}