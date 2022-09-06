import { useEffect } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'

const PartnerWithUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <Nav />

      <section className="pageinforhd pt-5 pb-5 nohdleftbrdcm">
        <div className="container">
          <nav aria-label="breadcrumb" class="float-lg-right">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Become Our Skilling Partner</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="becomeskillpt">
        <div className="container">
          <div className="hdingst">
            <div className="row">
              <div className="col-lg-6 col-md-6" style={{top:"85px"}}>
            <h2 className="mainhds">Become Our Skilling Partner</h2>
                <ul >
                  <li>Partner with us and enhance your brand.</li>
                  <li>Increased opportunity by getting students to onboard on in your institutes</li>
                  <li>Edxplore to generate highest volume of more than one lakh searches by the learners on its
                  platform
                  </li>
                  <li>Opportunity to cross learning and tie ups with thousands of other institutes, tutors,
                  knowledge partners etc.</li>
                  <li>Increased revenue and future expansion
                  </li>
                </ul>
           
                <a target="_blank" href="https://api.edxplore.com/" className="blulghtcta">Get Started</a>
              </div>
              <div className="col-lg-6 col-md-6">
              <img src={`./images/a.png`} className="fllimg" />
              </div>
            </div>


          </div>
          <div className="pgbanners">
            {/*  */}
          </div>
        </div>
      </section>
      <section className="partnercontsft">
        <div className="container">
          <div className="partsetsdipl">
            <div className="row">
              <div className="col-lg-6 col-md-6 align-self-center">
                <div className="coursepls">
                  <h1 className="mainhds">What it means to become our partner</h1>
                  <li>Leverage best-in-class content and expert thought leadership for the students</li>
                  <li>Drive digital transformation and help increase access to meaningful career growth
                    opportunities for students</li>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/partnestats.jpg`} className="fllimg" />
              </div>
            </div>
          </div>
          <div className="partsetsdipl">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <img src={`./images/b.png`} className="fllimg" />
              </div>
              <div className="col-lg-6 col-md-6 align-self-center">
                <div className="coursepls">
                  <h1 className="mainhds">Provide services &amp; shape
                lives for better</h1>
                  <li>Give opportunities for career advancement and increased earning potential
                    </li>
                  <li>Provide offerings on the latest technical subjects and products
  </li>
                  <li>Unlock greater employee satisfaction while improving commitment, retention, and morale   </li>
                </div>
              </div>
            </div>
          </div>
          <div className="partsetsdipl">
            <div className="row">
              <div className="col-lg-6 col-md-6 align-self-center">
                <div className="coursepls">
                  <h1 className="mainhds">Take your institution to every
                corner of the world</h1>
                  <li>Increase brand awareness and broaden your organization’s reach around the world
                </li>
                  <li>Build connections with talent, companies and governments using EdXplore</li>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/partnerinfo2.jpg`} className="fllimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
{/*       
      <section className="testimoniapn">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">Testimonial</h2>
          </div>
          <div className="testnorflow">
            <div className="testipnlpts">
              <div className="usrthmbs">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/1.jpg`} />
              </div>
              <div className="usrrightinfos">
                <p>Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur
              adipisci velit</p>
                <h6 className="mainhds">Scarlett Johansson</h6>
                <p className="usrnmtst">Star Industries</p>
              </div>
            </div>
            <div className="testipnlpts">
              <div className="usrthmbs">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/3.jpg`} />
              </div>
              <div className="usrrightinfos">
                <p>Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur
              adipisci velit</p>
                <h6 className="mainhds">Scarlett Johansson</h6>
                <p className="usrnmtst">Star Industries</p>
              </div>
            </div>
            <div className="testipnlpts">
              <div className="usrthmbs">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/2.jpg`} />
              </div>
              <div className="usrrightinfos">
                <p>Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur
              adipisci velit</p>
                <h6 className="mainhds">Scarlett Johansson</h6>
                <p className="usrnmtst">Star Industries</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="becomeskillpt pt-5">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">Apply to become a partner</h2>
            <a target="_blank" href="https://api.edxplore.com/" className="blulghtcta">Get Started</a>
          </div>
        </div>
      </section>




      <Footer />
    </>
  )
}

export default PartnerWithUs
