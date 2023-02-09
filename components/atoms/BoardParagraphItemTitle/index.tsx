interface IBoardParagraphItemTitle {
  title: string;
}

const BoardParagraphItemTitle = ({ title }: IBoardParagraphItemTitle) => {
  return <h6>{title}</h6>;
};

export default BoardParagraphItemTitle;
