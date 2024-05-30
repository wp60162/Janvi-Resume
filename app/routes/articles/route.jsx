import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';


export async function loader({ request }) {
  const slug = request.url.split('/').at(-1);
  const module = await import(`../articles.${slug}.mdx`);
  const text = await import(`../articles.${slug}.mdx?raw`);
  const readTime = readingTime(text.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  });
}
export function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/resume.pdf'; // Replace with the path to your resume file
    link.download = 'Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <Section className={styles.content}>
        <Heading as="h1" level={1} className={styles.heading}>
          About Me
        </Heading>
        <p className={styles.intro}>
          Hi, I'm [Your Name], a passionate developer with expertise in [Your Skills]. 
          I have a strong background in [Your Background] and have worked on various projects 
          involving [Your Projects/Technologies]. I'm always eager to learn new technologies 
          and improve my skills. Here is my resume for more details about my professional journey.
        </p>
        <img src="/path/to/your/resume-image.jpg" alt="Resume Preview" className={styles.image} /> {/* Replace with the path to your resume image */}
        <button onClick={handleDownload} className={styles.button}>Download Resume</button>
      </Section>
      <Footer />
    </div>
  );
}



export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
