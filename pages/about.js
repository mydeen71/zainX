import { useEffect, useState } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useToasts } from 'react-toast-notifications'

const About = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [query, setQuery] = useState('')
  const [jainAdvantage, setJainAdvantage] = useState([])

  const router = useRouter()
  const { addToast } = useToasts()

  useEffect(() => {

    getJainAdvantage()

    AOS.init({
      duration: 2000,
    })
  }, [])

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

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name == '') {
      addToast('Please enter the name!', { appearance: 'error' })

      return false
    }

    if (email == '') {
      addToast('Please enter the email!', { appearance: 'error' })
      return false
    }

    if (IsEmail(email) == false) {
      addToast('Incorrect email!', { appearance: 'error' })

      return false
    }

    if (mobileNo == '') {
      addToast('Please enter the mobile number!', { appearance: 'error' })
      return false
    }

    if (mobileNo.length != 10) {
      addToast('Mobile number must be of ten digits!', { appearance: 'error' })
      return false
    }

    if (query == '') {
      addToast('Please enter the query!', { appearance: 'error' })
      return false
    }


    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API}/contact-us`,{
          "name":name,
          "email":email,
          "mobile_no":mobileNo,
          "query":query,
      });
  
      if(data.status == 200){
        addToast("Success!", { appearance: 'success' });
        router.push("/thanks");
      }

      //
    } catch (err) {
      console.log(err)
      addToast('Invalid! Please try again.', { appearance: 'error' })
    }
  }

  const IsEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regex.test(email)) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <Nav />

      <section className="pageinforhd pt-lg-5 pb-lg-5">
        <div className="container">
          <div className="hdingst">
            <h2 className="mainhds">About US</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About us
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="aboutlayouts">
        <div className="container">
          <div className="pgbanners">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/aboutbanner.jpg`} className="fllimg" />
          </div>

          <div className="contentares  pt-5 pb-lg-5">
            <div className="text-center hdingst">
              <h2 className="mainhds">
              The trusted market leader in talent transformation…. <br/>
Transforming lives

              </h2>
            </div>
            <div className="row  pt-5 pb-5">
             
              <div className="col-md-12 col-lg-12 align-self-center">
                <p>
                EdXplore is the largest data-driven education search engine for students to 
help with verified institutes profiles across the country along with peer 
validations to help students to choose the best upskilling partners that 
becomes a gateway to a fulfilling career.
We are a structured aggregator platform for the students, educational and 
training institutes that provides real-time and reliable data on thousands of
online and offline institutes and their wide-ranging courses. 

                </p>
                <p>
                We enable students to make an informed decision about their careers by 
providing aggregated access to colleges, Coaching Institutes, online and offline 
training Centres, Career Counsellors, and related services. We are committed 
to providing across-the-board information including academic qualifications, 
course duration, course fees, etc. 
With a mission to provide quality education to students who are looking for 
skill-oriented courses. EDXPLORE aims to become the most preferred site by 
students and industry experts alike
                </p>
              </div>
              <div className="col-lg-12  pt-lg-5 ">
                <p>
                 
                  <h2 class="mainhds smll">Mission </h2>
                  
Our mission is to make student’s lives simpler, more pleasant and more 
productive by offering him a platform to choose, interact and get the best 
options for his career advancement.
<h2 class="mainhds smll">Vision </h2>
Our vision is to offer an advanced and scalable technology platform with a 
data-driven search option by providing aggregated access training institutes, 
knowledge partners, industry experts, etc to help students choose the best
options that becomes a gateway to a fulfilling career.
{' '}
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      
      <section className="whtsects jnadvts">
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
      <section className="whtsects trustbycoms pt-2 pb-3">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds smll">
            EDXPLORE is where work happens. It’s where people have the perfect 
conditions to connect, to align, to get context; so they can work 
toward shared goals, together.
            </h2>
          </div>
         
            <div className="trustcmpcarso owl-theme owl-carousel">
              <div className="item">
                <div className="lgocirc">
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/1.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/2.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/3.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/4.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/5.png`} />
                </div>
              </div>
             
            </div>
          
        </div>
      </section>
      <section className="tpcateg">
        <div className="container">
          <div className="text-center hdingst whtxt">
            <h2 className="mainhds">
              <span className="ogx">Reach Out To Us</span>
            </h2>
            <p className="text-black">
            Accelerate Your Career with Job-ready Skills

              <br />
             
            </p>
            <form onSubmit={handleSubmit}>
                <div className="customfrms lssmg">
                  <div className="form-group">
                    <input
                      type="textr"
                      className="form-control"
                      placeholder="First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      value={mobileNo}
                      onChange={(e) =>setMobileNo(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      placeholder="Query"
                                      value={query}
                                      onChange={(e) => setQuery(e.target.value)}
                                    ></textarea>
                                  </div>

                  <div className="form-group text-center">
                    <button type='submit'>Submit</button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
