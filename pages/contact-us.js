import { useEffect, useState } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useToasts } from 'react-toast-notifications'

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { addToast } = useToasts()


  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

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
            <h2 className="mainhds">Contact us</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact us
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="aboutlayouts">
        <div className="container">
          <div className="pgbanners">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/contactbanner.jpg`} className="fllimg" />
          </div>
          <div className="contentares  pt-5 pb-5">
            <div className="text-center hdingst">
              <h2 className="mainhds">
                For more information about
                <br />
                our courses, get in touch with Ed
                <span className="ogx">X</span>plore
              </h2>
            </div>
            <div className="contactcrds">
              <div className="row">
                <div className="col-md-6 col-lg-8  mx-auto text-center">
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/location.png`} />
                  <p>
                  6th Floor, The High Street, 62, 11th Main Rd, 4th T Block East, Jayanagar, Bengaluru,
                    <br />  Karnataka 560011
                  </p>
                </div>
                <div className="col-md-6 col-lg-8  mx-auto text-center">
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/maitlocta.png`} />
                  <a href="mailto:info@edxplore.com">
                  info@edxplore.com
                  </a>
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
            <div className="col-md-6 col-lg-6 align-self-center">
              <div className="hdingst whtxt">
                <h2 className="mainhds">
                  <span className="ogx">Reach Out To Us</span>
                </h2>
                <p className="text-white">
                 
                  <br />
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactUs
