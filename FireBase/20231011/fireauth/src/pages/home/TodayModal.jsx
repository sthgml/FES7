import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import DiaryForm from './DiaryForm'

export default function TodayModal() {
	const { user } = useAuthContext();


    return (
            <section className="today">
            <h2 className="title typing"><span className="mark">당장</span>&nbsp;기록해서 복습하기</h2>
            <h3 className="title"><img src="./images/icon/heart.svg" alt="icon-heart" className="icon-heart"/><strong>당장</strong> &nbsp;기록해서 복습하면&nbsp; <strong>42%</strong>&nbsp;를 더 기억할 수 있어요!</h3>
    
            <DiaryForm uid={user.uid}></DiaryForm>
        </section> 
    )
}