interface IBoardNewsItemDate {
  date: string;
}

const BoardNewsItemDate = ({ date }: IBoardNewsItemDate) => {
  return <h6>{date}</h6>;
};

export default BoardNewsItemDate;
