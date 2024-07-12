import React from 'react';
import './Portfolio.css'; // CSS for styling

const ProjectSection = () => {
  return (
    <section className="project-section" id="project">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        <div className="project-item">
          <a
            href="https://github.com/sainagabharatreddy/waycommunity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/free-vector/meeting-office-background_23-2148097347.jpg?ga=GA1.2.605081660.1720698599&semt=ais_user"
              alt="Meet the Office"
              className="project-image"
            />
          </a>
          <div className="project-description">Social community Application</div>
          <div className="project-technologies">
            Technologies: Next.js, React , Node.js, Express, MongoDB, Clerk Auth
          </div>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/sainagabharatreddy/SpringBoot-CRUD---Operations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/free-vector/choice-worker-concept_23-2148642741.jpg?ga=GA1.2.605081660.1720698599&semt=ais_user"
              alt="Project 4"
              className="project-image"
            />
          </a>
          <div className="project-description"> EmployMent Management System</div>
          <div className="project-technologies">
            Technologies: [Spring Boot , react, mysql , Rest Apis]
          </div>
        </div>
        <div className="project-item">
          <a
            href="https://zoma-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/premium-photo/close-up-male-hands-using-laptop-wooden-desk-with-creative-ai-chat-hologram-blurry-background-chat-gpt-communication-bot-concept-double-exposure_670147-104663.jpg?ga=GA1.2.605081660.1720698599&semt=ais_user"
              alt="AI Chat"
              className="project-image"
            />
          </a>
          <div className="project-description">AI Chat Application</div>
          <div className="project-technologies">
            Technologies: React, Tailwind, Gemini's API
          </div>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/sainagabharatreddy/ecom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.2.605081660.1720698599&semt=sph"
              alt="Ecommerce"
              className="project-image"
            />
          </a>
          <div className="project-description">E-commerce</div>
          <div className="project-technologies">
            Technologies: Redux, React, Tailwind , Json Data
          </div>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/sainagabharatreddy/Typingspeed-Checker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/premium-vector/blogging-writer-concept-typing-speed-test-vector-icon-design-cloud-computing-internet-hosting_135661-341.jpg"
              alt="Project 1"
              className="project-image"
            />
          </a>
          <div className="project-description"> Typing speed checking </div>
          <div className="project-technologies">
            Technologies: [HTML5, CSS3 , Java script]
          </div>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/sainagabharatreddy/React-FoodSearchUsingApi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/premium-vector/ordering-menu_662093-1618.jpg?ga=GA1.2.605081660.1720698599&semt=ais_user"
              alt="Project 2"
              className="project-image"
            />
          </a>
          <div className="project-description">Food Searching Application</div>
          <div className="project-technologies">
            Technologies: [React, BootStrap , Api Integration]
          </div>
        </div>
        <div className="project-item">
          <a
            href="https://github.com/sainagabharatreddy/VideoConference-mern-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/free-vector/group-video-concept-illustration_114360-4792.jpg?ga=GA1.2.605081660.1720698599&semt=ais_user"
              alt="Project 3"
              className="project-image"
            />
          </a>
          <div className="project-description">Video Conferencing Application</div>
          <div className="project-technologies">
            Technologies: [React, html, css, javascript, Node js, Express js, Socket.io]
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
