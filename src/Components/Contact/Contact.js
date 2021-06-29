import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div id="Contact-item" className="All-contact">
                <div className="Stretcher">
                    <h1>KONTAKT</h1>
                    <form>
                        <input placeholder="Jméno a příjmení"></input>
                        <input placeholder="E-mail"></input>
                        <textarea className="Message" placeholder="Zpráva"></textarea>
                        <button>ODESLAT</button>
                    </form>
                    <div className="Footer">
                        <div className="Stretcher">
                            <div className="Inner-footer">
                                <p>Copyright @ Robert Dominguez</p>
                                <div className="Icons">
                                    <div className="Linked-in"></div>
                                    <div className="Facebook"></div>
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