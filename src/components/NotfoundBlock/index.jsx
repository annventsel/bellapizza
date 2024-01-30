import styles from './NotfoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😕</span>
        <br />
        Not Found
      </h1>
    </div>
  )
}

export default NotFoundBlock;
