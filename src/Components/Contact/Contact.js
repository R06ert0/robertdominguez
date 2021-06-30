import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    submitForm(e) {
        e.preventDefault();

        if (document.getElementById('Hrnekmedu').value) {
            console.log('Smůla: ' + document.getElementById('Hrnekmedu').value);
        } else {
            emailjs.sendForm('service_64bfn8b', 'template_ik30sts', e.target, 'user_97wrQev3ZYhN9j8ECOZFE')
                .then(response => {
                    console.log('SUCCESS!', response.status, response.text);
                }, error => {
                    console.log('FAILED...', error);
                });
        }

        e.target.reset();
    }

    goToLinkedIn() {
        window.open('https://www.linkedin.com/in/robert-dominguez-348042209/');
    }

    goToFB() {
        window.open('https://www.facebook.com/profile.php?id=100009210437104');
    }

    render() {
        return (
            <div id="Contact-item" className="All-contact">
                <div className="Stretcher">
                    <h1>KONTAKT</h1>
                    <form onSubmit={this.submitForm}>
                        <input name="name" type="text" placeholder="Tvoje jméno" required></input>
                        <input id="Hrnekmedu" name="subject" type="text" autoComplete="off" placeholder="Hrnek medu"></input>
                        <input name="email" type="email" placeholder="Tvůj e-mail" required></input>
                        <textarea name="message" className="Message" placeholder="Zpráva" required></textarea>
                        <button type="submit">ODESLAT</button>
                    </form>
                    <div className="Footer">
                        <div className="Stretcher">
                            <div className="Inner-footer">
                                <p>Copyright @ Robert Dominguez</p>
                                <div className="Icons">
                                    <div onClick={this.goToLinkedIn} className="Linked-in"></div>
                                    <div onClick={this.goToFB} className="Facebook"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;