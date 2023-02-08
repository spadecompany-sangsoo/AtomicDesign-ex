interface IBoardLengthTxt {
  length: number;
}

const BoardLengthTxt = ({ length }: IBoardLengthTxt) => {
  return <p>{length}</p>;
};

export default BoardLengthTxt;
