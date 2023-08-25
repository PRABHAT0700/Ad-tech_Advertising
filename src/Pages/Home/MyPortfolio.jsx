import data from "../../data/index.json";

export default function MyPortfolio() {

  return (

    <section className="portfolio--section" id="MyPortfolio">

      <div className="portfolio--container-box">

        <div className="portfolio--container">
          <p className="sub--title">Experties</p>
          <h2 className="section--heading">Our Services</h2>
        </div>

        <div>
          <a style={{textDecoration:"none"}} href="https://wa.me/6265856938"><button className="btn btn-github">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="git svg" style={{heigh:"10px", width:"50px"}} />
            Connect on Whatsapp
          </button></a>

        </div>

      </div>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (

          <div key={index} className="portfolio--section--card">

            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>

            <div className="portfolio--section--card--content">


              <div style={{lineHeight:"4rem"}}>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>

            
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}