import { useEffect } from 'react'
import AOS from 'aos'
import Nav from "../components/header/Nav";
import Footer from '../components/footer/Footer';

const CourseDetails = () => {
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
          <nav aria-label="breadcrumb" className="float-lg-right">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">All Course</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Individual Course Page
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="coursedetailmain">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="coursepls">
                <h1 className="mainhds">Sports Management</h1>
                <h4 className="insnames">Deakin Business School</h4>
                <p>
                  Master the Trends and Technologies in the Business Side of
                  Sports Management.
                </p>
                <div className="dtlsctaviews desktopcopy">
                  <a href="#" className="grylghtcta">
                    Apply Now
                  </a>
                  <a href="#" className="blulghtcta">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center">
              <img src="./images/courseslogo/deake.png" className="ms" />
            </div>
            {/*<div class="col-md-6 col-lg-6">
				<div class="dtlsctaviews">
									<a href="#" class="grylghtcta">Apply Now</a>
									<a href="#" class="blulghtcta">Download Brochure</a>
								</div>
			</div>*/}
          </div>
          <div className="coursepackdtls">
            <div className="row">
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img src="./images/courseslogo/courseinf/1.png" />
                <h6 className="mainhds">Delivery Type</h6>
                <h4 className="insnames">Online</h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img src="./images/courseslogo/courseinf/2.png" />
                <h6 className="mainhds">Start Date</h6>
                <h4 className="insnames">July 2021</h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img src="./images/courseslogo/courseinf/3.png" />
                <h6 className="mainhds">Duration</h6>
                <h4 className="insnames">12 Months</h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img src="./images/courseslogo/courseinf/4.png" />
                <h6 className="mainhds">Projects</h6>
                <h4 className="insnames">2 Months Live Projects</h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img src="./images/courseslogo/courseinf/5.png" />
                <h6 className="mainhds">Enrolled</h6>
                <h4 className="insnames">+ Students</h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img src="./images/courseslogo/courseinf/6.png" />
                <h6 className="mainhds">Fee</h6>
                <h4 className="insnames">42,373</h4>
              </div>
              <div className="dtlsctaviews mobilecopy">
                <a href="#" className="grylghtcta">
                  Apply Now
                </a>
                <a href="#" className="blulghtcta">
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="coursetextmoreinf">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Curriculm
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p>
                  This new Program is designed to learn how to make a business
                  desirable for customers, financially viable for stakeholders,
                  and feasible to build and deliver to the world. Instead of
                  writing a static business plan, the learner will learn to
                  design rapid prototypes to test and iterate business concepts.
                  Whether for new initiatives and ventures inside an existing
                  business or organization, or for an entrepreneur ready to
                  bring a startup to life, this course will help them de-risk
                  your business ideas and craft a sustainable business model
                  that is rooted in the people they wish to serve.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p>
                  Instead of writing a static business plan, the learner will
                  learn to design rapid prototypes to test and iterate business
                  concepts. Whether for new initiatives and ventures inside an
                  existing business or organization, or for an entrepreneur
                  ready to bring a startup to life, this course will help them
                  de-risk your business ideas and craft a sustainable business
                  model that is rooted in the people they wish to serve.
                </p>
              </div>
            </div>
          </div>
          <div className="keyftscours">
            <h4 className="mainhds">
              <span className="ogx">Key</span> Highlights
            </h4>
            <ul>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="brochuregalblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 align-self-center">
              <div className="hdingst whtxt">
                <h2 className="mainhds">Brochure</h2>
              </div>
              <p>
                Best-in-class content by leading faculty and industry leaders in
                the form of videos, cases and projects.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <a href="#" className="orangejncta">
                <i className="fas fa-download" /> Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="instituredemosd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 whtxt align-self-center">
              <h4 className="mainhds">
                <span className="ogx">About</span> the institute
              </h4>
              <p>
                Ranked among the top universities in India and considered a
                cerebral destination forstudents across the world and Bangalore
                in particular, for its illustrious history of developing
                talent,Jain (Deemed-to-be University) is a hub for learning in
                every sense of the word.
              </p>
              <a href="#" className="orangejncta">
                Know More
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src="./images/aboutinst.jpg" className="fllimg" />
            </div>
          </div>
        </div>
      </section>
      <section className="testimoniapn">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">What Our Learners Say</h2>
          </div>
          <div className="testimparts">
            <div className="reviewtestim owl-carousel owl-theme">
              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img src="./images/reviews/1.jpg" />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>
              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img src="./images/reviews/3.jpg" />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>
              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img src="./images/reviews/3.jpg" />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>
              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img src="./images/reviews/2.jpg" />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whtsects trustbycoms roundicon">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">
              Trust by <span className="ogx"> Companies</span>
            </h2>
          </div>
          <div className="cpmslide">
            <div className="trustcmpcarso owl-theme owl-carousel">
              <div className="item">
                <div className="lgocirc">
                  <img src="./images/client/1.png" />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img src="./images/client/2.png" />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img src="./images/client/3.png" />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img src="./images/client/4.png" />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img src="./images/client/5.png" />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img src="./images/client/5.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faqnewtys">
        <div className="container">
          <div className="text-center hdingst midtwhdfq align-self-center">
            <h2 className="mainhds">
              F<span className="ogx">requently</span>
              <br />F<span className="ogx">Asked</span>
              <br />Q<span className="ogx">uestions</span>
            </h2>
            <img src="./images/faqroundimgs.png" className="rouim" />
          </div>
          <div id="accordion8">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Is the online degree program offered by JAIN (Deemed- to-be
                    University) UGC entitled?
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Yes, the University is entitled by the University Grants
                  Commission (UGC) to offer online degree programs.
                  Additionally, our MBA and MCA programs are approved by AICTE.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How many credits does the program have?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How will I be notified about the admission confirmation?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How will I be notified about the admission confirmation?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What is the eligibility criteria for online degree programs?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSix">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How many credits does the program have?
                  </button>
                </h5>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSeven">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How will I be notified about the admission confirmation?
                  </button>
                </h5>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingEight">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How many credits does the program have?
                  </button>
                </h5>
              </div>
              <div
                id="collapseEight"
                className="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tpcateg contlast">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <form>
                <div className="customfrms lssmg">
                  <div className="form-group">
                    <input
                      type="textr"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Id"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group text-center">
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-lg-6 align-self-center">
              <div className="hdingst whtxt">
                <h2 className="mainhds">
                  <span className="ogx">Apply now!</span>
                </h2>
                <p className="text-white">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet,
                  <br />
                  consectetur, adipisci velit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
     <Footer/>

    </>
  )
}

export default CourseDetails