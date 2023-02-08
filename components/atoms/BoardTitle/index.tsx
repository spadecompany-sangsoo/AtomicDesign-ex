interface IBoardTitle {
  text: string;
}

const BoardTitle = ({ text }: IBoardTitle) => {
  return <h2>{text}</h2>;
};

export default BoardTitle;
