import BoardTemplates from '@/components/templates/BoardTemplates';
import { useQuery } from '@tanstack/react-query';
import { getInformation } from '@/libs/api/board/board-api';
import { IInformation } from '@/@types/board/information';
import Layout from '@/pages/Layout';
import BoardInfoItem from '@/components/molecules/BoardInfoItem';

const InformationPage = () => {
  const { data, isLoading, isSuccess } = useQuery<IInformation[]>(['information'], getInformation);

  return (
    <Layout>
      {isSuccess ? (
        <BoardTemplates>
          <BoardTemplates.BoardHead>
            <BoardTemplates.BoardHead.TitleXLarge title="Information" />
            <BoardTemplates.BoardHead.TextXLarge text={data.length} />
          </BoardTemplates.BoardHead>
          <BoardTemplates.BoardList
            data={data}
            className="information_wrap"
            renderListItem={(item) => <BoardInfoItem item={item as IInformation} key={item.id} />}
          />
        </BoardTemplates>
      ) : null}
    </Layout>
  );
};

export default InformationPage;
