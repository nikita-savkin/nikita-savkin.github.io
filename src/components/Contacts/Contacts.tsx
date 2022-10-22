import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="info">
        My inbox is always open. Whether you have a question or just want to say hi or you want to
        meet me up for a coffee I'll try my best to get back to you!
      </div>
      <div className="content">
        <form className="form">
          <div>
            <div className="form__title">Your Name</div>
            <input type="text" />
          </div>
          <div>
            <div className="form__title">Your Email</div>
            <input type="text" />
          </div>
          <div>
            <div className="form__title">Message</div>
            <textarea placeholder="Type something..." />
          </div>
          <button>Send Message</button>
        </form>
        <div className="image">
          <div className="main">
            <img src="./img/mail.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
