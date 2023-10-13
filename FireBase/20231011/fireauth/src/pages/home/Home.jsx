import TodayModal from "./TodayModal"
import DiaryList from './DiaryList';
import useCollection from '../../hooks/useCollection';
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
	const { user } = useAuthContext();
  console.log("user", user.uid) 
  const { documents, error } = useCollection( 'diary', ['uid', '==', user.uid] );
    return (
			<> 
        <section class="old">
          <h2 class="title typing">
            <span class="mark">당장</span>
            &nbsp;기록했던 내용들을 다시 타이핑 해보면서 복습해보세요!
          </h2>
          <div class="category-24hr">
            <h3 class="title"><img src="./images/icon/icon-d-of-day.png" alt="icon-d-of-day" class="icon-d-of-day" /><strong>24시간 </strong> &nbsp;| 지금 복습하면&nbsp; <strong2>60%</strong2>&nbsp;를 더 기억할 수 있어요!
            </h3>
              <ul class="note-list">
                {error && <strong>{error}</strong> }
                {documents && <DiaryList diaries={documents} />}
              </ul>
          </div>
        </section>
        
        <TodayModal />
			</>
    )
}