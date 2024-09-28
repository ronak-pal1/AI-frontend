import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>flappy.ai</p>
        </div>

        <div>
          <a href="#">products</a>
          <a href="#">docs</a>
          <a href="#">Events</a>
          <a href="#">pricing</a>
        </div>

        <div>
          <button>Login</button>
          <button>Create an account</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
