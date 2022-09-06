import { useEffect, useState } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import Autosuggest from 'react-autosuggest'
import { BsSearch } from 'react-icons/bs'
import { useToasts } from 'react-toast-notifications'

const Compare = () => {
  const [courses, setCourses] = useState('')
  const [selectedCourses, setSelectedCourses] = useState('')

  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [categories, setCategories] = useState([])
  const [catSelected, setCatSelected] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { addToast } = useToasts()

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })

    if(!router.isReady) return;
    const query = router.query.courses;

    getCourseCategory()
    getComparedCourses(query)
  }, [router.isReady, router.query])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-search-courses`,
        {
          name: catSelected,
        },
        config,
      )

      const getCourse = data.get_search_courses

      // setSelectedCourses(getCourse)

      if (getCourse == null) {
        addToast('Please add the available courses from the list!', {
          appearance: 'error',
        })
      } else {
        setCourses((oldArray) => [...oldArray, getCourse])
      }

      $('body').removeClass('modal-open')
      $('.modal-backdrop').remove()
      $('#exampleModalEnquirenow').hide()

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getComparedCourses = async (query) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      // if (router.query != null) {
      // let ids = router.query.courses

      let ids = query;
      //   console.log(ids)
      // }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-courses-by-id`,
        {
          courses_id: ids,
        },
        config,
      )

      const getCourses = data.get_course_by_id

      setCourses(getCourses)

      if(getCourses.length == 0){
        setLoading(true)
      }

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getCourseCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-courses`,
      )
      const get_categories = data.get_courses
      setCategories(get_categories)
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

  const removeProduct = (key, id) => {
    // alert(id)

    console.log(key)

    if (courses.length < 2) {
      addToast(
        'Not allowed! If you want to remove this course add one more then click on remove.',
        { appearance: 'error' },
      )
    } else {
      courses.splice(key, 1)

      setCourses(
        courses.filter(function (course) {
          return course !== key
        }),
      )
    }

    // buttonText[id] = null;
  }

  return (
    <>
      {/* {JSON.stringify(courses, null, 2)} */}

      <Nav />

      <section className="pageinforhd pt-5 pb-5 nohdleftbrdcm">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">All Course</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Compare Page
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="cmparepgds">
        <div className="container">
          {courses && (
            <div className="compareanadata">
              <div className="row">
                <>
                  <div className="col blankspcs">
                    <div className="firstembox"></div>

                    <div className="featureinfossts">
                      <p>Price</p>
                      <p>Duration</p>
                      <p>Key Learnings</p>
                      <p>Delivery Type</p>
                      <p>Start Date</p>
                      <p>Projects</p>
                      <p>Enrolled</p>
                      <div className="bxformts"></div>
                    </div>
                  </div>

                  {courses &&
                    courses.map((course, key) => (
                      <div className="col actdatacompsets">
                        <div className="firstembox">
                          <div className="coursepls">
                            <div
                              className="delcoursenode"
                              onClick={() => removeProduct(key, course.id)}
                            >
                              <i className="fal fa-times"></i>
                            </div>

                            <img
                              className="ms fllimg"
                              src={
                                `${process.env.NEXT_PUBLIC_B_API}/uploads/images/courses/logo/` +
                                course.logo
                              }
                            />

                            <h1 className="mainhds">{course.name}</h1>
                            <p>{course.short_desc}</p>
                            <div className="dtlsctaviews">
                              <Link
                                href={`courses/${course.institute.slug}/${course.slug}`}
                              >
                                <a className="orangejncta">Know More</a>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="featureinfossts">
                          <p className="bxformts">{course.fees}</p>
                          <p className="bxformts">{course.duration} months</p>
                          <p className="bxformts">{course.key_learnings}</p>
                          <p className="bxformts">
                            {course.course_modes_id == 1
                              ? 'Hybrid'
                              : course.course_modes_id == 2
                              ? 'Online'
                              : 'Offline'}
                          </p>
                          <p className="bxformts">{course.start_date}</p>
                          <p className="bxformts">{course.projects}</p>
                          <p className="bxformts">
                            {course.students_enrolled}+ Students
                          </p>
                          <div className="bxformts">
                            <Link
                              href={`courses/${course.institute.slug}/${course.slug}`}
                            >
                              <a className="orangejncta">Know More</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </>

                {courses && courses.length < 3 && (
                  <div className="col actdatacompsets">
                    <div className="firstembox midonlybox">
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#exampleModalEnquirenow"
                        className="orangejncta"
                      >
                        Add+
                      </a>
                    </div>

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

                            <div className="autocrsserachs">
                              <form onSubmit={handleSubmit}>
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
                                  <i className="far fa-search" />
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="featureinfossts">
                      <p className="bxformts"></p>
                      <p className="bxformts"></p>
                      <p className="bxformts"></p>
                      <p className="bxformts"></p>
                      <p className="bxformts"></p>
                      <p className="bxformts"></p>
                      <p className="bxformts"></p>
                      <p className="bxformts"></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {loading && (
            <>

              <p>Oops! Go back to listing course and compare again!</p>

              <Link href="/courses">
                <a>Find a Course</a>
              </Link>
            </>
          )}

          
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Compare
