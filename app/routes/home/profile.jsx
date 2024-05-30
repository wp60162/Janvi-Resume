import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
  <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
    <DecoderText text="Hi there" start={visible} delay={500} />
  </Heading>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    I'm Janvi Shah, a passionate design enthusiast and the driving force behind
    Neshaytech. I have specialization in crafting exceptional websites, apps, logos, and
    branding strategies that leave a lasting impression. Let's connect and explore how I
    can elevate your brand to new heights! Specializing in web/app development, logo
    design, and branding strategies. Let's collaborate to elevate your brand's online
    presence.
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    As a premier provider of advanced technology services, we offer customized solutions
    designed to drive business success. Our team of experts is committed to guiding you
    through the complexities of the digital landscape.
 {/* This venture embodies learning, mentorship, and the support of a community, ensuring every milestone reflects these principles. */}

Offering web design, mobile app development, training programs, and a client-centric approach, my firm is dedicated to shaping the future of digital excellence. Join us as we build legacies, one line of code at a time.
    {/* <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
    about new projects, so feel free to drop me a line. */}
  </Text>
</Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              {/* <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button> */}
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className='i'>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
              </div>
          
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
