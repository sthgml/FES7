import React, { useEffect, useState } from "react";
import ImageList from "./Components/ImageList";
import useScroll from "./Hooks/useScroll";
import Loading from "./Components/Loading";

function App3 () {
    const [imageList, setImageList] = useState([]);
    // api에 전달할 페이지 값을 관리합니다.
    const [pageToFetch, setPageToFetch] = useState(1);
    const isBottom = useScroll();

    //Loading관련 상태
    const [isLoading, setIsLoading] = useState(false);

    // 스크롤이 끝까지 이동했을 경우 데이터의 페이지를 하나 올립니다.
    useEffect(()=>{
        if(isBottom){
            setPageToFetch((prev)=>{
                return prev + 1
            })
        }
    },[isBottom]) //isBottom이 변화할때마다 콜백함수가 실행됩니다.

    async function fetchimages() {
        try {
            // 통신을 시작할 때 로딩 트루
            setIsLoading(true);
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`)

            if(!response.ok){
                throw new Error("네트워크에 문제가 발생했습니다!")
            }

            const data = await response.json();

            // console.log(data) 기존 데이터에 새로 받은 데이터 추가하기
            setImageList((prev)=>[...prev, ...data])

            // 통신을 완료하면 로딩 폴스
            setIsLoading(false);

        } catch (errorMsg) {
            console.error(errorMsg)
        }
    }
    
    // componenet가 마운트 되면 이미지 데이터를 불러옵니다.
    useEffect(()=>{
        fetchimages()
    }, [pageToFetch]) // 의존 배열을 비워두면, component가 렌더링 됐을 때 딱 한번만 실행됩니다. // 변수를 넣으면 들어간 변수가 변경될 때마다 콜백 함수가 실행됩니다.
    
    return (
        <>
            <ImageList data={imageList}/> 
            { isLoading && (<Loading/>) }
        </>
       
    )
}

export default App3;