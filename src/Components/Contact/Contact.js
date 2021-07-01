import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    submitForm(e) {
        e.preventDefault();

        if (document.getElementById('Hrnekmedu').value) {
            console.log('Smůla: ' + document.getElementById('Hrnekmedu').value);
        } else {
            // CREATING THANKS ELEMENT AND STYLINGIT TO SLIDE IN SMOOTHLY
            let formEnvelope = document.getElementById('Form-envelope');
            let thanks = document.createElement('div');
            let icon = document.createElement('div');
            let text = document.createElement('h3');
            let form = document.getElementById('Form');

            icon.className = 'Thanks-icon';

            text.className = 'Thanks-text';
            text.innerText = 'Odesílání...';

            thanks.className = 'Form-thanks';
            thanks.style.transform = 'translateX(-1000px)';
            thanks.style.animation = 'Slide-in 0.75s ease forwards';

            form.style.display = "none";

            thanks.appendChild(text);
            thanks.appendChild(icon);
            formEnvelope.appendChild(thanks);

            emailjs.sendForm('r06ert-je-developer', 'simple-template-01', e.target, 'user_97wrQev3ZYhN9j8ECOZFE')
                .then(response => {
                    console.log('SUCCESS!', response.status, response.text);
                    // IF MESSAGE IS SUCCESFULLY SENT, CHANGE TEXT TO 'Zpráva odeslána, díky!' AND IMAGE TO 'CHECK'...
                    text.innerText = 'Zpráva odeslána, díky!';
                    icon.className = 'Thanks-icon-done';

                    // ...WAITING 1S FOR USER TO SEE TEXT AND ANIMATION...
                    setTimeout(() => {
                        //...SLIDING THANKS ELEMENT OUT...
                        text.style.whiteSpace = "nowrap"
                        thanks.style.opacity = 1;
                        thanks.style.transform = 'translateX(0)';
                        thanks.style.animation = 'Slide-out 1s ease forwards';

                        // ...AND AFTER ANOTHER 1.1S (ENOUGH TO END ALL ANIMATION OF SLIDING OUT) REMOVING THANKS ELEMENT AND REVEALING FORM AGAIN
                        setTimeout(() => {
                            formEnvelope.removeChild(thanks);
                            form.style.display = "flex";
                        }, 1100);
                    }, 1000);
                }).catch(error => {
                    // THIS OUTER TIMEOUT IS NEEDED BECAUSE ERROR RESPONSE COMES, IN CONTRAST TO SUCCES RESPONSE, IMMEDIATELY...
                    setTimeout(() => {
                        console.log('FAILED...', error);
                        text.style.color = 'var(--my-red)';
                        text.innerText = 'Něco je špatně!';
                        icon.className = 'Thanks-icon-wrong';

                        // ...WAITING 1S FOR USER TO SEE TEXT AND ANIMATION...
                        setTimeout(() => {
                            //...SLIDING THANKS ELEMENT OUT...
                            text.style.whiteSpace = "nowrap"
                            thanks.style.opacity = 1;
                            thanks.style.transform = 'translateX(0)';
                            thanks.style.animation = 'Slide-out 1s ease forwards';

                            // ...AND AFTER ANOTHER 1.1S (ENOUGH TO END ALL ANIMATION OF SLIDING OUT) REMOVING THANKS ELEMENT AND REVEALING FORM AGAIN
                            setTimeout(() => {
                                formEnvelope.removeChild(thanks);
                                form.style.display = "flex";
                            }, 1100);
                        }, 1000);
                    }, 1100);
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
                <div id="Form-envelope" className="Stretcher">
                    <h1>KONTAKT</h1>
                    <form id="Form" onSubmit={this.submitForm}>
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