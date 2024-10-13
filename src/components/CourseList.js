import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseItem from './CourseItem';
import { clearCard } from '../control/cardSlice';

function CourseList() {
    const dispatch = useDispatch();
    const {cardItems, quantity, total} = useSelector((store) => store.card);
  return (
    <div>
        {quantity < 1 ? (
            <section className='card'>
                <h2>Sepetim</h2>
                <h4>Bomboş</h4>
            </section>
        ):
        (
            <section className='card'>
                <h2>Sepetim</h2>
                <div>
                    {cardItems.map((element,index) => {
                        return <CourseItem item={element} key={index}/>
                    })}
                </div>
                <footer>
                    <hr/>
                    <div>
                        <h4>Toplam Tutar: <span>{total} TL</span></h4>
                    </div>
                    <button className='btn-delete btn-delete-all' onClick={() => dispatch(clearCard())}>Temizle</button>
                </footer>
            </section>
        )}
    </div>
  )
}

export default CourseList