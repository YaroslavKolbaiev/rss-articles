import classes from './Card.module.css';

function TrimText({ text }: { text: string }) {
  const maxLength = 150;
  const fadedLetters = 10;

  if (text.length > maxLength) {
    return (
      <>
        <span>{text.slice(0, maxLength - fadedLetters)}</span>
        <span className={classes.fadeText}>{text.slice(maxLength - fadedLetters, maxLength)}</span>
        ...
      </>
    );
  }
  return <span>{text}</span>;
}

export default TrimText;
