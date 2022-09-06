import { useEffect, useState } from 'react'
import AOS from 'aos'
import Nav from '../../components/header/Nav'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Select from 'react-select'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const DesktopContent = dynamic(() => import('../../components/DeskFilter'))
const MobileContent = dynamic(() => import('../../components/MobFilter'))
import { useUserAgent } from 'next-useragent'
import { Puff } from 'react-loading-icons'
import ContentLoader from 'react-content-loader'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'

const Listing = (props) => {
  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState([])
  const [filterData, setfilterData] = useState([])
  const [loader, setLoader] = useState(false)
  const [currentProject, setCurrentProject] = useState('')

  const [modal, setModal] = useState('')
  const [compareArray, setCompareArray] = useState([])
  const [compareArrayById, setCompareArrayById] = useState([])
  const [buttonText, setButtonText] = useState([])

  

  const [slctdFilter, setSlctdFilter] = useState([])

  const [resetCat, setResetCat] = useState('')
  const [resetType, setResetType] = useState('')
  const [resetMode, setResetMode] = useState('')
  const [resetCity, setResetCity] = useState('')
  const [resetInstitute, setResetInstitute] = useState('')

  const [chngfltr, setChngfltr] = useState('')

  const [catId, setCatId] = useState('')

  const [sDuration, setSduration] = useState('')

  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(2)
  const [lastPage, setLastPage] = useState(0)

  const [checkDevice, setCheckDevice] = useState({})

  const { addToast } = useToasts()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [query, setQuery] = useState('')

  const [sort] = useState([
    { id: '1', value: 'p_low_to_high', label: 'Price: Low to High' },
    { id: '2', value: 'p_high_to_low', label: 'Price: High to Low' },
    { id: '3', value: 'd_low_to_high', label: 'Duration: Low to High' },
    { id: '4', value: 'd_high_to_low', label: 'Duration: High to Low' },
  ])

  useEffect(() => {
    getAllCoursesByFilter(slctdFilter, '')
  }, [slctdFilter])

  useEffect(() => {
    setCompareArray(compareArray)
  }, [compareArray])

  

  useEffect(() => {
    getAllCoursesByFilter('', sDuration)
  }, [sDuration])

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })

    if (router.query == null) {
      getAllCourses()
    }

    if (props.uaString) {
      ua = useUserAgent(props.uaString)
    } else {
      ua = useUserAgent(window.navigator.userAgent)
    }
    setCheckDevice(ua)
  }, [])

  useEffect(() => {
    if (router.query != null) {
      let city = router.query.city
      let category = router.query.category
      getCatId(category)

      console.log(city)

      if (typeof city !== 'undefined') {
        city = city.split('-')
      }

      let mode = router.query.mode
      if (mode != undefined) {
        mode = mode.split('-')
      }

      if (
        typeof city !== 'undefined' &&
        typeof mode !== 'undefined' &&
        typeof category !== 'undefined'
      ) {
        const result = [
          { label: `${city[0]}`, value: `${city[1]}`, type: 'cities_id' },
          { label: `${mode[0]}`, value: `${mode[1]}`, type: 'course_modes_id' },
          {
            label: `${category}`,
            value: `${catId}`,
            type: 'course_categories_id',
          },
        ]
        setSlctdFilter(result)
      } else if (
        typeof mode !== 'undefined' &&
        typeof category !== 'undefined'
      ) {
        const result = [
          { label: `${mode[0]}`, value: `${mode[1]}`, type: 'course_modes_id' },
          {
            label: `${category}`,
            value: `${catId}`,
            type: 'course_categories_id',
          },
        ]
        setSlctdFilter(result)
      } else if (typeof city !== 'undefined' && typeof mode !== 'undefined') {
        const result = [
          { label: `${city[0]}`, value: `${city[1]}`, type: 'cities_id' },
          { label: `${mode[0]}`, value: `${mode[1]}`, type: 'course_modes_id' },
        ]
        setSlctdFilter(result)
      } else if (
        typeof city !== 'undefined' &&
        typeof category !== 'undefined'
      ) {
        const result = [
          { label: `${city[0]}`, value: `${city[1]}`, type: 'cities_id' },
          {
            label: `${category}`,
            value: `${catId}`,
            type: 'course_categories_id',
          },
        ]
        setSlctdFilter(result)
      } else {
        if (typeof mode !== 'undefined') {
          const result = [
            {
              label: `${mode[0]}`,
              value: `${mode[1]}`,
              type: 'course_modes_id',
            },
          ]
          setSlctdFilter(result)
        }
      }
    }
  }, [catId])

  const router = useRouter()

  let ua

  const getCatId = async (slug) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-category_id`,
        {
          slug: slug,
        },
        config,
      )

      const getCat = data.get_category_id

      console.log(getCat)
      setCatId(getCat.id)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllCourses = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/listing`)
      const getCourses = data.get_courses.data

      setLastPage(data.get_courses.last_page)
      setCourses(getCourses)

      if (getCourses.length == null || getCourses.length == 0) {
        setHasMore(false)
      }

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllCourses2 = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/listing?page=${currentPage}`,
      )
      const getCourses = data.get_courses.data
      const l_page = data.get_courses.last_page
      setLastPage(data.get_courses.last_page)
      setCourses((get_course) => [...get_course, ...getCourses])

      if (getCourses.length == null) {
        setHasMore(false)
      }

      if (l_page > currentPage) {
        setCurrentPage((currentPage = currentPage + 1))
      } else {
        setHasMore(false)
      }

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllCoursesByFilter = async (value, sort_d) => {
    setLoader(true)

    try {
      const newFilterData = JSON.stringify(slctdFilter)

      let selectedSort

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/listingbyfilter`,
        {
          prod_filters: newFilterData,
          sort: sDuration,
        },
        config,
      )

      const getCourses = data.get_courses.data
      setLastPage(data.get_courses.last_page)

      if (lastPage != currentPage) {
      } else {
        setHasMore(false)
      }

      setCourses(getCourses)

      setLoader(false)
    } catch (err) {
      console.log(err)
    }
  }

  const getData = (value) => {
    console.log(value)
    if (value.length > 0) {
      setfilterData(value)
      setSlctdFilter(value)
    }
  }

  const getData2 = (value) => {
    console.log(value)

    setSduration(value)
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

    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $('#exampleModalEnquirenow').hide()

    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course-leads`,
        {
          name: name,
          email: email,
          mobile_no: mobileNo,
          query: query,
          course_id: currentProject,
        },
      )

      if (data.status == 200) {
        addToast('Success!', { appearance: 'success' })
        router.push('/thanks')
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

  const removeFilter = (value) => {
    setChngfltr(value)

    if (value == 'course_categories_id') {
      setResetCat('reset')
    }

    if (value == 'course_types_id') {
      setResetType('reset')
    }

    if (value == 'course_modes_id') {
      setResetMode('reset')
    }

    if (value == 'cities_id') {
      setResetCity('reset')
    }

    if (value == 'institute_id') {
      setResetInstitute('reset')
    }

    let indexx = slctdFilter.findIndex(function (pair) {
      return pair.type == value
    })

    if (indexx !== -1) {
      slctdFilter.splice(indexx, 1)
    }

    setSlctdFilter((oldArray) => {
      return oldArray.filter((value, i) => i !== indexx)
    })

    setSlctdFilter(slctdFilter)

    getAllCoursesByFilter(slctdFilter, '')
  }

  const handleSort = (selectedOptions) => {
    setSduration(selectedOptions.value)
  }

  const compareModal = (course,key) => {
    setModal('showtype');

    // alert(key)

    if(compareArray.length == 3){
      addToast('You can compare max three courses at a time!', { appearance: 'error' })
    }else{
      setCompareArrayById((oldArray) => [...oldArray, course.id])
      setCompareArray((oldArray) => [...oldArray, course])

      buttonText[key] = "Added";
    }
    console.log(course);


  }

  const closeModal = () => {
    setModal('');
  }

  const removeProduct = (key,id) => {

    // alert(id)

    console.log(key);

    compareArray.splice(key, 1);
    compareArrayById.splice(key, 1);

    setCompareArray(compareArray.filter(function(course) { 
      return course !== key 
  }));

    setCompareArrayById(compareArrayById.filter(function(course) { 
    return course !== key 
  }));

  buttonText[id] = null;


  }

  const compareCourses = () => {

    if(compareArrayById.length < 2){
        addToast('Please select atleast two courses to compare!', { appearance: 'error' })
    }else{
      router.push({
        pathname: '/compare',
        query: { courses: compareArrayById },
      })
    }

  }

  return (
    <>

      <Nav />

      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      body{\n  background: #e5e8ec;\n      }\n\n      .css-13q5zx4-ToastContainer {\n        z-index: 9999;\n      }\n      ',
        }}
      />

      <section className="pageinforhd pt-5 pb-5">
        <div className="container">
          <div className="hdingst">
            <h2 className="mainhds">All Courses</h2>
          </div>
          <nav aria-label="breadcrumb" className="float-lg-right">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                All Courses
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="coursesjnxarea">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="custmfiltr">
                {checkDevice.deviceType ? (
                  <MobileContent
                    sendData2={getData2}
                    sendData={getData}
                    searchfilter={router.query}
                    resetCat={resetCat}
                    resetType={resetType}
                    resetMode={resetMode}
                    resetCity={resetCity}
                    resetInstitute={resetInstitute}
                    chngfltr={slctdFilter}
                  />
                ) : (
                  <DesktopContent
                    sendData={getData}
                    searchfilter={router.query}
                    resetCat={resetCat}
                    resetType={resetType}
                    resetMode={resetMode}
                    resetCity={resetCity}
                    resetInstitute={resetInstitute}
                    chngfltr={slctdFilter}
                  />
                )}
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="sortbyfllnx">
                <div className="tgselectdata">
                  {slctdFilter &&
                    slctdFilter.map((filter, key) => (
                      <div className="ttpattrib">
                        <p>
                          {filter.label}{' '}
                          <span
                            onClick={(e) => removeFilter(filter.type)}
                            style={{ cursor: 'pointer' }}
                          >
                            x
                          </span>
                        </p>
                      </div>
                    ))}
                </div>
                <div className="sotfllshw" style={{ width: '28%' }}>
                  <Select
                    options={sort}
                    placeholder="Sort By:"
                    styles={styles}
                    onChange={handleSort}
                  />
                </div>
              </div>
              <div className="dtabasedcateg dvv">
                <div className="">
                  {loader ? (
                    <ContentLoader
                      backgroundColor="#f5f5f5"
                      foregroundColor="#dbdbdb"
                      viewBox="0 0 900 400"
                      height={400}
                      width={900}
                      speed={1}
                      {...props}
                    >
                      <rect
                        x="0"
                        y="0"
                        rx="0"
                        ry="0"
                        width="280"
                        height="400"
                      />
                      <rect
                        x="310"
                        y="0"
                        rx="0"
                        ry="0"
                        width="280"
                        height="400"
                      />
                      <rect
                        x="620"
                        y="0"
                        rx="0"
                        ry="0"
                        width="280"
                        height="400"
                      />
                    </ContentLoader>
                  ) : (
                    <InfiniteScroll
                      dataLength={courses.length}
                      next={getAllCourses2}
                      hasMore={hasMore}
                      loader={
                        <>
                          <div
                            style={{
                              textAlign: 'center',
                              margin: '5em',
                              width: '100%',
                            }}
                          >
                            <Puff
                              stroke="#302e59"
                              strokeOpacity={1}
                              speed={0.75}
                            />
                          </div>
                        </>
                      }
                      endMessage={
                        <>
                          <div
                            className="col-md-12"
                            style={{
                              textAlign: 'center',
                              padding: '0em 0em 2em 0em',
                              color: '#676d76',
                            }}
                          >
                            <b>Yay! You have seen it all.</b>
                          </div>
                        </>
                      }
                      className="row"
                      // pullDownToRefreshThreshold={50}
                      scrollableTarget="dvvvvv"
                    >
                      {courses &&
                        courses.map((course, key) => (
                          <div className="col-md-6 col-lg-4" key={key}>
                            <div className="coursepanel">
                              <div className="twycol">
                                <div className="scllogoswr">
                                  <img
                                    src={
                                      `${process.env.NEXT_PUBLIC_B_API}/uploads/images/courses/logo/` +
                                      course.logo
                                    }
                                  />
                                  <button  
                                  disabled={buttonText[course.id] == null ? false : true}
                                  onClick={() => compareModal(course,course.id)} className="cmprs">
                                    {buttonText[course.id] == null ? 'Compare' : buttonText[course.id]}
                                  </button>

                                </div>
                                <div className="coursecontens">
                                  <h4>{course.name}</h4>
                                  <p>
                                    {course.short_desc}
                                    <Link
                                      href={`courses/${course.institute.slug}/${course.slug}`}
                                    >
                                      <a>Read more..</a>
                                    </Link>
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
                                  <span>Key Learnings:</span>{' '}
                                  {course.key_learnings}
                                </p>
                              </div>
                              <div className="dtlsctaviews">
                                <Link
                                  href={`courses/${course.institute.slug}/${course.slug}`}
                                >
                                  <a className="grylghtcta">View Details</a>
                                </Link>
                                <a
                                  href="javascript:void(0);"
                                  data-toggle="modal"
                                  data-target="#exampleModalEnquirenow"
                                  className="blulghtcta"
                                  onClick={(e) => setCurrentProject(course.id)}
                                >
                                  Enquire
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                    </InfiniteScroll>
                  )}

                  <div
                    className="modal fade"
                    id="exampleModalEnquirenow"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalEnquirenowTitle3"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered   jncustm trasntypes"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-body">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>

                          <div className="basicenqforms">
                            <form onSubmit={handleSubmit}>
                              <div className="row">
                                <div className="col-lg-12 mx-auto">
                                  <h3>Enquire Now !</h3>
                                  <div className="form-groupsets">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                    />
                                  </div>

                                  <div className="form-groupsets">
                                    <label>Email id</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>

                                  <div className="form-groupsets">
                                    <label>Mobile No.</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={mobileNo}
                                      onChange={(e) =>
                                        setMobileNo(e.target.value)
                                      }
                                    />
                                  </div>

                                  <div className="form-groupsets">
                                    <label>Query</label>
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      placeholder=""
                                      value={query}
                                      onChange={(e) => setQuery(e.target.value)}
                                    ></textarea>
                                  </div>
                                </div>

                                <div className="col-lg-12 text-center roundbotms">
                                  <button
                                    type="submit"
                                    className="orangectadms"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="dvvvvv"></div>
            </div>
          </div>
        </div>
      </section>


      <section className={`procmpops ${modal}`}>
        <div className="container">
          <div className="closlefss" onClick={closeModal}>
            Close                 
          </div>
          
          <div className="productselect">
		             <p id="psel">{compareArray.length} Selected</p>
		         </div>

          <div class="productthubcount" id="pimg">
               
               {compareArray && (

                  compareArray.map((product, key) => (

               
              <>
                <div className="couserimages">
                  <div className="delcoursenode" onClick={() => removeProduct(key,product.id)}>
                    <i class="fal fa-times"></i>
                  </div>  

                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/` + product.logo} />
                  {product.name}
                </div>
              </>
                  
              ))

            )}

              
          </div>

          <div class="compare-cta">
          <a onClick={compareCourses}  class="blulghtcta">Compare Courses</a>
          </div>
        </div>
      </section>

      <script>
    { /*  $(".scllogoswr .cmprs").click(function (e) {
  e.stopPropagation();
  $(".procmpops").toggleClass('showtype'); 
}); */ }
      </script>

      <Footer />
    </>
  )
}

export default Listing
