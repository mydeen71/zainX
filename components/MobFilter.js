import { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { Slider } from 'antd'

const MobFilter = (props) => {
  const [courseName, setCourseName] = useState([])
  const [courseMode, setCourseMode] = useState([])
  const [institutes, setInstitutes] = useState([])
  const [cities, setCities] = useState([])
  const [courseCategory, setCourseCategory] = useState([])
  const [maxFees, setMaxFees] = useState('')
  const [getDuration, setGetDuration] = useState('')

  const [selectedOption, setSelectedOption] = useState([])

  const [selectedCourseName, setSelectedCourseName] = useState(null)
  const [selectedCourseMode, setSelectedCourseMode] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedInstitute, setSelectedInstitute] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [selectedFilters, setSelectedFilters] = useState([])

  const [sDuration, setSduration] = useState('')

  const [sort] = useState([
    { id: '1', value: 'p_low_to_high', label: 'Price: Low to High' },
    { id: '2', value: 'p_high_to_low', label: 'Price: High to Low' },
    { id: '3', value: 'd_low_to_high', label: 'Duration: Low to High' },
    { id: '4', value: 'd_high_to_low', label: 'Duration: High to Low' },
  ])

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })

    getFilterData()
  }, [])

  const getFilterData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-filter-data`,
      )
      const get_categories = data.get_course_category
      const get_course_name = data.get_course_name
      const get_course_mode = data.get_course_mode
      const get_institutes = data.get_institutes
      const get_cities = data.get_cities

      setMaxFees(data.get_max_fees)
      setGetDuration(data.get_duration)

      setCourseCategory(
        get_categories.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_categories_id',
        })),
      )

      setCourseName(
        get_course_name.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_types_id',
        })),
      )

      setCourseMode(
        get_course_mode.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_modes_id',
        })),
      )

      setInstitutes(
        get_institutes.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'institute_id',
        })),
      )

      setCities(
        get_cities.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'cities_id',
        })),
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangeCourseName = (selectedOptions) => {
    setSelectedCourseName(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'course_types_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleChangeCategory = (selectedOptions) => {
    setSelectedCategory(selectedOptions)

    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'course_categories_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }

    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleChangeCourseMode = (selectedOptions) => {
    setSelectedCourseMode(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'course_modes_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleCity = (selectedOptions) => {
    setSelectedCity(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'cities_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleInstitute = (selectedOptions) => {
    setSelectedInstitute(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'institute_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleDuration = (selectedOptions) => {
    let indexx = selectedFilters.findIndex(function (pair) {
      return pair.type == 'duration'
    })

    if (indexx !== -1) {
      selectedFilters.splice(indexx, 1)
    }

    const data = {
      label: `Duration: ${selectedOptions[0]} - ${selectedOptions[1]}`,
      value: selectedOptions[1],
      type: 'duration',
    }

    setSelectedFilters((oldArray) => [...oldArray, data])
  }

  const handleFees = (selectedOptions) => {
    let indexx = selectedFilters.findIndex(function (pair) {
      return pair.type == 'fees'
    })

    if (indexx !== -1) {
      selectedFilters.splice(indexx, 1)
    }

    const data = {
      label: `Price: ${selectedOptions[0]} - ${selectedOptions[1]}`,
      value: selectedOptions[1],
      type: 'fees',
    }

    setSelectedFilters((oldArray) => [...oldArray, data])
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

  const handleSort = (selectedOptions) => {
    setSduration(selectedOptions.value)
  }

  const apply = () => {
    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $('#exampleModalCenter11').hide()
    $('#exampleModalCenter1').hide()
    $('#exampleModalCenter2').hide()
    $('#exampleModalCenter3').hide()
    $('#exampleModalCenter4').hide()
    $('#exampleModalCenter5').hide()
    $('#exampleModalCenter').hide()

    let pp = selectedFilters.filter(
      (ele, ind) =>
        ind === selectedFilters.findIndex((elem) => elem.type === ele.type),
    )
    props.sendData(pp)
  }

  const apply2 = () => {
    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $('#exampleModalCenter11').hide()
    $('#exampleModalCenter1').hide()
    $('#exampleModalCenter2').hide()
    $('#exampleModalCenter3').hide()
    $('#exampleModalCenter4').hide()
    $('#exampleModalCenter5').hide()
    $('#exampleModalCenter').hide()

    props.sendData2(sDuration)
  }

  return (
    <>
      <div className=" mobsonly">
        <button
          className=" collapsed ctfiljxs nobgtr"
          data-toggle="modal"
          data-target="#exampleModalCenter5"
        >
          <img src={`${process.env.NEXT_PUBLIC_B_API}/images/sortby.png`} />
        </button>

        <button
          className=" collapsed ctfiljxs"
          data-toggle="modal"
          data-target="#exampleModalCenter11"
        >
          Category
        </button>

        <button
          className=" collapsed ctfiljxs"
          data-toggle="modal"
          data-target="#exampleModalCenter1"
        >
          Type
        </button>
        <button
          className=" collapsed ctfiljxs"
          data-toggle="modal"
          data-target="#exampleModalCenter2"
        >
          Course Mode
        </button>
        <button
          className=" collapsed ctfiljxs"
          data-toggle="modal"
          data-target="#exampleModalCenter3"
        >
          City
        </button>
        <button
          className=" collapsed ctfiljxs nobgtr"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <img src={`${process.env.NEXT_PUBLIC_B_API}/images/filterbys.png`} />
        </button>
        <button
          className=" collapsed ctfiljxs"
          data-toggle="modal"
          data-target="#exampleModalCenter4"
        >
          Select Institute
        </button>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter11"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle11"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered jncustm trasntypes"
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
                  <span aria-hidden="true">×</span>
                </button>
                <div className="deskserachflls">
                  <Select
                    options={courseCategory}
                    placeholder="Category"
                    onChange={handleChangeCategory}
                    styles={styles}
                    value={selectedCategory}
                  />
                </div>
              </div>
              <div className="modal-footer text-center mx-auto">
                <button type="button" className="blulghtcta" onClick={apply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter1"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle1"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered jncustm trasntypes"
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
                  <span aria-hidden="true">×</span>
                </button>
                <div className="deskserachflls">
                  <Select
                    options={courseName}
                    placeholder="Course Type"
                    onChange={handleChangeCourseName}
                    styles={styles}
                    value={selectedCourseName}
                  />
                </div>
              </div>
              <div className="modal-footer text-center mx-auto">
                <button type="button" className="blulghtcta" onClick={apply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered jncustm"
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
                  <span aria-hidden="true">×</span>
                </button>
                <h6 className="flxhds">Duration</h6>
                <div className="range-slider durnr">
                  {getDuration != 0 && (
                    <Slider
                      range
                      defaultValue={[0, getDuration]}
                      max={getDuration}
                      min={0}
                      onAfterChange={handleDuration}
                    />
                  )}

                  <div className="range-slider__progress" />
                </div>
                <h6 className="flxhds">Price Range</h6>
                <div className="range-slider grad pricerngs">
                  {maxFees != 0 && (
                    <Slider
                      range
                      defaultValue={[0, maxFees]}
                      min={0}
                      max={maxFees}
                      onAfterChange={handleFees}
                    />
                  )}

                  <div className="range-slider__progress" />
                </div>
              </div>
              <div className="modal-footer text-center mx-auto">
                <button type="button" className="blulghtcta" onClick={apply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle2"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered jncustm trasntypes"
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
                  <span aria-hidden="true">×</span>
                </button>

                <div className="deskserachflls">
                  <Select
                    options={courseMode}
                    placeholder="Course Mode"
                    onChange={handleChangeCourseMode}
                    styles={styles}
                    value={selectedCourseMode}
                  />
                </div>
              </div>
              <div className="modal-footer text-center mx-auto">
                <button type="button" className="blulghtcta" onClick={apply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter3"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle3"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered jncustm trasntypes"
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
                  <span aria-hidden="true">×</span>
                </button>
                <div className="deskserachflls">
                  <Select
                    options={cities}
                    placeholder="City"
                    onChange={handleCity}
                    styles={styles}
                    value={selectedCity}
                  />
                </div>
              </div>
              <div className="modal-footer text-center mx-auto">
                <button type="button" className="blulghtcta" onClick={apply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter4"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle4"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered jncustm trasntypes"
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
                  <span aria-hidden="true">×</span>
                </button>
                <div className="deskserachflls">
                  <Select
                    options={institutes}
                    placeholder="Institute"
                    onChange={handleInstitute}
                    styles={styles}
                    value={selectedInstitute}
                  />
                </div>
              </div>
              <div className="modal-footer text-center mx-auto">
                <button type="button" className="blulghtcta" onClick={apply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter5"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle5"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered jncustm trasntypes"
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
                  <span aria-hidden="true">×</span>
                </button>
                <div className="sortbjner">
                  <h6>Sort By:</h6>
                  <Select
                    options={sort}
                    placeholder="Sort By:"
                    styles={styles}
                    onChange={handleSort}
                  />
                </div>
              </div>
              <div className="modal-footer text-center mx-auto">
                <button type="button" className="blulghtcta" onClick={apply2}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobFilter
