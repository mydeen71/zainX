import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <header className="site-header topmain mobexheight norm">
        {/*--New Updates---*/}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Brand */}

            <Link href="/">
              <a className="navbar-brand">
                <img
                  src="./images/mainlogo.png"
                  className="navbar-brand-img"
                  alt="logo"
                />
              </a>
            </Link>

            {/* Toggler */}
            <button
              className="navbar-toggler openhdas"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fal fa-bars" />
              <i className="fal fa-times" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="mobile-widgets">
                <div
                  className="cross"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  <i className="fal fa-times" />
                </div>
              </div>
              {/* Navigation */}
              <div className="ml-auto" id="accordionExample">
                <ul
                  className="navbar-nav ml-auto position-relative"
                  id="menu-center"
                >
                  <li className="nav-item nosublnk active">
                    <Link href="/about">
                      <a className="nav-link bidevices">About </a>
                    </Link>
                  </li>
                  <li className="nav-item nosublnk">
                    <Link href="/courses">
                      <a className="nav-link  bidevices subarrs">
                        Find a Course
                      </a>
                    </Link>

                    <h3
                      data-toggle="collapse"
                      data-target="#collapsemenusTwo"
                      aria-expanded="false"
                      aria-controls="collapsemenusTwo"
                      className="mobclick collapsed"
                    >
                      Find a Course <i className="fal fa-angle-up" />{' '}
                      <i className="fal fa-angle-down" />
                    </h3>
                    <div
                      id="collapsemenusTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-lg-12 colorchng">
                            <ul>
                              <li>
                                <a href="#">Inner Link 1</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 2</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 3</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 4</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 5</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 5</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item nosublnk">

                  <Link href="/partner-with-us">

                    <a className="nav-link bidevices subarrs" href="#">
                      Partner With Us{' '}
                    </a>

                    </Link>
                    <h3
                      data-toggle="collapse"
                      data-target="#collapsemenusThree"
                      aria-expanded="false"
                      aria-controls="collapsemenusThree"
                      className="mobclick collapsed"
                    >
                      Partner With Us <i className="fal fa-angle-up" />{' '}
                      <i className="fal fa-angle-down" />
                    </h3>
                    <div
                      id="collapsemenusThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-lg-12 colorchng">
                            <ul>
                              <li>
                                <a href="flnmission.php">Inner Link 1</a>
                                <div className="megamenu subdropsmen">
                                  <div className="row">
                                    <div className="col-lg-12 colorchng">
                                      <ul>
                                        <li>
                                          <a href="#">Inner Sub Link 1</a>
                                        </li>
                                        <li>
                                          <a href="#">Inner Sub Link 2</a>
                                        </li>
                                        <li>
                                          <a href="#">Inner Sub Link 3</a>
                                        </li>
                                        <li>
                                          <a href="#">Inner Sub Link 4</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#">Inner Link 2</a>
                                <div className="megamenu subdropsmen">
                                  <div className="row">
                                    <div className="col-lg-12 colorchng">
                                      <ul>
                                        <li>
                                          <a href="#">Inner Sub Link 1</a>
                                        </li>
                                        <li>
                                          <a href="#">Inner Sub Link 2</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item nosublnk">
                    <Link href="/contact-us">
                      <a className="nav-link bidevices nosublnk subarrs">
                        Contact
                      </a>
                    </Link>

                    <h3
                      data-toggle="collapse"
                      data-target="#collapsemenusFive"
                      aria-expanded="false"
                      aria-controls="collapsemenusFive"
                      className="mobclick collapsed"
                    >
                      Contact
                      <i className="fal fa-angle-up" />{' '}
                      <i className="fal fa-angle-down" />
                    </h3>
                    <div
                      id="collapsemenusFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                      <div className="megamenu">
                        <div className="row">
                          <div className="col-lg-12 colorchng">
                            <ul>
                              <li>
                                <a href="#">Inner Link 1</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 2</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 3</a>
                              </li>
                              <li>
                                <a href="#">Inner Link 4</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nav-item nosublnk sgnorg">
                    <a className="nav-link bidevices" href="#">
                      Login /
                    </a>
                    <a className="nav-link bidevices" href="#">
                      Sign Up{' '}
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
