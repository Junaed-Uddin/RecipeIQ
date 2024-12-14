const Footer = () => {
  return (
    <footer className="footer flex flex-wrap md:justify-around items-start bg-base-200 text-base-content p-5 sm:p-10 mt-10 rounded-2xl">
      <nav className="flex flex-col flex-grow md:flex-grow-0">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Partners</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Gallery</a>
        <a className="link link-hover">Cooking Chefs</a>
      </nav>
      <nav className="flex flex-col flex-grow md:flex-grow-0">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Feedback</a>
      </nav>
      <nav className="flex flex-col flex-grow md:flex-grow-0">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form className="">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-48 md:w-full join-item"
            />
            <button className="btn btn-primary text-white join-item">Send</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
