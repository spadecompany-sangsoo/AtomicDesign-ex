import BoardTemplates from '@/components/templates/BoardTemplates';
import { useQuery } from '@tanstack/react-query';
import { getParagraph } from '@/libs/api/board/board-api';
import Layout from '@/pages/Layout';
import { IParagraph } from '@/@types/board/paragraph';
import BoardParagraphItem from '@/components/molecules/BoardParagraphItem';

const ParagraphPage = () => {
  const { data, isLoading, isSuccess } = useQuery<IParagraph[]>(['paragraph'], getParagraph);

  return (
    <Layout>
      {isSuccess ? (
        <BoardTemplates>
          <BoardTemplates.BoardHead>
            <BoardTemplates.BoardHead.BoardTitle text="Paragraph" />
            <BoardTemplates.BoardHead.BoardLengthTxt length={data.length} />
          </BoardTemplates.BoardHead>
          <BoardTemplates.BoardList
            data={data}
            className="paragraph_wrap"
            renderListItem={(item) => (
              <BoardParagraphItem item={item as IParagraph} key={item.id} />
            )}
          />
        </BoardTemplates>
      ) : null}
    </Layout>
  );
};

export default ParagraphPage;
