import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import AOS from 'aos'
import Link from 'next/link'
import Nav from '../../../components/header/Nav'
import Footer from '../../../components/footer/Footer'
import ReactHtmlParser from 'react-html-parser';
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})

const Institutes = () => {
  const [institute, setInstitute] = useState({})
  const router = useRouter()
  const institutes = router.query.institutes
  const [testimonials, setTestimonials] = useState([])
  const [trustedByCompanies, setTrustedByCompanies] = useState([])
  const [FAQ, setFAQ] = useState([])

  useEffect(() => {
    if (!router.isReady) return

    getInstitute()
    getTestimonails()
    getTrustedByCompanies()
    getFAQ()

    AOS.init({
      duration: 2000,
    })
  }, [router.isReady])

  const getFAQ = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-faq`,
      )
      const get_faq = data.get_faq
      setFAQ(get_faq)

      console.log(data)
    } catch (err) {
      console.log(err)
  }
}

  const getTrustedByCompanies = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-trusted-by-companies`,
      )
      const get_trusted_by_companies = data.get_trusted_by_companies
      setTrustedByCompanies(get_trusted_by_companies)

      console.log(data)
    } catch (err) {
      console.log(err)
  }
}
  
  const getTestimonails = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-testimonials`,
      )
      const get_testimonials = data.get_testimonial
      setTestimonials(get_testimonials)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getInstitute = async (value) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-institute`,
        {
          slug: institutes,
        },
        config,
      )

      const getInstitute = data.get_institute

      setInstitute(getInstitute)
    } catch (err) {
      console.log(err)
    }
  }

  const state = {
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
        margin: 10,
        loop: true,
      },

      766: {
        items: 2,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },
    },
    responsive_trust_comp: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      300: {
        items: 3,
        nav: false,
        dots: true,
        loop: true,
      },

      766: {
        items: 3,
        nav: false,
        dots: false,
        loop: true,
      },

      1200: {
        items: 5,
        nav: false,
        dots: true,
        center: true,
      },
    },
  }

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
                {institute && institute.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="coursedetailmain">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 align-self-center text-center text-lg-left">
              <div className="coursepls">
                <h1 className="mainhds">{institute && institute.name}</h1>
                <p>{institute && institute.certifications}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center text-lg-right">
    
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_B_API}/uploads/images/institute/logo/` +
                    institute.logo
                  }
                  className="ms"
                />
            </div>
          </div>
          <div className="coursepackdtls">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/1.png`}
                />
                <h6 className="mainhds">Courses</h6>
                <h4 className="insnames">
                  {institute && institute.courses && institute.courses.length}
                </h4>
              </div>
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/7.png`}
                />
                <h6 className="mainhds">Hours</h6>
                <h4 className="insnames">250</h4>
              </div>
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/5.png`}
                />
                <h6 className="mainhds">Enrolled</h6>
                <h4 className="insnames">
                  {institute && institute.students_enrolled}+ Students
                </h4>
              </div>
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/8.png`}
                />
                <h6 className="mainhds">Certification</h6>
                <h4 className="insnames">
                  {institute && institute.certifications}
                </h4>
              </div>
            </div>
          </div>
          <div className="coursetextmoreinf">
            <h4 className="mainhds mb-lg-5"> About</h4>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p>{institute && ReactHtmlParser(institute.about)}</p>
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
        </div>
      </section>
      <section className="testimoniapn pb-0">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">All Courses</h2>
          </div>
          <div className="dtabasedcateg mt-lg-5 mt-5">
            <div className="row">
              {institute &&
                institute.courses &&
                institute.courses.map((course, key) => (
                  <div className="col-md-6 col-lg-4">
                    <div className="coursepanel">
                      <div className="twycol">
                        <div className="coursecontens">
                          <h4>{course.name}</h4>
                          <p>
                            {course.short_desc} <a href="#">Read more..</a>
                          </p>
                        </div>
                      </div>
                      <div className="coursedurtime">
                        <span>
                          <img
                            src={`${process.env.NEXT_PUBLIC_B_API}/images/scheduleicon.png`}
                          />{' '}
                          {course.duration} Months
                        </span>
                        <span>
                          <img
                            src={`${process.env.NEXT_PUBLIC_B_API}/images/ppp.png`}
                          />{' '}
                          pgp-courses
                        </span>
                      </div>
                      <div className="keydts">
                        <img
                          src={`${process.env.NEXT_PUBLIC_B_API}/images/keychain.png`}
                        />
                        <p>
                          <span>Key Learnings:</span>
                          {course.key_learnings}
                        </p>
                      </div>
                      <div className="dtlsctaviews">
                        <Link href={`${course.institute.slug}/${course.slug}`}>
                          <a href="#" className="grylghtcta">
                            View Details
                          </a>
                        </Link>
                        <a href="#" className="blulghtcta">
                          Enquire
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
   
      {testimonials.length && (
          <section className="testimoniapn">
            <div className="container">
              <div className="text-center hdingst">
                <h2 className="mainhds">Testimonials</h2>
              </div>
              <div className="testimparts">
                <OwlCarousel
                  className="reviewtestim owl-carousel owl-theme"
                  loop
                  margin={40}
                  nav
                  center
                  responsive={state.responsive_top_cat}
                >


        {testimonials.map((testimonailsData, key) => (

                  <div className="item">
                    <div className="testipnlpts">
                      <p>
                        {testimonailsData.description}
                      </p>
                      <div className="usrthmbs">
                       

                          <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}/uploads/images/testimonials/` +
                              testimonailsData.image
                            }
                          />

                      </div>
                      <p className="usrnmtst">{testimonailsData.name}</p>
                    </div>
                  </div>

        ))}

                  
                 
                </OwlCarousel>
              </div>
            </div>
          </section>

)}

