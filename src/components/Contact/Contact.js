import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
        	
	<div className="full-title">
		<div className="container">
			
			<h1 className="mt-4 mb-3">Contact
				<small>Subheading</small>
			</h1>
		</div>
	</div>

 
    <div className="container">
		<div className="breadcrumb-main">
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<Link to="/">Home</Link>
				</li>
				<li className="breadcrumb-item active">Contact</li>
			</ol>
		</div>

    
      <div className="row">
       
        <div className="col-lg-8 mb-4">
          <iframe width="100%" height="300px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93836.47042126818!2d23.180252481417167!3d42.695468524944886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2snl!4v1667000810414!5m2!1sen!2snl"></iframe>
        </div>

        <div className="col-lg-4 mb-4 contact-right">
          <h3>Contact Details</h3>
          <p>
            Sofia
            <br/>Bulgaria
            <br/>
          </p>
          <p>
            <abbr title="Phone">P</abbr>: (123) 456-7890
          </p>
          <p>
            <abbr title="Email">E</abbr>:
            <a href="mailto:name@example.com">name@example.com
            </a>
          </p>
          <p>
            <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
          </p>
        </div>
      </div>
    
      <div className="row">
        <div className="col-lg-8 mb-4 contact-left">
          <h3>Send us a Message</h3>
          <form name="sentMessage" id="contactForm" novalidate>
            <div className="control-group form-group">
              <div className="controls">
                <label>Full Name:</label>
                <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name."/>
                <p className="help-block"></p>
              </div>
            </div>
            <div className="control-group form-group">
              <div className="controls">
                <label>Phone Number:</label>
                <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number."/>
              </div>
            </div>
            <div className="control-group form-group">
              <div className="controls">
                <label>Email Address:</label>
                <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address."/>
              </div>
            </div>
            <div className="control-group form-group">
              <div className="controls">
                <label>Message:</label>
                <textarea rows="5" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="999" style={{resize: "none"}}></textarea>
              </div>
            </div>
            <div id="success"></div>
         
            <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
          </form>
        </div>

      </div>


    </div>


   
        </>
    );
}