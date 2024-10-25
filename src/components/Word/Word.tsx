import { useSelector } from "react-redux";
import { useAppDispatch } from "../../common/hooks/useAppDispatch";
import { RootState } from "../../app/store";
import { ChangeEvent } from "react";
import { countWord } from "./wordSlice";



export const Word = () => {
    const dispatch = useAppDispatch()
    const sign = useSelector((state: RootState) => state.word.sign)
    const wordCount =  useSelector((state: RootState) => state.word.word)
    const letterCount =  useSelector((state: RootState) => state.word.letter)
const punctuationCount = useSelector((state: RootState) => state.word.punctuation)
    
const signHandler =(event: ChangeEvent<HTMLTextAreaElement>) =>{
    dispatch(countWord(event.currentTarget.value))

}

  return (
    <>
      <textarea placeholder="Type or paste your text here..." value={sign} onChange={signHandler}/>
      <p>words: {wordCount}</p>
      <p>letters: {letterCount}</p>
      <p>punctuation: {punctuationCount}</p>
    </>
  );
};