{trustedByCompanies.length && (

<section className="whtsects trustbycoms">
  <div className="container">
    <div className="text-center hdingst">
      <h2 className="mainhds">Trust by Companies</h2>
    </div>
    <div className="cpmslide">
      <OwlCarousel
        className="trustcmpcarso owl-carousel owl-theme"
        loop
        margin={10}
        center
        items={5}
        responsive={state.responsive_trust_comp}
      >

  {trustedByCompanies.map((trustedByCompaniesData, key) => (

        <div className="item">
          <div className="lgocirc">
          <img
                  src={
                    `${process.env.NEXT_PUBLIC_B_API}/uploads/images/trusted-by-companies/` +
                    trustedByCompaniesData.logo
                  }
                />
          </div>
        </div>

  ))}

       
      </OwlCarousel>
    </div>
  </div>
</section>

)}

      
{FAQ.length && (

<section className="faqnewtys">
  <div className="container">
    <div className="text-center hdingst midtwhdfq align-self-center">
      <h2 className="mainhds">
        F<span className="ogx">requently</span>
        <br />F<span className="ogx">Asked</span>
        <br />Q<span className="ogx">uestions</span>
      </h2>
      <img
        src={`${process.env.NEXT_PUBLIC_B_API}/images/faqroundimgs.png`}
        className="rouim"
      />
    </div>
    <div id="accordion8">

    {FAQ.map((FAQData, key) => (

      <div className="card">
        <div className="card-header" id={`headone` + FAQData.id}>
          <h5 className="mb-0">
            <button
               className={key == 0 ?  `btn btn-link` : `btn btn-link collapsed`} 
               data-toggle="collapse"
               data-target={"#collapseTwo" + key}
               aria-expanded={key == 0 ? `true` : `false`}
               aria-controls={`collapseTwo` + key}
            >
             {FAQData.question}
            </button>
          </h5>
        </div>
        <div
           id={`collapseTwo` + key}
           className="collapse"
           aria-labelledby={`headone` + FAQData.id}
           data-parent="#accordion8"
        >
          <div className="card-body">
            {FAQData.answer}
          </div>
        </div>
      </div>

    ))}
    </div>
  </div>
</section>

)}

      <Footer />
    </>
  )
}

export default Institutes
