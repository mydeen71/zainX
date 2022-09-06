import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Select from 'react-select'
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'
import Autosuggest from 'react-autosuggest'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const Home = () => {
  const [cities, setCities] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [jainAdvantage, setJainAdvantage] = useState([])
  const [trustedByCompanies, setTrustedByCompanies] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [catSelected, setCatSelected] = useState('')
  const [courseMode, setCourseMode] = useState('hybrid-1')
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setLoading(true)

    getCities()
    getCourseCategory()
    getFeaturedCourses()
    getTestimonails()
    getJainAdvantage()
    getTrustedByCompanies()

    AOS.init({
      duration: 2000,
    })
  }, [])

  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const getFeaturedCourses = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-featured-course`,
      )
      const getCourses = data.get_courses
      setCourses(getCourses)

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

  const getJainAdvantage = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-jain-advantage`,
      )
      const get_jain_advantage = data.get_jain_advantage
      setJainAdvantage(get_jain_advantage)

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

  const onChange = (event, { newValue, method }) => {
    setValue(newValue)
    setCatSelected(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: 'Find the perfect course for you.....',
    value,
    onChange: onChange,
  }

  const getSuggestionValue = (suggestion) => suggestion.name

  const renderSuggestion = (suggestion) => (
    <p>
      <BsSearch size="12px" style={{ marginTop: '-0.4em' }} /> {suggestion.name}
    </p>
  )

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : categories
        .filter(
          (lang) =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue,
        )
        .slice(0, 5)
  }

  const getCities = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-cities`,
      )
      const get_cities = data.get_cities
      setCities(
        get_cities.map((opt) => ({
          label: opt.name,
          value: opt.id,
          slug: opt.slug,
        })),
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleCity = (selectedOptions) => {
    setSelectedCity(selectedOptions)
  }

  const getCourseCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-categories`,
      )
      const get_categories = data.get_course_category
      setCategories(get_categories)
      setLoading(true)
    } catch (err) {
      console.log(err)
    }
  }
  /*form component element*/
  const Form = () => {
    return (
      <div className="cusjnbar">
        <form onSubmit={handleSubmit}>
          <div className="btn-group btn-group-toggle" style={{
            width: 312,
            display: "inline"
          }}>
            <label
              className={
                courseMode == 'hybrid-1'
                  ? 'btn btn-secondary active'
                  : 'btn btn-secondary'
              }
            >
              <input
                type="radio"
                name="options"
                value="hybrid-1"
                onChange={(e) => handleMode(e)}
              />{' '}
            Hybrid
          </label>
            <label
              className={
                courseMode == 'online-2'
                  ? 'btn btn-secondary active'
                  : 'btn btn-secondary'
              }
            >
              <input
                type="radio"
                name="options"
                value="online-2"
                onChange={(e) => handleMode(e)}
              />{' '}
            Online
          </label>
            <label
              className={
                courseMode == 'offline-3'
                  ? 'btn btn-secondary active'
                  : 'btn btn-secondary'
              }
            >
              <input
                type="radio"
                name="options"
                value="offline-3"
                onChange={(e) => handleMode(e)}
              />{' '}
            Offline
          </label>
          </div>

          <div className="srchbar">
            <Select
              className="form-control"
              options={cities}
              placeholder="City"
              onChange={handleCity}
              styles={styles}
            />

            <Autosuggest
              className="form-control"
              suggestions={suggestions}
              onSuggestionsFetchRequested={
                onSuggestionsFetchRequested
              }
              onSuggestionsClearRequested={
                onSuggestionsClearRequested
              }
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />

            <button type="submit">
              <i className="far fa-search" style={{ fontSize: 20, color: "#28284c" }} />
            </button>
          </div>
        </form>
      </div>

    )

  }




  const styles = {
    menuList: (base) => ({
      ...base,

      '::-webkit-scrollbar': {
        width: '4px',
        height: '0px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }),
  }

  const state = {
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 2,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
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
        items: 4,
        nav: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
    },
    responsive_top_cat: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
      },

      766: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 3,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: true,
      },
    },
    responsive_top_catnew: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },

      766: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 4,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: true,
      },
    },
    responsive_trust_comp: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 3,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
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
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: true,
      },
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let city = ''

      if (selectedCity != null) {
        city = selectedCity.slug + '-' + selectedCity.value
      } else {
        city = ''
      }

      const slug = convertToSlug(catSelected)
      const mode = courseMode

      if (city != '' && slug != '') {
        router.push({
          pathname: '/courses',
          query: { city: city, category: slug, mode: mode },
        })
      } else if (city != '') {
        router.push({
          pathname: '/courses',
          query: { city: city, mode: mode },
        })
      } else if (slug != '') {
        router.push({
          pathname: '/courses',
          query: { category: slug, mode: mode },
        })
      } else {
        router.push({
          pathname: '/courses',
          query: { mode: mode },
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  }

  const handleMode = (event) => {
    const { value } = event.target
    setCourseMode(value)
  }

  return (
    <>
      <Nav />



      {loading && (
        <>
          <section className="homemainbanner">

            <Carousel>

              <div className='bannerimg'>

                <div className='col-md-6 col-lg-6'>
                  <div className='contA'>
                    <h1
                      className="bnrhd" >
                      Connecting learners to their dream career
                      <span style={{ color: "#fff" }}> Explore top Institutes <br /></span> </h1>
                 
                      
     <hr className='hrx' />
     
                    <div className='bform'>
                      <p> EdXplore: India’s Leading Educational Aggregator</p>
                      <Form />
                    </div>

                  </div>
                </div>
                <div className='col-md-6 col-lg-6 bgimage '>
                  <img className='imgb' src="./images/pics1.png" alt="bannera" />
                </div>
              </div>

              <div className='bannerimg'>
                <div className='col-md-6 col-lg-6'>
                  <div className='contA'>
                  <h1
                      className="bnrhd" >
                      Your Gateway to a
                      <span style={{ color: "#fff" }}>Successful career <br /></span> </h1>
                 
                    <hr className='hrx' />
                   
                    <div className='bform'>
                    <p> Find Best Coaching in your City. Explore Top Institutes</p>
                      <Form />
                    </div>

                  </div>
                </div>
                <div className='col-md-6 col-lg-6 '>
                  <img className='imgb' src="./images/pics2.png" alt='bannerb' />
                </div>
              </div>

            </Carousel>

          </section>






          {/* 
          <section className="aboutsect">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 col-lg-6 text-center"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-sine"
                >
                  <div className="vdthmbs">
                    <img
                      src={`${process.env.NEXT_PUBLIC_B_API}/images/playicon.png`}
                      className="plicon"
                    />
                    <img
                      src={`${process.env.NEXT_PUBLIC_B_API}/images/about.jpg`}
                      className="fllimg"
                    />
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6  align-self-center"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <h2 className="mainhds mb-lg-4">About Us</h2>
                  <p>
                    Ranked among the top universities in India &amp; considered
                    a cerebral destination for students across the world &amp;
                    Bangalore in particular, for its illustrious history of
                    developing talent,Jain (Deemed-to-be University) is a hub
                    for learning in every sense of the word.
                  </p>
                </div>
              </div>
            </div>  
          </section> */}
          <br/>
          <br/>
<div className="subsection">
          <div className="text-center hdingst">
            <br />
            <h2 className="mainhds">India’s largest community of educators and students </h2>
          </div>
          <div className="container counters">
            <div className="row ">
              <div className="col-3 col-md-3 col-lg-3 text-center">
                <h3 className="orgmds numbround number-item">
                  <span className="value">10000</span>+
                          </h3>
                <p>ONLINE LEARNERS</p>
              </div>
              <div className="col-3 col-md-3 col-lg-3 text-center">
                <h3 className="orgmds">
                  <span className="value">2000</span>+
                          </h3>
                <p>hiring partners</p>
              </div>
              <div className="col-3 col-md-3 col-lg-3 text-center">
                <h3 className="orgmds">
                  <span className="value">300</span>+
                          </h3>
                <p>top courses</p>
              </div>
              <div className="col-3 col-md-3 col-lg-3 text-center mx-md-auto">
                <h3 className="orgmds">24/7</h3>
                <p>lms support</p>
              </div>
            </div>
          </div>
          </div>
          {courses.length && (
            <section className="featuredcls">
              <div className="container">
                <div className="text-center hdingst">
                  <h2 className="mainhds">Featured Institutes</h2>
                  <h2 className="mainhds">Connect with Best Verified Institutes in India</h2>

                </div>
                <div className="coursespanels">

                  <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    margin={15}
                    nav
                    items={4}
                    responsive={state.responsive}
                  >
                    {courses.map((coursesData, key) => (
                      <div className="item">
                        <div className="panelcards">
                          <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}/uploads/images/courses/logo/` +
                              coursesData.logo
                            }
                            className="fllimg"
                          />
                          <h5 className="csnms">{coursesData.name}</h5>
                          <p>
                            {coursesData.short_desc}
                            <Link
                              href={`courses/${coursesData.institute.slug}/${coursesData.slug}`}
                            >
                              <a>Read more..</a>
                            </Link>
                          </p>
                          <div className="flexhh">
                            <div className="tmclcs">
                              <img
                                src={`${process.env.NEXT_PUBLIC_B_API}/images/wallclock.png`}
                                className="tmicn"
                              />
                              <p>{coursesData.duration} Months</p>
                            </div>
                            <div className="tmclcs">
                              <img
                                src={`${process.env.NEXT_PUBLIC_B_API}/images/wallclock.png`}
                                className="tmicn"
                              />
                              <p>Online / Offline</p>
                            </div>

                          </div>
                          <Link
                            href={`courses/${coursesData.institute.slug}/${coursesData.slug}`}
                          >
                            <a className="aplcta">View Details</a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </section>
          )}

          {categories.length && (
            <section className="tpcateg">
              <div className="container">
                <div className="text-center hdingst whtxt">
                  <h2 className="mainhds">Find the Top Trending categories and courses</h2>
                </div>

                <OwlCarousel
                  className="categchecks userreview owl-theme owl-carousel"
                  loop
                  margin={20}
                  responsive={state.responsive_top_catnew}
                >
                  {categories.map((category, key) => (
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <Link href={'/courses?category=' + category.slug}>
                            <a className="catcheck">{category.name}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </section>
          )}

{testimonials.length && (
            <section className="tpcateg">
              <div className="text-center hdingst">
                <h2 className="mainhds">Testimonials</h2>
              </div>
              <div className="container">
                <OwlCarousel
                  className="categchecks userreview owl-theme owl-carousel"
                  loop
                  margin={20}
                  responsive={state.responsive}
                >
                                {testimonials.map((testimonailsData, key) => (

    <div className="team-boxed">
            <div className="row people">
                <div className="m-3 col-md-12 col-lg-12 item">
                   
                        
                        <p className="description">{testimonailsData.description}</p>
                        <img src='./images/rating.png' style={{marginLeft:30}} />
                        <h3 className="name">{testimonailsData.name}</h3>
                    <p className="title">{testimonailsData.position}</p>
                        <div className="box1">
                        <img    className="rounded-circle ee"
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}/uploads/images/testimonials/` +
                              testimonailsData.image
                            }
                          />
                    </div>
                </div>
               
              </div>
         </div>
    
))} 


                </OwlCarousel>
              </div>
            </section>
          )}


                          
                           
                  
{/* 
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
 */}
                  
                 
  
<br/>
<br/>
<br/>
<br/>
<br/>

          {trustedByCompanies.length && (

            <section className="whtsects trustbycoms">
              <div className="container">
                <div className="text-center hdingst">
                  <h2 className="mainhds pk">Trust by Companies</h2>
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


<section className="whtsects jnadvts" id="advt">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">
            Connecting Students to Their Dream Career Ed<span className="ogx">X</span>plore Advantage
            </h2>
          </div>
          <div className="row text-center pt-5">

          {jainAdvantage.map((jainAdvantageData, key) => (

            <div className="col-lg-4 col-md-6">
                          <img
                            src={
                              `${process.env.NEXT_PUBLIC_B_API}/uploads/images/jainx-advantage/` +
                              jainAdvantageData.icon
                            }
                          />
                         <h4>{jainAdvantageData.name}</h4>
                  <p>
                      {jainAdvantageData.short_text}                  
                  </p>
            </div>
         
         ))}

          </div>
        </div>
      </section>




          {/* {jainAdvantage.length && (

            <section className="whtsects jnadvts">
              <div className="container">
                <div className="text-center hdingst">
                  <h2 className="mainhds">
                    Ed<span className="ogx">X</span>plore Advantage
                </h2>
                  <h4>A One step solution for all your need</h4>
                </div>

                <OwlCarousel
                  className="advantfeat owl-carousel owl-theme text-center pt-5"
                  loop
                  margin={10}
                  nav
                  responsive={state.responsive_top_cat}
                >

                  {jainAdvantage.map((jainAdvantageData, key) => (

                    <div className="item">
                      <img className='advanbg'
                        src={
                          `${process.env.NEXT_PUBLIC_B_API}/uploads/images/jainx-advantage/` +
                          jainAdvantageData.icon
                        }
                      />
                      <h4>{jainAdvantageData.name}</h4>
                      <p>
                        {jainAdvantageData.short_text}
                      </p>
                    </div>

                  ))}


                </OwlCarousel>
              </div>
            </section>

          )} */}

        </>
      )}

      <Footer />
    </>
  )
}

export default Home
