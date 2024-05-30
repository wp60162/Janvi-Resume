import React from 'react';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import styles from './resume.module.css';
import resumeImage from '~/assets/resume_page.png';

function ResumePage() {
  const handleDownload = () => {
    window.location.href = 'https://drive.google.com/file/d/1rlGM47I7j57_CrFMwqzIyG1gZVhBUj_Z/view?usp=sharing'; // Replace with your Google Drive link
  };

  return (
    <div className={styles.container}>
      <Section className={styles.content}>
        <Heading as="h1" level={1} className={styles.heading}>
          About Me
        </Heading>
        <div>
        <p className={styles.intro}>
          My journey in computer science, ignited in the eighth grade, has been profoundly shaped by the guidance of my mentor and the unwavering support of my mom. From sharing knowledge in high school to pursuing a Bachelor's in Computer Applications (BCA), and honing my skills at Royal Technsoft, each step has reinforced my passion for technology and teaching. These experiences have laid a solid foundation for my future endeavors, particularly the dream of establishing my own firm.
          <br /><br />
          As I embark on this entrepreneurial journey, my goal is to create a company that not only showcases technical excellence but also honors the values and support that have propelled me forward. Offering services in web designing, mobile app development, and training programs, my firm will reflect a client-centric approach, embodying the spirit of learning and mentorship instilled by my guru and mom. Every project undertaken will be a tribute to their profound impact, ensuring that our work builds a legacy of digital excellence, one line of code at a time.
        </p>
        </div>

        <div>
        <div className={styles.imageContainer}>
          <img
            src={resumeImage}
            alt="Resume Preview"
            className={styles.image}
          />
        </div>
        </div>
      
        <button onClick={handleDownload} className={styles.button}>
          Download Resume
        </button>
      </Section>
     
    </div>
  );
}

export default ResumePage;
