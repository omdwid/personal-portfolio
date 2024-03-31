import "./app.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const projects = [
  {
    id: 1,
    title: "DevOverflow",
    description:
      "It is a modern stackoverflow with features like: A recommendation system for posts, Global database data-fetching, AI generated answers to questions Badge & Reputation System, Views and Voting Mechanism, Filter and Pagination for almost all pages",
    image: "/DevOverFlow_Thumbnail.png",
    repoLink: "https://github.com/omdwid/DevOverflow",
  },
  {
    id: 2,
    title: "Interactive Comment Section",
    description:
      "The Interactive Comments Section is a frontend application that allows users to engage in real-time discussions leaving comments on various topics. It has adding, updating and deleting comment functionality. Implemented a visually stunning website design using Figma, developed with React, and styled seamlessly with Tailwind CSS, resulting in a better user engagement",
    image: "/image-1.png",
    link: "https://nimble-malabi-6b19f9.netlify.app/",
    repoLink: "https://github.com/omdwid/Interactive-comment-section",
  },
  {
    id: 3,
    title: "Space Tourism",
    description:
      "It is a multi-page space tourism website that shows the whole catalog of the space tourism. The website is designed using Figma and made using React and uses React-router for multipage navigation making it smooth in user interaction.",
    image: "/image-2.png",
    link: "https://6532b5a47d8ee607a817adf0--friendly-dragon-e2c4c1.netlify.app/",
    repoLink: "https://github.com/omdwid/Space-tourism-website",
  },
  {
    id: 4,
    title: "Movie Recommender System",
    description:
      "content based movie recommender system made using TMDB dataset using python and streamlit in frontend",
    image: "/image-3.png",
    link: "https://omdwid-movie-recommender-system-app-b84yu6.streamlit.app/",
    repoLink: "https://github.com/omdwid/Movie-Recommender-System",
  },
];

const App = () => {
  return (
    <div>
      <div>
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Projects">
          <Parallax />
        </section>
        <div>
          {projects.map((item) => {
            return (
              <section key={item.id} className="portflo">
                <Portfolio project={item} />
              </section>
            );
          })}
        </div>
        <section id="Contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
