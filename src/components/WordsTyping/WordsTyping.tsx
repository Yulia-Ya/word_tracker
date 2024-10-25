import { useSelector } from "react-redux";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { ChangeEvent } from "react";
import { countWord } from "./wordSlice";
import { TypingResults } from "./TypingResults/TypingResults";
import styles from './WordTyping.module.css'
import { RootState } from "../../app/store";

export const WordsTyping = () => {
  const dispatch = useAppDispatch();
  const sign = useSelector((state: RootState) => state.word.sign);

  const signHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(countWord(event.currentTarget.value));
  };

  return (
    <div className={styles.wrapper}>
      <textarea placeholder="Type or paste your text here..." value={sign} onChange={signHandler} />
      <TypingResults />
    </div>
  );
};
