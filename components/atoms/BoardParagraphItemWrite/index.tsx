interface IBoardParagraphItemWriter {
  writer: string;
}

const BoardParagraphItemWriter = ({ writer }: IBoardParagraphItemWriter) => {
  return <h6>{writer}</h6>;
};

export default BoardParagraphItemWriter;
