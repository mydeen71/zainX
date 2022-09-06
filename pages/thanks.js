import { useEffect } from 'react'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'

const Thanks = () => {
  

  return (
    <>
      <Nav />

  <section className="pageinforhd pt-5 pb-5 nohdleftbrdcm">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">thanks</li>
        </ol>
      </nav>
    </div>
  </section>
  <section className="becomeskillpt">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Thanks!</h2> 
        <p>Form has been submitted successfully! <br/> we'll get back to you ASAP</p>
      </div><div className="pgbanners">
        <img src={`${process.env.NEXT_PUBLIC_B_API}/images/partnerwitmain.jpg`} className="fllimg" />
      </div>
    </div>
  </section>




      <Footer />
    </>
  )
}

export default Thanks
