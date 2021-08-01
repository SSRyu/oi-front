import React from 'react';
import CuisineOfToday from './CuisineOfToday';

class CuisineOfTodayList extends React.Component {

    render() {
        return(
            <div>
                <p> 오늘의 요리 </p>
                <CuisineOfToday /> {/* 1위 */}
                <CuisineOfToday /> {/* 2위 */}
                <CuisineOfToday /> {/* 3위 */}
            </div>
        )
    }
}

export default CuisineOfTodayList;