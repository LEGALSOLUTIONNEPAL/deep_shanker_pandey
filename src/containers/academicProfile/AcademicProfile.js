import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "./AcademicProfile.scss";

const ExternalLink = ({href, children}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const news = [
  {
    date: "Aug 19, 2023",
    content: (
      <>
        I successfully completed a summer internship as a{" "}
        <ExternalLink href="https://www.interdigital.com/">
          Deep Learning for Image and Video Processing Intern
        </ExternalLink>{" "}
        at <ExternalLink href="https://www.interdigital.com/">InterDigital Communications</ExternalLink>.
      </>
    )
  },
  {
    date: "Jul 26, 2023",
    content: (
      <>
        Our paper{" "}
        <ExternalLink href="http://proceedings.mlr.press/v202/pandey23a/pandey23a.pdf">
          Learn to Accumulate Evidence from All Training Samples: Theory and Practice
        </ExternalLink>{" "}
        was accepted at <ExternalLink href="https://icml.cc/virtual/2023/poster/24071">ICML 2023</ExternalLink>.
      </>
    )
  },
  {
    date: "Jul 24, 2023",
    content: (
      <>
        Our paper{" "}
        <ExternalLink href="http://proceedings.mlr.press/v202/wang23ab/wang23ab.pdf">
          Deep Temporal Sets with Evidential Reinforced Attentions for Unique Behavioral Pattern Discovery
        </ExternalLink>{" "}
        was accepted at <ExternalLink href="https://icml.cc/virtual/2023/poster/24056">ICML 2023</ExternalLink>.
      </>
    )
  },
  {
    date: "Feb 9, 2023",
    content: (
      <>
        Our paper <ExternalLink href="https://arxiv.org/abs/2212.00131">Evidential Conditional Neural Processes</ExternalLink>{" "}
        was accepted as a full paper with an{" "}
        <ExternalLink href="https://underline.io/lecture/68010-evidential-conditional-neural-processes">oral presentation</ExternalLink>{" "}
        at <ExternalLink href="https://ojs.aaai.org/index.php/AAAI/article/view/26125">AAAI 2023</ExternalLink>.
      </>
    )
  },
  {
    date: "Jun 19, 2022",
    content: (
      <>
        Our paper{" "}
        <ExternalLink href="https://openaccess.thecvf.com/content/CVPR2022/html/Pandey_Multidimensional_Belief_Quantification_for_Label-Efficient_Meta-Learning_CVPR_2022_paper.html">
          Multidimensional Belief Quantification for Label-Efficient Meta-Learning
        </ExternalLink>{" "}
        was published at CVPR 2022.
      </>
    )
  }
];

const publications = [
  {
    year: "2023",
    venue: "ICML 2023",
    title: "Learn to Accumulate Evidence from All Training Samples: Theory and Practice",
    authors: "Deep Pandey and Qi Yu",
    citation: "Proceedings of the 40th International Conference on Machine Learning, June 2023",
    abstract: "Evidential deep learning, built upon belief theory and subjective logic, offers a principled and computationally efficient way to turn a deterministic neural network uncertainty-aware. The resultant evidential models can quantify fine-grained uncertainty using learned evidence. We theoretically identify a fundamental limitation in existing evidential activation functions and develop a novel regularizer that alleviates it. Extensive experiments over challenging real-world datasets confirm the theoretical findings and effectiveness of the proposed approach."
  },
  {
    year: "2023",
    venue: "ICML 2023",
    title: "Deep Temporal Sets with Evidential Reinforced Attentions for Unique Behavioral Pattern Discovery",
    authors: "Dingrong Wang, Deep Shankar Pandey, Krishna Prasad Neupane, and four more authors",
    citation: "Proceedings of the 40th International Conference on Machine Learning, June 2023",
    abstract: "We propose a model integrating Deep Temporal Sets with Evidential Reinforced Attentions to discover complex spatiotemporal patterns in multimodal behavioral data. Using child-computer interaction data, the model differentiates children with Autism Spectrum Disorder and typically developing children from sequential visual and touch behaviors, outperforming baseline methods."
  },
  {
    year: "2023",
    venue: "AAAI 2023",
    title: "Evidential Conditional Neural Processes",
    authors: "Deep Shankar Pandey and Qi Yu",
    citation: "Proceedings of the Thirty-Seventh AAAI Conference on Artificial Intelligence, June 2023"
  },
  {
    year: "2022",
    venue: "CVPR 2022",
    title: "Multidimensional Belief Quantification for Label-Efficient Meta-Learning",
    authors: "Deep Shankar Pandey and Qi Yu",
    citation: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, June 2022",
    abstract: "We propose an uncertainty-aware task selection model for label-efficient meta-learning. The model formulates a multidimensional belief measure that quantifies known uncertainty and lower-bounds unknown uncertainty for a task. A multi-query task formulation further improves the computational and labeling efficiency of meta-learning, with experiments demonstrating its effectiveness across real-world few-shot image classification tasks."
  },
  {
    year: "2021",
    venue: "IEEE Big Data 2021",
    title: "Uncertainty-Aware Multiple Instance Learning from Large-Scale Long Time Series Data",
    authors: "Yuansheng Zhu, Weishi Shi, Deep Shankar Pandey, and four more authors",
    citation: "2021 IEEE International Conference on Big Data, 2021",
    abstract: "We propose an uncertainty-aware multiple instance learning framework for classifying large-scale, long-duration time series. Predictive uncertainty guides attention toward discriminative periods and identifies whether predictions are trustworthy. Evaluation on Automatic Identification System vessel data shows effective vessel classification and improved accuracy through uncertainty-aware fusion with Synthetic-Aperture Radar imagery."
  }
];

const projects = [
  {
    title: "Units-ML",
    description: "Research on unit-aware and multimodal machine learning for richer visual understanding.",
    image: require("../../assets/images/projects/units-ml.png")
  },
  {
    title: "Medical Image Understanding",
    description: "Multimodal data fusion for improved medical image understanding.",
    image: require("../../assets/images/projects/medical-image-understanding.png")
  },
  {
    title: "Physics Guided Machine Learning",
    description: "Deep learning models designed to satisfy real-world physics constraints.",
    image: require("../../assets/images/projects/physics-guided-machine-learning.png")
  },
  {
    title: "ASD Behavior Understanding",
    description: "A multimodal machine learning solution for identifying children with Autism Spectrum Disorder.",
    image: require("../../assets/images/projects/asd-behavior-understanding.png")
  },
  {
    title: "Face Identification and Classification",
    description: "Face identification and classification using dimensionality reduction and classical machine learning.",
    image: require("../../assets/images/projects/face-identification-classification.png")
  },
  {
    title: "Redirected Walking in Virtual Reality",
    description: "Research and implementation of redirected-walking algorithms for immersive virtual reality.",
    image: require("../../assets/images/projects/redirected-walking-vr.png")
  }
];

export default function AcademicProfile({page = "about"}) {
  const {isDark} = useContext(StyleContext);

  return (
    <main className={isDark ? "academic-page academic-page-dark" : "academic-page"}>
      {page === "about" && (
        <>
      <section className="academic-hero" id="about">
        <div className="academic-copy">
          <h1>Deep Shankar Pandey</h1>
          <p className="academic-role">
            <span className="academic-role-heading">
              <ExternalLink href="https://pandeydeep9.github.io/#">Ph.D. Student</ExternalLink>
              <span aria-hidden="true"> · </span>
              Rochester Institute of Technology
            </span>
            <span>New York</span>
            <span>93 Scottsville Rd, Rochester, NY 14611</span>
          </p>
          <p>
            I’m a 5th year Ph.D. Student in Computer Science working with{" "}
            <ExternalLink href="https://www.rit.edu/mining/qi-yu">Prof. Qi Yu</ExternalLink> at the{" "}
            <ExternalLink href="https://www.rit.edu/mining/">
              Machine Learning and Data Intensive Computing Lab, RIT
            </ExternalLink>. I completed my undergraduate degree in Electronics and Communication Engineering from the{" "}
            <ExternalLink href="https://pcampus.edu.np/">Institute of Engineering, Pulchowk Campus</ExternalLink>, Nepal.
          </p>
        </div>
        <div className="academic-portrait-wrap">
          <img
            className="academic-portrait"
            src={require("../../assets/images/deep-shankar-pandey-profile.png")}
            alt="Deep Shankar Pandey"
          />
        </div>
      </section>

      <section className="academic-section" id="research">
        <h2>Research</h2>
        <h3 className="section-lead">Trustworthy learning from limited data</h3>
        <p>
          I am interested in developing trustworthy deep learning models that can learn from limited data. My research focuses on developing computationally efficient, adversarially robust deep learning models with accurate, fine-grained uncertainty quantification capabilities, with a special focus on meta-learning models. The developed models have been successfully used for improved few-shot classification, few-shot regression, and image completion problems.
        </p>
        <div className="academic-actions">
          <ExternalLink href="https://pandeydeep9.github.io/assets/pdf/deep_resume_oct14_2023.pdf">
            Deep Resume — updated October 14, 2023
          </ExternalLink>
          <ExternalLink href="https://pandeydeep9.github.io/publications/">Research Publications</ExternalLink>
        </div>
      </section>

      <section className="academic-section interests-section" id="research-interests">
        <h2>Research Interests</h2>
        <div className="interest-list">
          {["Uncertainty Awareness", "Adversarial Robustness", "Meta-Learning", "Transfer Learning", "Multi-task Learning", "Few-Shot Learning", "Pattern Recognition", "Deep Learning for Real-World Problems"].map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="academic-section" id="news">
        <h2>News</h2>
        <div className="news-list">
          {news.map(item => (
            <article className="news-item" key={item.date}>
              <time>{item.date}</time>
              <p>{item.content}</p>
            </article>
          ))}
        </div>
      </section>
        </>
      )}

      {page === "projects" && (
      <section className="academic-section projects-section" id="projects">
        <h2>Projects</h2>
        <p className="projects-intro">Selected research and development work.</p>
        <div className="projects-grid">
          {projects.map(project => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} project preview`} />
              <div className="project-card-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      )}

      {page === "publications" && (
      <section className="academic-section" id="publications">
        <h2>Selected Publications</h2>
        <div className="publication-list">
          {publications.map(publication => (
            <article className="publication-card" key={publication.title}>
              <div className="publication-meta">
                <span className="publication-venue">{publication.venue}</span>
                <span className="publication-year">{publication.year}</span>
              </div>
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors}</p>
              <p className="publication-detail">{publication.citation}</p>
              {publication.abstract && <p className="publication-abstract">{publication.abstract}</p>}
            </article>
          ))}
        </div>
      </section>
      )}

      {page === "cv" && (
      <section className="academic-section cv-section" id="cv">
        <div className="cv-heading-row">
          <h2>CV</h2>
          <ExternalLink href="https://pandeydeep9.github.io/assets/pdf/deep_resume_oct14_2023.pdf">
            Download PDF
          </ExternalLink>
        </div>

        <div className="cv-block">
          <h3>General Information</h3>
          <dl className="cv-details">
            <div><dt>Full Name</dt><dd>Deep Shankar Pandey</dd></div>
            <div><dt>Position</dt><dd>Ph.D. Student in Computer Science</dd></div>
            <div><dt>Institution</dt><dd>Rochester Institute of Technology</dd></div>
            <div><dt>Location</dt><dd>Rochester, New York</dd></div>
          </dl>
        </div>

        <div className="cv-block">
          <h3>Education</h3>
          <div className="cv-timeline-item">
            <span className="cv-date">Present</span>
            <div><h4>Ph.D. in Computer Science</h4><p>Rochester Institute of Technology, Rochester, NY</p><p>Research in trustworthy deep learning, uncertainty awareness, adversarial robustness, and learning from limited data.</p></div>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">Undergraduate</span>
            <div><h4>B.E. in Electronics and Communication Engineering</h4><p>Institute of Engineering, Pulchowk Campus, Tribhuvan University, Nepal</p></div>
          </div>
        </div>

        <div className="cv-block">
          <h3>Experience</h3>
          <div className="cv-timeline-item">
            <span className="cv-date">2023</span>
            <div><h4>Deep Learning for Image and Video Processing Intern</h4><p>InterDigital Communications</p><p>Completed a research-focused summer internship in deep learning for image and video processing.</p></div>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">Current</span>
            <div><h4>Graduate Researcher</h4><p>Machine Learning and Data Intensive Computing Lab, RIT</p><p>Developing efficient, robust, uncertainty-aware models for few-shot learning and related problems.</p></div>
          </div>
        </div>

        <div className="cv-block">
          <h3>Undergraduate Projects</h3>
          <ul className="cv-list">
            <li><strong>Redirected Walking in Virtual Reality:</strong> researched translational, rotational, and curvature-gain algorithms for immersive VR.</li>
            <li><strong>Face Identification and Classification:</strong> applied dimensionality reduction and classical machine-learning methods.</li>
            <li><strong>ASD Behavior Understanding:</strong> explored multimodal learning for identifying behavioral patterns associated with Autism Spectrum Disorder.</li>
          </ul>
        </div>

        <div className="cv-block">
          <h3>Academic Interests</h3>
          <p>Deep Learning, Meta-Learning, Uncertainty Awareness, Adversarial Robustness, Pattern Recognition, Few-Shot Learning, and real-world applications of AI.</p>
        </div>

        <div className="cv-block">
          <h3>Other Interests</h3>
          <p>Hiking, cycling, traveling, and exploring the outdoors.</p>
        </div>
      </section>
      )}
      <footer className="academic-social-footer" aria-label="Academic and social profiles">
        <SocialMedia />
      </footer>
    </main>
  );
}
