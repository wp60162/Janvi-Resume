import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      // width="48"
      // height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      {/* <defs>
        <clipPath id={clipId}>
          <path d="C:\Users\91909\Downloads\portfolio-master\portfolio-master\app\components\monogram\icon-home.png" />
        </clipPath>
      </defs> */}
      {/* <rect clipPath={`url(#${clipId})`} width="100%" height="100%" /> */}
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
