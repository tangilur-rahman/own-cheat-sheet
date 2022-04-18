/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Project_OnlyBootStrap.css';
import logo from './images/logo.png';
import cover1 from './images/cover1.jpg';
import cover2 from './images/cover2.jpg';
import cover3 from './images/cover3.jpg';
import increment from './images/increment.jpg';
import copyright from "./images/copyright.svg"





const Project = () => {
    return (
      <>
        {/* navbar start  */}

        <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
          <div className='container-fluid'>
            <nav className='navbar navbar-light bg-light  '>
              <div className='container-fluid'>
                <a className='navbar-brand fw-bold' href='#'>
                  <img
                    src={logo}
                    alt=''
                    width='40'
                    height='34'
                    className='d-inline-block align-text-top rounded pe-2'
                  />
                  TANGIL
                </a>
              </div>
            </nav>

            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse '
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0  w-100 d-flex justify-content-end pe-4'>
                <li className='nav-item pe-5'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#top'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item pe-5'>
                  <a className='nav-link' href='#progress'>
                    Progress
                  </a>
                </li>

                <li className='nav-item pe-5'>
                  <a className='nav-link' href='#form'>
                    Contract US
                  </a>
                </li>
                <li className='nav-item dropdown pe-5'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#footer'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Services
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <a className='dropdown-item' href='#'>
                        Call Us
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Email US
                      </a>
                    </li>

                    <li>
                      <a className='dropdown-item' href='#'>
                        Home Delivary
                      </a>
                    </li>
                  </ul>
                </li>

                <li className='nav-item pe-5'>
                  <a className='nav-link' href='#footer'>
                    About
                  </a>
                </li>
              </ul>
              <form className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* navbar end  */}

        {/* carousel start  */}

        <div
          id='carouselExampleCaptions'
          class='carousel slide'
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators' id='top'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div class='carousel-inner '>
            <div class='carousel-item active'>
              <img src={cover1} class='d-block w-100 ' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h4>First slide label</h4>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={cover2} class='d-block w-100 h-50' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={cover3} class='d-block w-100 h-50' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>

        {/* carousel end  */}

        {/* container start  */}

        <div className='container-fluid'>
          {/* Heading  */}

          <div className='row py-5'>
            <div className='col '>
              <p className='display-6 text-center'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br /> Repudiandae, quas Tangilur Rahman.
              </p>
            </div>
          </div>

          {/* section start  */}

          <div className='row d-flex justify-content-evenly py-2 '>
            <div className='col-md-3 text-center '>
              <i class='bi bi-cpu fs-3 text-primary'></i>

              <h2>Programmer Section</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                aliquam unde asperiores optio culpa dignissimos nihil nostrum
                quae dolorum molestiae.
              </p>
            </div>

            <div className='col-md-3 text-center  py-md-0 py-2'>
              <i class='bi bi-pc-display-horizontal fs-3 text-danger'></i>

              <h2>Developer Section</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                aliquam unde asperiores optio culpa dignissimos nihil nostrum
                quae dolorum molestiae.
              </p>
            </div>

            <div className='col-md-3 text-center py-md-0 py-2'>
              <i class='bi bi-phone-fill fs-3 text-success '></i>

              <h2>Software Section</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                aliquam unde asperiores optio culpa dignissimos nihil nostrum
                quae dolorum molestiae.
              </p>
            </div>
          </div>

          {/* section end  */}

          {/* horizontal line  */}

          <div className='row'>
            <div className='col py-2'>
              <hr />
            </div>
          </div>

          {/* progress section start  */}

          <div className='row justify-content-evenly pt-4' id='progress'>
            <div className='col-md-5 mt-3'>
              <img src={increment} alt='' className='img-fluid' />
            </div>

            <div className='col-md-5  align-self-center mt-5 mt-md-0'>
              <h5 className='mt-3'>Web Development</h5>
              <div class='progress '>
                <div
                  class='progress-bar bg-success py-2'
                  role='progressbar'
                  style={{ width: '75%' }}
                  aria-valuenow='25'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>

              <h5 className='mt-3'>Mobile Development</h5>
              <div class='progress'>
                <div
                  class='progress-bar bg-info'
                  role='progressbar'
                  style={{ width: '50%' }}
                  aria-valuenow='50'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>

              <h5 className='mt-3'>Software Development</h5>
              <div class='progress'>
                <div
                  class='progress-bar bg-warning'
                  role='progressbar'
                  style={{ width: '100%' }}
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>

              <h5 className='mt-3'>NetWorking</h5>
              <div class='progress'>
                <div
                  class='progress-bar bg-danger'
                  role='progressbar'
                  style={{ width: '50%' }}
                  aria-valuenow='100'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>

              <h5 className='mt-3'>Native Developer</h5>
              <div class='progress'>
                <div
                  class='progress-bar bg-danger'
                  role='progressbar'
                  style={{ width: '25%' }}
                  aria-valuenow='100'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>
          {/* progress section end  */}

          {/* input field start */}

          <div
            className='row bg-light justify-content-evenly mt-5 pt-5'
            id='form'
          >
            <div className='col-md-5'>
              <h5 className='mb-5'>Contract Form </h5>
              <form>
                <div class='mb-md-3 mb-2'>
                  <label for='name' class='form-label'>
                    Full Name
                  </label>
                  <input type='text' class='form-control' id='name' />
                </div>

                <div class='mb-3'>
                  <label for='email' class='form-label'>
                    Email address
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='email'
                    aria-describedby='emailHelp'
                  />
                  <div id='emailHelp' class='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div class='mb-3'>
                  <label for='message' class='form-label'>
                    Message
                  </label>
                  <textarea
                    class='form-control'
                    placeholder='Leave a comment here'
                    id='message'
                    rows='4'
                    cols='50'
                  ></textarea>
                </div>

                <button type='submit' class='btn btn-success'>
                  Submit
                </button>
              </form>
            </div>

            <div className='col-md-5 pt-5 pt-md-0 mt-3 mt-md-0'>
              <h3 className='mb-md-3 mb-2'>Address</h3>
              <address>
                Country : Bangladesh <br />
                District : Joypurhat <br />
                Thana : Akkelpur <br />
              </address>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115744.165003237!2d89.014272!3d24.96593920000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1645802279731!5m2!1sen!2sbd'
                width='100%'
                height='300'
                style={{ border: '0' }}
                allowfullscreen=''
                loading='lazy'
              ></iframe>
            </div>
          </div>

          {/* input field end */}

          {/* faq start  */}

          <div className='row justify-content-center'>
            <div className='col-10'>
              <h3 className='text-center py-5'>FAQ</h3>
              <div class='accordion' id='accordionExample'>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='headingOne'>
                    <button
                      class='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='false'
                      aria-controls='collapseOne'
                    >
                      Question Number 1
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    class='accordion-collapse collapse '
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div class='accordion-body'>
                      <strong>This is the first item's accordion body.</strong>{' '}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='headingTwo'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      Question Number 2
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    class='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div class='accordion-body'>
                      <strong>This is the second item's accordion body.</strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='headingThree'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      Question Number 3
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    class='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div class='accordion-body'>
                      <strong>This is the third item's accordion body.</strong>{' '}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* faq end  */}

          {/* footer start  */}

          <div
            className='row justify-content-evenly bg-dark text-white mt-5 pt-5'
            id='footer'
          >
            <div className='col-md-3 mb-5 mb-md-0'>
              <h4>TANGIL</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate suscipit officia vel eos impedit alias in modi esse
                harum ex?
              </p>
            </div>
            <div className='col-md-3 mb-5 mb-md-0'>
              <h4>Importance Links</h4>
              <p>
                Home <br />
                Address <br />
                City <br />
                Contract <br />
              </p>
            </div>
            <div className='col-md-3 mb-5 mb-md-0'>
              <h4>Contract Us </h4>
              <address>
                Country : Bangladesh <br />
                District : Joypurhat <br />
                Thana : Akkelpur <br />
                <i class='bi bi-telephone'></i> +88012345678
              </address>
            </div>
          </div>
          {/* footer end  */}

          {/* copyright */}

          <div className='row bg-secondary text-white '>
            <div className='col justify-content-center '>
              <h6 className='text-center p-2'>
                {' '}
                Copyright <img src={copyright} alt='' width={'20px'} /> 2022 By
                Tangilur Rahman
              </h6>
            </div>
          </div>
        </div>
      </>
    );
}

export default Project;