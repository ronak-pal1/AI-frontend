import Header from "../components/Header";
import "../styles/homepage.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <div style={{ position: "relative" }}>
        <svg>
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="yellow" />
              <stop offset="100%" stopColor="red" />
            </linearGradient>
          </defs>
          <path d="M 0 20 L 1440 20" />
          <path d="M 0 120 L 1440 120" />
          <path d="M 0 220 L 1440 220" />
          <path d="M 0 320 L 1440 320" />
          <path d="M 0 420 L 1440 420" stroke="url(#grad1)" />
          <path d="M 0 520 L 1440 520" />
          <path d="M 0 620 L 1440 620" />
          <path d="M 0 720 L 1440 720" />

          <path d="M 40 0 V 40 800" />
          <path d="M 140 0 V 140 800" />
          <path d="M 240 0 V 240 800" />
          <path d="M 340 0 V 340 800" />
          <path d="M 440 0 V 440 800" />
          <path d="M 540 0 V 540 800" />
          <path d="M 640 0 V 640 800" />
          <path d="M 740 0 V 740 800" />
          <path d="M 840 0 V 840 800" />
          <path d="M 940 0 V 940 800" />
          <path d="M 1040 0 V 1040 800" />
          <path d="M 1140 0 V 1140 800" />

          <path d="M 1240 0 V 1240 800" />
          <path d="M 1340 0 V 1340 800" />

          <path d="M 1440 0 V 1440 800" />

          <rect
            x="50"
            y="500"
            width="200"
            height="200"
            fill="yellow"
            transform="rotate(10)"
          />
          <polygon points="70 550, 270 550,170 750" fill="green" />
          <rect x="290" y="620" width="50" height="250" fill="blue"></rect>
          <rect x="400" y="700" width="300" height="70" fill="orange" />
          <circle cx="450" cy="650" r="50" fill="yellow" id="svg-circle1" />
        </svg>

        <div className="heroSection">
          <div>
            <p>Empower the world with AI</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
