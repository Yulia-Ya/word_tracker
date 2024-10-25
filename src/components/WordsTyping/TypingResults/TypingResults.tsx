import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import styles from './TypingResults.module.css'


export const TypingResults = () => {
    const wordCount = useSelector((state: RootState) => state.word.word);
    const letterCount = useSelector((state: RootState) => state.word.letter);
    const punctuationCount = useSelector((state: RootState) => state.word.punctuation);
  return (
    <div className={styles.results}>
      <span>words: {wordCount}</span>
      <span>letters: {letterCount}</span>
      <span>punctuation: {punctuationCount}</span>
    </div>
  );
};
